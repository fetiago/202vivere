// 202 Vivere — Configuração Centralizada, Galeria de Rolagem Infinita,
// Operação Diferenciada Desktop/Mobile e Proteção de Contato
// Revisado em 28 de outubro de 2026

const VIVERE_CONFIG = {
  contato: {
    referenciaAtendimento: {
      pt: "Norma, a corretora",
      en: "Norma, the real estate agent"
    },
    acaoBotao: {
      pt: "Falar com Norma",
      en: "Contact Norma"
    },
    nomeFormal: "Norma Aparecida Peres",
    cargoFormal: {
      pt: "Corretora de imóveis",
      en: "Real estate agent"
    },
    creci: "CRECI 1866",
    identificacaoCompleta: {
      pt: "Norma Aparecida Peres · Corretora de imóveis · CRECI 1866",
      en: "Norma Aparecida Peres · Real estate agent · CRECI 1866"
    },
    // Número armazenado em partes para nunca ficar exposto em texto puro no HTML
    partesTelefone: ["55", "82", "98825", "0000"],
    mensagemWhatsApp: {
      pt: "Olá, Norma. Conheci o 202 Vivere pelo site e estou planejando minha mudança para Maceió. Gostaria de saber mais sobre a locação e a disponibilidade.",
      en: "Hello Norma, I found 202 Vivere on your website and I’m planning a move to Maceió. I’d like to learn more about availability and rental terms."
    }
  },

  imovel: {
    nome: "202 Vivere",
    areaPrincipal: "113 m²",
    areaExata: "113,41 m²",
    localizacaoCurta: {
      pt: "Maceió · Stella Maris / Jatiúca",
      en: "Maceió · Stella Maris / Jatiúca"
    },
    resumoPrincipal: {
      pt: "113 m² · 3 suítes, uma reversível · 2 vagas",
      en: "113 m² · Three en-suite bedrooms, one reversible · Two parking spaces"
    },
    resumoComplemento: {
      pt: "Mais dependência completa (DCE): 4 quartos e 4 banheiros ao todo.",
      en: "Plus a full service room & bathroom (DCE): 4 bedrooms and 4 bathrooms in total."
    },
    legendaFotoHero: {
      pt: "Apartamento mobiliado, na capital com as praias mais bonitas do Nordeste.",
      en: "A furnished apartment in the capital with the most beautiful beaches in Northeast Brazil."
    }
  },

  financeiro: {
    valorMensal: {
      pt: "R$ 8.000/mês",
      en: "BRL 8,000/month"
    },
    inclusoesPrincipais: {
      pt: "Condomínio e IPTU incluídos",
      en: "Condominium fee & IPTU included"
    },
    notaDespesas: {
      pt: "Fale com Norma para agendar visita e confirmar condições.",
      en: "Contact Norma to schedule a viewing and confirm rental terms."
    }
  },

  compartilhamento: {
    pt: {
      title: "202 Vivere · Residência mobiliada para locação em Maceió (113 m²)",
      description: "Apartamento mobiliado em Maceió (Stella Maris / Jatiúca): 113 m², 3 suítes — sendo uma reversível — mais dependência completa (DCE: 4 quartos e 4 banheiros ao todo) e 2 vagas. R$ 8.000/mês com condomínio e IPTU incluídos.",
      text: "202 Vivere em Maceió: 113 m² mobiliado, 3 suítes (uma reversível) mais dependência completa (DCE) e 2 vagas. R$ 8.000/mês com condomínio e IPTU incluídos."
    },
    en: {
      title: "202 Vivere · Furnished residence for rent in Maceió (113 m²)",
      description: "Furnished residential apartment in Maceió (Stella Maris / Jatiúca): 113 m², 3 en-suite bedrooms (one with flexible bathroom access) plus full service room (DCE: 4 bedrooms and 4 bathrooms in total) and 2 parking spaces. BRL 8,000/month including condominium fee and IPTU.",
      text: "202 Vivere in Maceió: 113 m² furnished apartment, 3 en-suite bedrooms (one reversible) plus service room (DCE), 2 parking spaces. BRL 8,000/month including condominium fee and IPTU."
    }
  },

  // Lista dinâmica de fotos: basta adicionar novos itens aqui para a galeria de rolagem infinita e o lightbox assumirem automaticamente
  fotos: [
    {
      src: "assets/01-sala-principal.webp",
      pos: "38% 50%",
      curto: { pt: "Sala e jantar", en: "Living & dining" },
      detalheCard: { pt: "28,80 m² · Integrada à varanda", en: "28.80 m² · Opens to balcony" },
      titulo: { pt: "Sala de estar e jantar integradas", en: "Open-plan living and dining room" },
      desc: { pt: "Mesa de jantar para seis lugares, parede espelhada, sala de estar ao fundo e acesso direto à varanda nascente.", en: "Dining table for six, mirrored wall, living area and direct access to the east-facing balcony." }
    },
    {
      src: "assets/02-sala-jantar.webp",
      pos: "50% 50%",
      curto: { pt: "Sala de jantar", en: "Dining area" },
      detalheCard: { pt: "Mesa para 6 lugares", en: "Seating for 6" },
      titulo: { pt: "Sala de jantar", en: "Dining area" },
      desc: { pt: "Mesa com tampo de vidro, cadeiras estofadas, banco comprido e circulação para a cozinha e ala íntima.", en: "Glass-top dining table, upholstered chairs, bench seating and circulation to the kitchen and bedroom wing." }
    },
    {
      src: "assets/03-varanda.webp",
      pos: "50% 50%",
      curto: { pt: "Varanda (bancos)", en: "Balcony (benches)" },
      detalheCard: { pt: "Orientação nascente", en: "Morning sun (East)" },
      titulo: { pt: "Varanda integrada à sala (vista dos bancos)", en: "Balcony off the living room (bench seating)" },
      desc: { pt: "A varanda integrada à sala possui bancos de madeira com almofadas, ganchos para rede e guarda-corpo em vidro.", en: "The balcony off the living room features wooden benches with cushions, hammock hooks and glass railing." }
    },
    {
      src: "assets/04-cozinha.webp",
      pos: "50% 58%",
      curto: { pt: "Cozinha", en: "Kitchen" },
      detalheCard: { pt: "Planejada e equipada", en: "Fitted & equipped" },
      titulo: { pt: "Cozinha planejada com eletrodomésticos", en: "Fitted kitchen with appliances" },
      desc: { pt: "Bancada em granito com cuba inox, armários superiores e inferiores, fogão, geladeira e bancada de apoio.", en: "Granite countertop with sink, upper and lower cabinets, stove, refrigerator and breakfast bar." }
    },
    {
      src: "assets/05-area-servico.webp",
      pos: "50% 65%",
      curto: { pt: "Área de serviço", en: "Laundry area" },
      detalheCard: { pt: "Ventilação natural", en: "Natural ventilation" },
      titulo: { pt: "Área de serviço integrada à cozinha", en: "Laundry area connected to the kitchen" },
      desc: { pt: "Lavanderia equipada com máquina de lavar roupas, tanque, janela de ventilação e acesso à dependência completa (DCE).", en: "Laundry area equipped with washing machine, utility sink, window and access to the full service room (DCE)." }
    },
    {
      src: "assets/06-quarto.webp",
      pos: "42% 50%",
      curto: { pt: "Suíte principal", en: "Primary en-suite" },
      detalheCard: { pt: "12,81 m² · Armário em madeira", en: "12.81 m² · Wooden wardrobe" },
      titulo: { pt: "Suíte principal (armário em madeira)", en: "Primary en-suite bedroom (wooden wardrobe)" },
      desc: { pt: "Suíte principal do apartamento (12,81 m² + banheiro privativo de 3,93 m²), com cama de casal e guarda-roupa em madeira.", en: "Primary en-suite bedroom (12.81 m² + 3.93 m² private bathroom), furnished with a double bed and wooden wardrobe." }
    },
    {
      src: "assets/07-quarto-armario-espelhado.webp",
      pos: "50% 60%",
      curto: { pt: "1º quarto (2ª suíte)", en: "1st bedroom (2nd en-suite)" },
      detalheCard: { pt: "10,39 m² · Armário espelhado", en: "10.39 m² · Mirrored wardrobe" },
      titulo: { pt: "1º quarto · 2ª suíte (armário espelhado)", en: "1st bedroom · 2nd en-suite (mirrored wardrobe)" },
      desc: { pt: "1º quarto (2ª suíte privativa, 10,39 m² + banheiro exclusivo de 3,06 m²), equipado com cama de casal e guarda-roupa com portas de correr espelhadas.", en: "1st bedroom (2nd private en-suite, 10.39 m² + 3.06 m² dedicated bathroom), furnished with a double bed and sliding-door mirrored wardrobe." }
    },
    {
      src: "assets/08-banheiro.webp",
      pos: "50% 50%",
      curto: { pt: "Banheiro de suíte", en: "En-suite bathroom" },
      detalheCard: { pt: "Bancada em granito e box", en: "Granite vanity & glass shower" },
      titulo: { pt: "Banheiro de suíte", en: "En-suite bathroom" },
      desc: { pt: "Bancada em granito com cuba embutida, espelho e box com fechamento em vidro.", en: "Granite vanity with inset sink, mirror and glass shower enclosure." }
    },
    {
      src: "assets/09-comodo-apoio.webp",
      pos: "50% 60%",
      curto: { pt: "Dependência (DCE)", en: "Service room (DCE)" },
      detalheCard: { pt: "4º quarto + banheiro ao lado", en: "4th bedroom + adjacent bath" },
      titulo: { pt: "Dependência completa — DCE (4º quarto)", en: "Full service room — DCE (4th bedroom)" },
      desc: { pt: "Quarto da dependência completa (DCE) junto à área de serviço, com janela, prateleiras e banheiro de serviço ao lado.", en: "Service room (DCE) next to the laundry area, with window, shelves and adjacent service bathroom." }
    },
    {
      src: "assets/10-varanda-rede.webp",
      pos: "50% 55%",
      curto: { pt: "Varanda (outro ângulo)", en: "Balcony (second angle)" },
      detalheCard: { pt: "Mesma varanda · Ganchos de rede", en: "Same balcony · Hammock hooks" },
      titulo: { pt: "Mesma varanda vista do outro ângulo (com rede)", en: "Same balcony seen from another angle (with hammock)" },
      desc: { pt: "Outro ângulo da mesma varanda integrada à sala, destacando os ganchos com rede instalada e as plantas junto à porta.", en: "Another angle of the same living room balcony, showing the hammock installed on its hooks and plants by the door." }
    }
  ]
};

