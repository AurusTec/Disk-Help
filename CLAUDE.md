# Disk Help — site institucional

Landing page da **Disk Help Serviços Auto e Residência** (prestadora de serviços residencial e empresarial, Goiânia-GO, desde 1998). Responda ao usuário em português.

## Arquivos

- `site/index.html` — página única (HTML semântico + sprite SVG de ícones no topo do `<body>`).
- `site/styles.css` — todos os estilos; tokens de cor/easing em `:root`.
- `site/app.js` — lógica do "chamado" (monta a mensagem do WhatsApp) e botão flutuante.
- `site/favicon.svg`
- `image.png` — panfleto original da empresa: fonte da identidade visual e da lista de serviços.
- `PRODUCT.md` — contexto do produto (público, posicionamento, contato, o que NÃO inventar).
- `DESIGN.md` — sistema visual (cores, tipografia, componentes, motion). Mantenha atualizado ao mudar o visual.
- `prompt-site.md` — prompt original do pedido.
- `.impeccable/` — artefatos da skill impeccable (surface brief com o direction contract, screenshots de revisão).

## Stack

HTML/CSS/JS puro, sem build e sem dependências (escolha do usuário). Não introduzir framework nem biblioteca sem pedir. Fonte: Archivo via Google Fonts.

## Dados fixos da empresa

- WhatsApp/telefone: **+55 62 99870-7878** (`wa.me/5562998707878`, `tel:+5562998707878`).
- Área: Goiânia-GO e raio de ~100 km da região metropolitana.
- Slogan: "Se tem um problema, DÁ UM HELP". Promessas do panfleto: atendimento rápido e profissional, preço justo, garantia de serviço.
- 13 serviços: manutenção, instalação e higienização de ar-condicionado; geladeira; máquina de lavar; micro-ondas; forno; hidráulica; desentupimento; eletricista; chaveiro; dedetização; limpeza de placa solar.
- **Não inventar**: depoimentos, preços, prazos, termos de garantia, endereço, nomes de clientes.

## Conceito e convenções

- O site é o próprio chamado: o visitante toca nos serviços (chips no hero ou lista "Um número para tudo isso") e o `app.js` compõe a mensagem e atualiza todos os links `[data-wa]`.
- Ao adicionar um serviço: incluir o chip (`.chip` com `data-service` e `data-msg`) **e** a linha na lista (`.svc` com `data-pick` igual), mais um ícone `<symbol>` no sprite (24px, traço 1.75, pontas arredondadas).
- Vermelho só para ação (WhatsApp) e marcas da marca (faixa, chave, carimbo). Verde domina as áreas.
- Sem rótulos/"kickers" acima de títulos, sem gradiente em texto, sem sombras coloridas (regras da skill impeccable).
- Animações: `transform`/`opacity`, easing `--ease-out`, até ~240ms, com `prefers-reduced-motion` e hover restrito a `(hover: hover) and (pointer: fine)`.

## Pendências conhecidas

- Logo recriado a partir do panfleto (baixa resolução); trocar pelo arquivo oficial quando o cliente enviar.
- Cidades do mapa/lista de atendimento são exemplos dentro do raio de 100 km; confirmar com o cliente.
- Site não publicado ainda e pasta sem git.

## Skills e ferramentas

- As skills ficam em `../.claude/skills/` e o MCP do Playwright em `../.mcp.json` (raiz `aurusTech`). Para garantir que sejam carregados, inicie o Claude Code na pasta `aurusTech`.
- Para melhorias de UI use a skill `impeccable` (ex.: `critique`, `polish`, `audit`); o launcher é `../.claude/skills/impeccable-skill/scripts/impeccable` e o detector roda com `impeccable detect --json site/index.html site/styles.css`.
- Animações: skills `animate`, `review-animations`, `improve-animations`.
- Screenshots: `npx playwright screenshot --channel msedge --full-page --viewport-size=1440,900 file:///C:/Users/lcpac/Desktop/aurusTech/Disk-Help/site/index.html .impeccable/review/desktop.png` (e `390,844` para mobile). O Chromium do Playwright não está instalado; use `--channel msedge`.
