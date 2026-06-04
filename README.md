# Devils Club — Landing Page

Landing page do estúdio indie **Devils Club**, no padrão dos sites de estúdios independentes atuais.

## Seções

- Hero em tela cheia com CTA
- Jogos em destaque (featured + grid)
- Sobre o estúdio
- Notícias / devlog
- Press kit
- Newsletter e redes sociais
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
4. Configure o formulário de newsletter (Mailchimp, Buttondown, Formspree, etc.).
5. Ajuste e-mails em `press@` e `hello@` para os seus domínios reais.

## Deploy (GitHub Pages)

Passo a passo completo: **[DEPLOY.md](DEPLOY.md)**

Resumo: repositório público no GitHub → **Settings → Pages** → branch `main`, pasta `/ (root)`.