function getPageLang() {
  const htmlLang = (document.documentElement.getAttribute("lang") || "pt").toLowerCase();
  return htmlLang.startsWith("en") ? "en" : "pt";
}

function getAssetPrefix() {
  return window.location.pathname.includes("/en/") ? "../" : "";
}

function getRawPhoneDigits() {
  return VIVERE_CONFIG.contato.partesTelefone.join("");
}

function getFormattedPhone() {
  const [cc, ddd, p1, p2] = VIVERE_CONFIG.contato.partesTelefone;
  return `+${cc} ${ddd} ${p1}-${p2}`;
}

function getWhatsAppUrl(lang) {
  const activeLang = lang || getPageLang();
  const text = VIVERE_CONFIG.contato.mensagemWhatsApp[activeLang] || VIVERE_CONFIG.contato.mensagemWhatsApp.pt;
  return `https://wa.me/${getRawPhoneDigits()}?text=${encodeURIComponent(text)}`;
}

function openNormaWhatsApp(event) {
  if (event) event.preventDefault();
  const url = getWhatsAppUrl(getPageLang());
  window.open(url, "_blank", "noopener,noreferrer");
}

// Gera o cartão visual de contato com o número de telefone, garantindo que todo o conteúdo caiba com folga
function generateContactPhoneImageDataUrl() {
  const lang = getPageLang();
  const canvas = document.createElement("canvas");
  const width = 760;
  const height = 280;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FAF8F5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#C5B9AB";
  ctx.lineWidth = 3;
  ctx.strokeRect(14, 14, width - 28, height - 28);

  const leftPad = 44;
  const maxTextWidth = width - leftPad * 2;

  function drawFittedText(text, y, weight, baseSize, family, color) {
    let size = baseSize;
    ctx.fillStyle = color;
    ctx.font = `${weight} ${size}px ${family}`;
    while (ctx.measureText(text).width > maxTextWidth && size > 14) {
      size -= 1;
      ctx.font = `${weight} ${size}px ${family}`;
    }
    ctx.fillText(text, leftPad, y);
  }

  drawFittedText(
    lang === "en" ? "WHATSAPP & PHONE" : "WHATSAPP E TELEFONE",
    66,
    "600",
    19,
    "sans-serif",
    "#524C47"
  );

  drawFittedText(
    VIVERE_CONFIG.contato.nomeFormal,
    114,
    "700",
    32,
    "Georgia, serif",
    "#181716"
  );

  drawFittedText(
    `${VIVERE_CONFIG.contato.cargoFormal[lang]} · ${VIVERE_CONFIG.contato.creci}`,
    150,
    "500",
    22,
    "sans-serif",
    "#3B3734"
  );

  ctx.strokeStyle = "#DED6CC";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(leftPad, 174);
  ctx.lineTo(width - leftPad, 174);
  ctx.stroke();

  drawFittedText(
    getFormattedPhone(),
    230,
    "700",
    42,
    "sans-serif",
    "#17412E"
  );

  return canvas.toDataURL("image/png");
}

