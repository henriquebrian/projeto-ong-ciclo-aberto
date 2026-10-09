# Ciclo Aberto — Plataforma web para ONGs
Projeto acadêmico: site institucional de uma ONG fictícia de meio ambiente com foco em reciclagem.

## Páginas
- `index.html` — sobre a organização (missão, visão, valores, histórico, equipe) e contato
- `projetos.html` — projetos sociais, voluntariado e como doar
- `cadastro.html` — formulário de cadastro com validação HTML5 e máscaras (CPF, telefone, CEP)

## Estrutura
```
ciclo-aberto/
├── index.html
├── projetos.html
├── cadastro.html
├── css/estilo.css
├── js/mascaras.js
└── img/   (JPG, WebP, PNG e SVG)
```

## Recursos aplicados
HTML5 semântico (header, nav, main, section, article, figure, address, footer), hierarquia de títulos,
mobile-first com breakpoints em 600px e 960px, imagens com `<picture>` (WebP + JPG) e `loading="lazy"`,
acessibilidade (link "pular para o conteúdo", labels, foco visível, `aria-current`, contraste),
meta tags de SEO/Open Graph, formulário com `fieldset`/`legend`, `required`, `pattern`, `type=email|tel|date`.

## Como visualizar
Abra `index.html` no navegador.

## Autor 
Henrique Brian R. N.
