# Barbearia ArmLock — Agendamento online

PWA de agendamento da **Barbearia ArmLock** (Av. Bom Jesus da Lapa, 1877 — Vila Nova Bonsucesso, Guarulhos/SP).
Estrutura baseada no projeto `site-barba`: HTML/CSS/JS puro, sem backend. O cliente escolhe serviços, dia e horário e o pedido é enviado pelo WhatsApp (11) 91966-6620.

## Funcionalidades
- Catálogo de serviços com carrinho (cortes, barba, combos, tratamentos e extras)
- Agenda: próximos 14 dias de atendimento, horários de 30 em 30 min (Seg–Sáb, 9h–19h)
- Cupom `PRIMEIRA10` (10% na 1ª visita), "repetir último agendamento" e deep link `?servico=barba`
- Status "aberto/fechado" em tempo real, botão "Como chegar" (Google Maps)
- PWA instalável e funcionando offline (service worker)

## Onde editar
Tudo fica no topo do `<script>` do `index.html`:
- `CONFIG` — nome, WhatsApp, endereço, horário, profissionais, cupons
- `MENU` — serviços, preços e durações (**confirme os preços antes de publicar**)

## Antes de publicar
1. Trocar `SEU-DOMINIO.com.br` (canonical, `og:url`, `og:image` e JSON-LD) pelo domínio real
2. Conferir preços/serviços no `MENU` e substituir as imagens de `img/` por fotos reais dos serviços
3. Se houver mais de um barbeiro, preencher `CONFIG.profissionais`
4. Ao alterar arquivos, mudar `CACHE` em `sw.js` (ex.: `armlock-v2`) para atualizar o cache

## Rodar localmente
```
python3 -m http.server 8080
```
Abra `http://localhost:8080`.