function openPhoneCardModal(triggerEl) {
  const lang = getPageLang();
  const dataUrl = generateContactPhoneImageDataUrl();
  const title = VIVERE_CONFIG.contato.referenciaAtendimento[lang];
  const desc = lang === "en"
    ? "Available via WhatsApp or phone call."
    : "Atendimento pelo WhatsApp ou ligação.";
  openSingleImageModal(dataUrl, title, desc, triggerEl);
}

// ============================================================================
// GALERIA DE ROLAGEM INFINITA (SEM NUMERAÇÃO 01, 02... NEM 01/10)
// ============================================================================
let isAdjustingInfiniteScroll = false;

function buildGalleryCardMarkup(foto, realIndex, setIndex, lang, prefix) {
  const label = lang === "en"
    ? `Open photo: ${foto.curto.en}`
    : `Abrir foto: ${foto.curto.pt}`;
  const sub = foto.detalheCard ? foto.detalheCard[lang] : "";
  const isClone = setIndex !== 1;
  return `
    <button type="button" class="gallery-card" data-index="${realIndex}" data-set="${setIndex}" ${isClone ? 'tabindex="-1"' : ""} onclick="openGalleryLightbox(${realIndex}, this)" aria-label="${label}">
      <div class="gallery-frame">
        <img src="${prefix}${foto.src}" alt="${foto.titulo[lang]}" loading="lazy" style="object-position: ${foto.pos || '50% 50%'};">
      </div>
      <div class="gallery-caption-box">
        <span class="gallery-caption">${foto.curto[lang]}</span>
        ${sub ? `<span class="gallery-subcaption">${sub}</span>` : ""}
      </div>
    </button>
  `;
}

