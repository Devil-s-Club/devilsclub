# Publicar no GitHub Pages

## 1. Criar o repositório no GitHub

1. Acesse [https://github.com/new](https://github.com/new)
2. Nome sugerido: `devils-club` (ou `devils-club-website`)
3. Deixe **Public** (obrigatório para Pages gratuito)
4. **Não** marque “Add a README” (o projeto local já tem arquivos)
5. Clique em **Create repository**

## 2. Enviar o código (primeira vez)

No PowerShell, na pasta do projeto:

```powershell
cd C:\Users\fabio\projects\devils-club
git remote add origin https://github.com/SEU_USUARIO/devils-club.git
git branch -M main
git push -u origin main
```

Troque `SEU_USUARIO` pelo seu usuário do GitHub.

Se pedir login, use **Personal Access Token** como senha (não a senha da conta):
[https://github.com/settings/tokens](https://github.com/settings/tokens) → Generate new token (classic) → marque `repo`.

## 3. Ativar GitHub Pages

1. No repositório: **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` → pasta **`/ (root)`**
4. **Save**

Em 1–3 minutos o site fica em:

`https://SEU_USUARIO.github.io/devils-club/`

(Se o repo se chamar só `SEU_USUARIO.github.io`, a URL é `https://SEU_USUARIO.github.io`.)

## 4. Domínio que você já paga (opcional)

1. Na raiz do projeto, crie o arquivo `CNAME` com uma linha só, por exemplo:
   ```
   www.devilsclub.studio
   ```
2. Commit e push:
   ```powershell
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```
3. No registrador do domínio, crie:
   - **CNAME** `www` → `SEU_USUARIO.github.io`
4. Em **Settings → Pages**, confira o domínio customizado e aguarde o HTTPS.

Para o domínio **sem** www (`devilsclub.studio`), configure no registrador os **A records** que o GitHub mostra em Pages (IPs `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) ou redirecione o apex para `www`.

## 5. Atualizar o site depois

```powershell
cd C:\Users\fabio\projects\devils-club
git add .
git commit -m "Descrição da mudança"
git push
```

O GitHub Pages atualiza sozinho em poucos segundos.
