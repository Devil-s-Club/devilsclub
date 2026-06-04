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

## 4. Domínio `devilsclub.com.br`

O arquivo `CNAME` na raiz já aponta para `devilsclub.com.br`.

### No GitHub

1. [Settings → Pages](https://github.com/Devil-s-Club/devilsclub/settings/pages)
2. **Custom domain:** `devilsclub.com.br` → **Save**
3. Quando o DNS propagar, marque **Enforce HTTPS**

### No registrador do domínio (.com.br)

Configure a zona DNS assim (apex = site na raiz, sem www):

| Tipo | Nome / Host | Valor |
|------|-------------|--------|
| **A** | `@` (ou vazio) | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |

Opcional — se quiser `www.devilsclub.com.br` também:

| Tipo | Nome | Valor |
|------|------|--------|
| **CNAME** | `www` | `devil-s-club.github.io` |

No GitHub Pages, você pode adicionar `www.devilsclub.com.br` como domínio extra e redirecionar apex → www, ou manter só o apex.

Propagação: de alguns minutos até 48 h (`.br` costuma ser rápido).

## 5. Atualizar o site depois

```powershell
cd C:\Users\fabio\projects\devils-club
git add .
git commit -m "Descrição da mudança"
git push
```

O GitHub Pages atualiza sozinho em poucos segundos.