function getOneSetSpanPx() {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return 0;
  const total = VIVERE_CONFIG.fotos.length;
  const cards = grid.querySelectorAll(".gallery-card");
  if (cards.length < total * 2) return 0;
  return cards[total].offsetLeft - cards[0].offsetLeft;
}

function centerInfiniteGalleryScroll() {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return;
  const oneSetWidth = getOneSetSpanPx();
  if (oneSetWidth <= 0) return;
  isAdjustingInfiniteScroll = true;
  grid.style.scrollBehavior = "auto";
  grid.scrollLeft = oneSetWidth;
  requestAnimationFrame(() => {
    grid.style.scrollBehavior = "";
    isAdjustingInfiniteScroll = false;
    updateCarouselDots();
  });
}

function renderGalleryGrid() {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return;

  const lang = getPageLang();
  const prefix = getAssetPrefix();

  // Renderiza 3 conjuntos contíguos [0, 1, 2] para rolagem infinita contínua nos dois sentidos
  const setsMarkup = [0, 1, 2].map((setIndex) =>
    VIVERE_CONFIG.fotos.map((foto, realIndex) =>
      buildGalleryCardMarkup(foto, realIndex, setIndex, lang, prefix)
    ).join("")
  ).join("");

  grid.innerHTML = setsMarkup;

  const dotsContainer = document.getElementById("galeria-dots");
  if (dotsContainer) {
    dotsContainer.innerHTML = VIVERE_CONFIG.fotos.map((foto, index) => {
      const title = foto.curto[lang];
      return `<button type="button" class="carousel-dot${index === 0 ? ' active' : ''}" onclick="scrollToCarouselIndex(${index})" aria-label="${title}" title="${title}"></button>`;
    }).join("");
  }

  centerInfiniteGalleryScroll();
}

function getCarouselStepWidth() {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return 320;
  const firstCard = grid.querySelector(".gallery-card");
  if (!firstCard) return 320;
  const style = window.getComputedStyle(grid);
  const gap = parseFloat(style.columnGap || style.gap) || 16;
  return firstCard.getBoundingClientRect().width + gap;
}

