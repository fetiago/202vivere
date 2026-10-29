#!/usr/bin/env python3
"""Prepara somente os arquivos públicos, sem documentos ou imagens de trabalho."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
import shutil
from urllib.parse import urljoin, urlparse


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "_site"
PUBLIC_FILES = ("index.html", "en/index.html", "config.js")
ASSET_REFERENCE = re.compile(r"(?:\.\./)?assets/[^\s\"'<>`]+")
IMAGE_EXTENSIONS = {".webp", ".png", ".jpg", ".jpeg", ".svg", ".avif", ".gif", ".ico"}


class PublicImageReferences(HTMLParser):
    def __init__(self):
        super().__init__()
        self.sources = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "img" and attrs.get("src"):
            self.sources.append(attrs["src"])


def metadata_for_site(html, language, base_url):
    """Usa URLs públicas absolutas no pacote, preservando os fontes editáveis."""
    pt_url = base_url
    en_url = urljoin(base_url, "en/")
    current_url = en_url if language == "en" else pt_url
    replacements = {
        r'<link rel="canonical" href="[^"]*"\s*/?>':
            f'<link rel="canonical" href="{current_url}">',
        r'<link rel="alternate" hreflang="pt-BR" href="[^"]*"\s*/?>':
            f'<link rel="alternate" hreflang="pt-BR" href="{pt_url}">',
        r'<link rel="alternate" hreflang="en" href="[^"]*"\s*/?>':
            f'<link rel="alternate" hreflang="en" href="{en_url}">',
        r'<meta property="og:image" content="[^"]*"\s*/?>':
            f'<meta property="og:image" content="{urljoin(base_url, "assets/og-202-vivere.jpg")}">',
        r'<meta name="twitter:image" content="[^"]*"\s*/?>':
            f'<meta name="twitter:image" content="{urljoin(base_url, "assets/og-202-vivere.jpg")}">',
    }
    for pattern, replacement in replacements.items():
        html = re.sub(pattern, lambda _: replacement, html)
    html = html.replace(
        "</head>", f'  <meta property="og:url" content="{current_url}">\n</head>', 1
    )
    return html


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default="https://fetiago.github.io/202vivere/")
    args = parser.parse_args()
    base_url = args.base_url.rstrip("/") + "/"
    parsed_url = urlparse(base_url)
    if parsed_url.scheme not in {"http", "https"} or not parsed_url.netloc:
        parser.error("--base-url deve ser uma URL HTTP(S) completa")
    if parsed_url.query or parsed_url.fragment or parsed_url.username or parsed_url.password:
        parser.error("--base-url não deve conter credenciais, consulta ou fragmento")

    sources = {name: (ROOT / name).read_text(encoding="utf-8") for name in PUBLIC_FILES}
    assets = set()
    for source in sources.values():
        for reference in ASSET_REFERENCE.findall(source):
            name = reference.removeprefix("../")
            path = (ROOT / name).resolve()
            if not path.is_relative_to(ROOT / "assets"):
                raise ValueError("Referência de imagem fora de assets/")
            if not path.is_file() or path.is_symlink():
                raise ValueError(f"Imagem ausente ou inválida: {name}")
            if path.suffix.lower() not in IMAGE_EXTENSIONS or "-old." in path.name:
                raise ValueError(f"Imagem não permitida na publicação: {name}")
            assets.add(name)

    if OUTPUT.is_symlink():
        raise ValueError("A pasta _site não pode ser um link simbólico")
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()

    for name, content in sources.items():
        destination = OUTPUT / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        if name.endswith(".html"):
            content = metadata_for_site(content, "en" if name.startswith("en/") else "pt", base_url)
        destination.write_text(content, encoding="utf-8")
    for name in sorted(assets):
        destination = OUTPUT / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(ROOT / name, destination)
    (OUTPUT / ".nojekyll").touch()

    # Confere as referências locais das fotos em ambas as páginas geradas.
    for name in ("index.html", "en/index.html"):
        page = OUTPUT / name
        images = PublicImageReferences()
        images.feed(page.read_text(encoding="utf-8"))
        for source in images.sources:
            if urlparse(source).scheme or source.startswith("//"):
                continue
            image = (page.parent / source).resolve()
            if not image.is_relative_to(OUTPUT) or not image.is_file():
                raise ValueError(f"Referência de imagem inválida em {name}")

    files = [path for path in OUTPUT.rglob("*") if path.is_file()]
    size = sum(path.stat().st_size for path in files)
    print(f"Publicação preparada em _site/: {len(files)} arquivos, {size / 1024:.0f} KiB.")
    print("Somente páginas, configuração pública e imagens referenciadas foram incluídas.")


if __name__ == "__main__":
    main()
