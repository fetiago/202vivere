# 202 Vivere

Site estático de um apartamento para locação residencial em Maceió, com versões em português e inglês e atendimento com Norma, a corretora.

Repositório público: [fetiago/202vivere](https://github.com/fetiago/202vivere).

Site: [202 Vivere](https://fetiago.github.io/202vivere/).

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `index.html` | Página em português. |
| `en/index.html` | Página em inglês. |
| `config.js` | Dados públicos, mensagens de contato e galeria. |
| `assets/` | Imagens otimizadas do projeto. |
| `scripts/build_site.py` | Prepara somente os arquivos necessários ao site público. |
| `.github/workflows/pages.yml` | Prepara o pacote e permite publicação no GitHub Pages. |

## Executar localmente

Requer Python 3.9 ou mais recente. Não há instalação de dependências para gerar o site.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8000/` para editar e conferir as páginas.

Para conferir exatamente o pacote destinado à hospedagem:

```sh
python3 scripts/build_site.py
python3 -m http.server 8000 --bind 127.0.0.1 --directory _site
```

A pasta `_site/` é gerada e não deve ser commitada. O argumento `--base-url` permite ajustar as URLs de compartilhamento a uma hospedagem diferente.

## O que fica fora do Git

O `.gitignore` agrupa as exclusões por finalidade:

- `99_originals/`: originais de fotos, vídeo e materiais recebidos.
- `finalizadas-para-o-site/`: cópias de preparação; as imagens usadas estão em `assets/`.
- `.photo-review/` e `.design-review/`: capturas, comparações e resultados locais.
- `ANALISE-*.md`, `INSTRUCOES-*.md`, `CONTEUDO-*.md`, `PERGUNTAS-*.md`, `AGENTS` e `MOTIVATION`: documentos internos.
- Fachadas, planta do pavimento e mapa auxiliares que não são usados pela página atual.
- `planta-cobertura-*.png` na raiz: recortes intermediários das plantas.
- Arquivos `*-old.*`, backups, temporários e logs.
- Pastas de saída, dependências e ambientes locais.
- Arquivos de credenciais e configurações pessoais.

Os arquivos ignorados permanecem no disco. Guardar uma cópia de segurança dos originais, pois o repositório não serve como backup deles. Ao passar a usar uma imagem auxiliar ignorada, revisar a regra correspondente antes de enviar o arquivo.

## Publicação e privacidade

O pacote público inclui apenas `index.html`, `en/index.html`, `config.js`, as imagens referenciadas por esses arquivos e `.nojekyll`. Não publicar a raiz inteira do repositório: ela contém materiais internos.

O construtor também prepara URLs absolutas de canonical, idiomas e imagens de compartilhamento nas páginas geradas. Os arquivos-fonte continuam com os caminhos editáveis do projeto.

Manter o endereço do edifício reservado, inclusive em links, mapas, imagens e metadados. Não colocar credenciais em `config.js`: esse arquivo é público quando o site é hospedado.

### Configuração do GitHub Pages

O repositório e o site são públicos, conforme autorizado pelo responsável pelo projeto. O histórico inicial de trabalho foi preservado separadamente para manter os documentos internos fora deste repositório.

O workflow prepara o pacote em pushes relevantes para `main`. A etapa de publicação depende da variável de repositório `PAGES_ENABLED=true`, definida depois da ativação do Pages.

Para configurar novamente em um repositório equivalente, uma pessoa com administração pode executar:

```sh
gh api --method POST repos/fetiago/202vivere/pages -f build_type=workflow
gh variable set PAGES_ENABLED --body true --repo fetiago/202vivere
gh workflow run pages.yml --ref main --repo fetiago/202vivere
```

Também é possível ativar em **Settings → Pages → Source: GitHub Actions** e definir a variável em **Settings → Secrets and variables → Actions → Variables**.

Referências: [disponibilidade do Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) e [publicação com GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Atualizações

```sh
git add index.html en/index.html config.js assets
git commit -m "Atualiza conteúdo do site"
git push origin main
```

Consultar a aba Actions para verificar a preparação e, quando habilitada, a publicação. Conferir a página em português e a inglesa depois de cada mudança.