function normalizeInfiniteScrollPosition() {
  const grid = document.getElementById("galeria-grid");
  if (!grid || isAdjustingInfiniteScroll) return;
  const oneSetWidth = getOneSetSpanPx();
  if (oneSetWidth <= 0) return;

  if (grid.scrollLeft < oneSetWidth * 0.35) {
    isAdjustingInfiniteScroll = true;
    grid.style.scrollBehavior = "auto";
    grid.scrollLeft += oneSetWidth;
    grid.style.scrollBehavior = "";
    isAdjustingInfiniteScroll = false;
  } else if (grid.scrollLeft > oneSetWidth * 1.65) {
    isAdjustingInfiniteScroll = true;
    grid.style.scrollBehavior = "auto";
    grid.scrollLeft -= oneSetWidth;
    grid.style.scrollBehavior = "";
    isAdjustingInfiniteScroll = false;
  }
}

function spinGalleryCarousel(direction) {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return;

  normalizeInfiniteScrollPosition();

  const step = getCarouselStepWidth();
  const multiplier = window.innerWidth >= 1024 ? 2 : 1;
  const delta = direction * step * multiplier;

  grid.scrollBy({ left: delta, behavior: "smooth" });
}

function scrollToCarouselIndex(index) {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return;
  const total = VIVERE_CONFIG.fotos.length;
  const cards = grid.querySelectorAll(".gallery-card");
  // Aponta sempre para o conjunto central (Set 1)
  const target = cards[total + index] || cards[index];
  if (!target) return;
  grid.scrollTo({
    left: target.offsetLeft - grid.offsetLeft,
    behavior: "smooth"
  });
}

function updateCarouselDots() {
  const grid = document.getElementById("galeria-grid");
  if (!grid) return;
  const total = VIVERE_CONFIG.fotos.length;
  const step = getCarouselStepWidth();
  if (!step || total === 0) return;

  const rawIndex = Math.round(grid.scrollLeft / step);
  const currentIndex = ((rawIndex % total) + total) % total;

  const dots = document.querySelectorAll("#galeria-dots .carousel-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex);
  });
}

// ============================================================================
// OPERAÇÃO DIFERENCIADA: NAVEGADOR (DESKTOP EDITORIAL) vs. MOBILE (COMPACTO)
// ============================================================================
let lastDesktopState = null;

function syncResponsiveMode() {
  const isDesktop = window.innerWidth >= 1024;
  if (isDesktop === lastDesktopState) return;
  lastDesktopState = isDesktop;

  document.querySelectorAll("details.js-responsive-section").forEach((detailsEl) => {
    if (isDesktop) {
      detailsEl.open = true;
    } else {
      detailsEl.open = false;
    }
  });
}

function syncVivereConfig() {
  const lang = getPageLang();

  // 1. Conecta todos os botões de WhatsApp ao acionador protegido
  document.querySelectorAll(".js-whatsapp-link").forEach((el) => {
    if (el.tagName === "A") {
      el.setAttribute("href", "#contato-whatsapp");
    }
    el.onclick = openNormaWhatsApp;
  });

  // 2. Sincroniza campos declarativos [data-config]
  const bindings = {
    "localizacao-curta": VIVERE_CONFIG.imovel.localizacaoCurta[lang],
    "resumo-principal": VIVERE_CONFIG.imovel.resumoPrincipal[lang],
    "resumo-complemento": VIVERE_CONFIG.imovel.resumoComplemento[lang],
    "legenda-foto-hero": VIVERE_CONFIG.imovel.legendaFotoHero[lang],
    "valor-mensal": VIVERE_CONFIG.financeiro.valorMensal[lang],
    "inclusoes-principais": VIVERE_CONFIG.financeiro.inclusoesPrincipais[lang],
    "nota-despesas": VIVERE_CONFIG.financeiro.notaDespesas[lang],
    "acao-norma": VIVERE_CONFIG.contato.acaoBotao[lang],
    "identificacao-formal": VIVERE_CONFIG.contato.identificacaoCompleta[lang]
  };

  Object.entries(bindings).forEach(([key, value]) => {
    if (!value) return;
    document.querySelectorAll(`[data-config="${key}"]`).forEach((el) => {
      el.textContent = value;
    });
  });

  // 3. Renderiza a galeria de rolagem infinita
  renderGalleryGrid();

  // 4. Sincroniza título e meta description
  const shareData = VIVERE_CONFIG.compartilhamento[lang];
  if (shareData) {
    document.title = shareData.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", shareData.description);
  }
}

