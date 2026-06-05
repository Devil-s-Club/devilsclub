# Devils Club — Landing Page

Landing page do estúdio indie **Devil's Club**, no padrão dos sites de estúdios independentes atuais.

## Seções

- Hero em tela cheia com CTA
- Produtos: jogos + frameworks (Unity Asset Store, etc.)
- Sobre o estúdio
- Press kit
- Contato

## Como ver localmente

```bash
cd C:\Users\fabio\projects\devils-club
npx --yes serve .
```

Abra o endereço que o terminal mostrar (geralmente `http://localhost:3000`).

Ou abra `index.html` diretamente no navegador.

## Logo e cores da marca

Arquivos em `assets/` (copiados de `C:\Stuff\Devil's Club\devils-club-logo`):

- `logo-icon.png` — ícone vermelho (planta)
- `logo-wordmark.png` / `logo-icon.png` — camadas transparentes oficiais (header e hero)
- Hero = mesmo par de imagens do header, maior via CSS (sem caixa preta)
- Regenerar: `python scripts/build_brand_assets.py`
- `favicon.ico`

Vermelho oficial: **#990f15** · Texto cream: **#edeae5**

## Personalizar

1. Substitua **Projeto Alpha/Beta/Gamma** pelos nomes reais dos jogos.
2. Troque os placeholders de arte por screenshots (`<img src="...">` dentro de `.game-card-media`).
3. Atualize links de Steam, Discord, YouTube, itch.io em `.social-links` e botões.
4. Ajuste e-mails de contato e imprensa para os endereços reais do Workspace.

## Deploy (GitHub Pages)

Passo a passo completo: **[DEPLOY.md](DEPLOY.md)**

Resumo: repositório público no GitHub → **Settings → Pages** → branch `main`, pasta `/ (root)`.

© 2026 Devil's Club. Todos os direitos reservados.
Este repositório é público apenas para hospedagem e transparência.
Não use logo, textos ou layout sem autorização.