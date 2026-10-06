# Devils Club — Landing Page

Site do estúdio indie **Devil's Club**: um cartão de visitas para publishers, estúdios e parceiros. Em 14 idiomas (`i18n.js` e `locales-extra.js`).

## Seções

- Topo: logo e slogan
- Jogos: My Eternal Lily e Entrelinhas
- Quem somos: o estúdio, os valores e a equipe
- Contato & imprensa

## Como ver localmente

```bash
cd C:\Users\fabio\projects\devils-club
npx --yes serve .
```

Abra o endereço que o terminal mostrar (geralmente `http://localhost:3000`).

Ou abra `index.html` diretamente no navegador.

## Logo e cores da marca

Gerados a partir de `C:\Stuff\Devil's Club\devils-club-logo`:

- `assets/logo.webp` (header e rodapé) e `assets/logo-hero.webp` (topo da home): exportados de `Devil's Club Logo com Letras Brancas.png`, o logo oficial para fundo escuro. Regenerar: `python scripts/build_brand_assets.py`
- `assets/favicon.ico`, `favicon-16.png` e `favicon-32.png`: regenerar com `python scripts/build_favicon.py`
- `logo-email.png` e `logo-email-dark.png` (na raiz): logos usados na assinatura de e-mail, servidos pelo site

Vermelho oficial: **#990f15** · Texto cream: **#edeae5**

## Deploy (GitHub Pages)

Passo a passo completo: **[DEPLOY.md](DEPLOY.md)**

Resumo: repositório público no GitHub → **Settings → Pages** → branch `main`, pasta `/ (root)`.

© 2026 Devil's Club. Todos os direitos reservados.
Este repositório é público apenas para hospedagem e transparência.
Não use logo, textos ou layout sem autorização.