// Estado e controles do Lightbox acessível
let currentGalleryIndex = 0;
let currentLightboxMode = "gallery";
let lastFocusedTrigger = null;

function openGalleryLightbox(index, triggerEl) {
  currentLightboxMode = "gallery";
  currentGalleryIndex = index;
  if (triggerEl) lastFocusedTrigger = triggerEl;
  renderLightboxSlide();
  showLightboxModal();
}

function openSingleImageModal(src, title, desc, triggerEl) {
  currentLightboxMode = "single";
  if (triggerEl) lastFocusedTrigger = triggerEl;

  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");
  const navControls = document.getElementById("lightbox-nav");

  if (!modal || !img) return;
  img.src = src;
  img.alt = title || "";
  if (counter) counter.textContent = "";
  if (titleEl) titleEl.textContent = title || "";
  if (descEl) descEl.textContent = desc || "";
  if (navControls) navControls.style.display = "none";

  showLightboxModal();
}

function renderLightboxSlide() {
  const lang = getPageLang();
  const prefix = getAssetPrefix();
  const item = VIVERE_CONFIG.fotos[currentGalleryIndex];
  if (!item) return;

  const img = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");
  const navControls = document.getElementById("lightbox-nav");

  if (img) {
    img.src = prefix + item.src;
    img.alt = item.titulo[lang];
  }
  if (counter) {
    counter.textContent = "";
  }
  if (titleEl) titleEl.textContent = item.titulo[lang];
  if (descEl) descEl.textContent = item.desc[lang];
  if (navControls) navControls.style.display = "flex";
}

function stepGallery(delta) {
  if (currentLightboxMode !== "gallery") return;
  const total = VIVERE_CONFIG.fotos.length;
  currentGalleryIndex = (currentGalleryIndex + delta + total) % total;
  renderLightboxSlide();
}

function showLightboxModal() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const closeBtn = document.getElementById("lightbox-close");
  if (closeBtn) closeBtn.focus();
}

function closeLightboxModal() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
    lastFocusedTrigger.focus();
  }
}

function openDetailsSection(id) {
  const el = document.getElementById(id);
  if (el) {
    if (el.tagName === "DETAILS") {
      el.open = true;
    } else {
      const parentDetails = el.closest("details");
      if (parentDetails) parentDetails.open = true;
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function shareViverePage() {
  const lang = getPageLang();
  const shareInfo = VIVERE_CONFIG.compartilhamento[lang];
  if (navigator.share) {
    navigator.share({
      title: shareInfo.title,
      text: shareInfo.text,
      url: window.location.href
    }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const msg = lang === "en" ? "Link copied to clipboard." : "Link copiado para a área de transferência.";
      alert(msg);
    });
  }
}

function checkRootFontScale() {
  const rootFontPx = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
  if (rootFontPx > 20) {
    document.documentElement.classList.add("large-root-text");
  } else {
    document.documentElement.classList.remove("large-root-text");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  syncVivereConfig();
  syncResponsiveMode();
  checkRootFontScale();

  const grid = document.getElementById("galeria-grid");
  if (grid) {
    let scrollTimer = null;
    grid.addEventListener("scroll", () => {
      window.requestAnimationFrame(updateCarouselDots);
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        normalizeInfiniteScrollPosition();
      }, 90);
    }, { passive: true });
  }

  const rootObserver = new MutationObserver(() => {
    checkRootFontScale();
  });
  rootObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["style", "class"]
  });

  window.addEventListener("resize", () => {
    checkRootFontScale();
    syncResponsiveMode();
    updateCarouselDots();
  });

  // Navegação por teclado no Lightbox (Escape, Setas e Trap de Foco)
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightbox-modal");
    if (!modal || modal.hidden) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeLightboxModal();
    } else if (e.key === "ArrowRight" && currentLightboxMode === "gallery") {
      e.preventDefault();
      stepGallery(1);
    } else if (e.key === "ArrowLeft" && currentLightboxMode === "gallery") {
      e.preventDefault();
      stepGallery(-1);
    } else if (e.key === "Tab") {
      const focusable = modal.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])');
      const visibleFocusable = Array.from(focusable).filter(el => el.offsetParent !== null);
      if (visibleFocusable.length === 0) return;
      const first = visibleFocusable[0];
      const last = visibleFocusable[visibleFocusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
});
