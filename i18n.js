window.I18N = (function () {
  const STORAGE_KEY = "devilsclub-lang";
  const DEFAULT_LOCALE = "pt-BR";
  const LANG_OPTIONS = [
    { value: "pt-BR", code: "PT", name: "Português", flag: "br" },
    { value: "en", code: "EN", name: "English", flag: "us" },
    { value: "es", code: "ES", name: "Español", flag: "es" },
    { value: "fr", code: "FR", name: "Français", flag: "fr" },
    { value: "de", code: "DE", name: "Deutsch", flag: "de" },
    { value: "it", code: "IT", name: "Italiano", flag: "it" },
    { value: "pl", code: "PL", name: "Polski", flag: "pl" },
    { value: "ru", code: "RU", name: "Русский", flag: "ru" },
    { value: "tr", code: "TR", name: "Türkçe", flag: "tr" },
    { value: "zh", code: "简", name: "简体中文", flag: "cn" },
    { value: "zh-TW", code: "繁", name: "繁體中文", flag: "tw" },
    { value: "ko", code: "KO", name: "한국어", flag: "kr" },
    { value: "ja", code: "JA", name: "日本語", flag: "jp" },
    { value: "th", code: "TH", name: "ไทย", flag: "th" },
  ];
  const SUPPORTED = LANG_OPTIONS.map((option) => option.value);
  const LANG_LABELS = Object.fromEntries(LANG_OPTIONS.map((option) => [option.value, option.code]));

  function getLangOption(locale) {
    return LANG_OPTIONS.find((option) => option.value === locale) || LANG_OPTIONS[0];
  }

  const messages = {
    "pt-BR": {
      "meta.description": "Devil's Club: estúdio independente de jogos de São Paulo. Jogos feitos nos detalhes, para serem lembrados. The devil is in the details.",
      "aria.logo": "Devil's Club: início",
      "aria.nav": "Principal",
      "aria.menuOpen": "Abrir menu",
      "aria.menuClose": "Fechar menu",
      "aria.scrollProducts": "Rolar para jogos",
      "aria.lang": "Selecionar idioma",
      "nav.products": "Jogos",
      "nav.about": "Quem somos",
      "nav.contact": "Contato",
      "hero.scroll": "Scroll",
      "games.tag": "Nossos",
      "games.title": "Jogos",
      "game.mel.status": "Disponível",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "Após um acidente de trabalho que tira seu emprego e compromete seu braço mecânico, Conor Spada vai até a Praça da República em busca de renda. Lá encontra uma loja de assistência à beira da falência e seu dono Nano, silencioso, sério e um pouco misterioso.",
      "game.mel.trailer": "Trailer",
      "game.mel.trailerAria": "Assistir ao trailer de My Eternal Lily",
      "game.mel.cta": "Jogar no itch.io",
      "game.ent.status": "Disponível",
      "game.ent.genre": "Point-and-click · Jornalismo · Mitos brasileiros",
      "game.ent.desc":
        "Escolha a matéria, monte a manchete e publique. Um jogo sobre o jornal que decide o que a cidade passa a acreditar.",
      "game.ent.jam": "Feito na game jam semestral do SENAC, com o tema Mitos Brasileiros.",
      "game.ent.credits": "Com Daniela Marochitte Graciani e Bianca Alves.",
      "game.ent.cta": "Jogar no itch.io",
      "game.pbs.status": "Em desenvolvimento",
      "game.pbs.genre": "Plataforma 3D · Coleta · Antártida",
      "game.pbs.desc":
        "Um platformer 3D fofo e veloz sobre um pinguim tentando conquistar sua amada. Deslize, mergulhe e salte pela costa antártica atrás das pedras perfeitas. Conquiste cada level e ofereça a ela a pedra mais especial da costa.",
      "game.pbs.release": "Lançamento previsto para 2027.",
      "about.foundation": "Fundação",
      "about.tag": "Quem somos",
      "about.title": "O Devil's Club",
      "about.p1": "Devil's Club é um estúdio independente de jogos de São Paulo, Brasil. O nome vem do apelido do fundador, Fabio Ferro: Devil, herança de <cite>Devil May Cry</cite>, da Capcom. Daí a piada que virou lema: <em>the devil is in the <span class=\"slogan-accent\">details</span></em>.",
      "about.val1": "<strong>Nos Detalhes</strong> Cada escolha tem um motivo, do tamanho de um pulo ao tempo de uma animação. O jogador pode não notar, mas sente.",
      "about.val2": "<strong>Jogos que Ficam</strong> Queremos ser lembrados depois dos créditos, não só jogados.",
      "about.val3": "<strong>Selo de Qualidade</strong> Ser referência entre os estúdios do Brasil e uma marca em que jogadores e parceiros confiam.",
      "team.fabio.role": "Fundador · Diretor criativo · Lead programmer",
      "team.fabio.bio": "Direção criativa e código, do primeiro protótipo ao build final de cada jogo.",
      "team.arthur.role": "Programador",
      "team.arthur.bio":
        "Código e sistemas, do gameplay às ferramentas que sustentam os projetos do estúdio.",
      "team.pablo.role": "Diretor de arte",
      "team.pablo.bio":
        "Direção visual e identidade de cada projeto, do conceito à linguagem gráfica que unifica o estúdio.",
      "team.ani.role": "Lead artist · Personagens",
      "team.ani.bio":
        "Design e arte de personagens, do conceito ao sprite final, com personalidade em cada traço.",
      "reach.tag": "Fale conosco",
      "reach.title": "Contato & imprensa",
      "reach.desc": "Escolha o canal certo. Respondemos o mais rápido possível.",
      "contact.general.label": "Geral",
      "contact.general.hint": "Dúvidas, convites e assuntos diversos.",
      "contact.biz.label": "Parcerias & negócios",
      "contact.biz.hint": "Publishers, investidores e colaborações B2B.",
      "press.title": "Imprensa",
      "contact.press.hint": "Jornalistas, criadores de conteúdo e curadores de lojas.",
      "footer.location": "São Paulo, Brasil",
    },
    en: {
      "meta.description": "Devil's Club: independent game studio from São Paulo. Games built on the details, made to be remembered. The devil is in the details.",
      "aria.logo": "Devil's Club: home",
      "aria.nav": "Main",
      "aria.menuOpen": "Open menu",
      "aria.menuClose": "Close menu",
      "aria.scrollProducts": "Scroll to games",
      "aria.lang": "Select language",
      "nav.products": "Games",
      "nav.about": "Who we are",
      "nav.contact": "Contact",
      "hero.scroll": "Scroll",
      "games.tag": "Our",
      "games.title": "Games",
      "game.mel.status": "Available",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "After a workplace accident costs him his job and damages his mechanical arm, Conor Spada heads to Praça da República looking for income. There he finds a repair shop on the brink of bankruptcy and its owner Nano, quiet, serious, and a little mysterious.",
      "game.mel.trailer": "Trailer",
      "game.mel.trailerAria": "Watch the My Eternal Lily trailer",
      "game.mel.cta": "Play on itch.io",
      "game.ent.status": "Available",
      "game.ent.genre": "Point-and-click · Journalism · Brazilian myths",
      "game.ent.desc":
        "Pick the story, build the headline, run the paper. A game about the newspaper that decides what a town comes to believe.",
      "game.ent.jam": "Made at SENAC's semestral game jam, on the theme Brazilian Myths.",
      "game.ent.credits": "With Daniela Marochitte Graciani and Bianca Alves.",
      "game.ent.cta": "Play on itch.io",
      "game.pbs.status": "In development",
      "game.pbs.genre": "3D Platformer · Collectathon · Antarctica",
      "game.pbs.desc":
        "A cute, fast-paced 3D platformer about a penguin trying to win over his sweetheart. Slide, dive and leap along the Antarctic coast in search of the perfect pebbles. Conquer every level and offer her the most special pebble on the shore.",
      "game.pbs.release": "Planned release in 2027.",
      "about.foundation": "Founded",
      "about.tag": "Who we are",
      "about.title": "Devil's Club",
      "about.p1": "Devil's Club is an independent game studio based in São Paulo, Brazil. The name comes from our founder Fabio Ferro's nickname: Devil, inherited from Capcom's <cite>Devil May Cry</cite>. Hence the joke that became our motto: <em>the devil is in the <span class=\"slogan-accent\">details</span></em>.",
      "about.val1": "<strong>In the Details</strong> Every choice has a reason, from the length of a jump to the timing of an animation. Players may not notice, but they feel it.",
      "about.val2": "<strong>Games That Stay</strong> We want to be remembered after the credits, not just played.",
      "about.val3": "<strong>A Mark of Quality</strong> To be a reference among Brazil's studios, and a brand players and partners trust.",
      "team.fabio.role": "Founder · Creative director · Lead programmer",
      "team.fabio.bio":
        "Creative direction and code, from the first prototype to the final build of every game.",
      "team.arthur.role": "Programmer",
      "team.arthur.bio":
        "Code and systems, from gameplay to the tools that power the studio's projects.",
      "team.pablo.role": "Art director",
      "team.pablo.bio":
        "Visual direction and identity for each project, from concept to the graphic language that unifies the studio.",
      "team.ani.role": "Lead artist · Characters",
      "team.ani.bio":
        "Character design and art, from concept to final sprite, with personality in every line.",
      "reach.tag": "Get in touch",
      "reach.title": "Contact & press",
      "reach.desc": "Choose the right channel. We'll respond as quickly as we can.",
      "contact.general.label": "General",
      "contact.general.hint": "Questions, invitations, and other matters.",
      "contact.biz.label": "Partnerships & business",
      "contact.biz.hint": "Publishers, investors, and B2B collaborations.",
      "press.title": "Press",
      "contact.press.hint": "Journalists, content creators and store curators.",
      "footer.location": "São Paulo, Brazil",
    },
    fr: {
      "meta.description": "Devil's Club : studio de jeux indépendant de São Paulo. Des jeux construits sur les détails, faits pour marquer. The devil is in the details.",
      "aria.logo": "Devil's Club: accueil",
      "aria.nav": "Principal",
      "aria.menuOpen": "Ouvrir le menu",
      "aria.menuClose": "Fermer le menu",
      "aria.scrollProducts": "Défiler vers les jeux",
      "aria.lang": "Choisir la langue",
      "nav.products": "Jeux",
      "nav.about": "Qui nous sommes",
      "nav.contact": "Contact",
      "hero.scroll": "Défiler",
      "games.tag": "Nos",
      "games.title": "Jeux",
      "game.mel.status": "Disponible",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "Après un accident de travail qui lui coûte son emploi et endommage son bras mécanique, Conor Spada se rend sur la Praça da República en quête de revenus. Il y trouve un atelier de réparation au bord de la faillite et son propriétaire Nano, silencieux, sérieux et un peu mystérieux.",
      "game.mel.trailer": "Bande-annonce",
      "game.mel.trailerAria": "Regarder la bande-annonce de My Eternal Lily",
      "game.mel.cta": "Jouer sur itch.io",
      "game.ent.status": "Disponible",
      "game.ent.genre": "Point-and-click · Journalisme · Mythes brésiliens",
      "game.ent.desc":
        "Choisissez le sujet, composez le titre et publiez. Un jeu sur le journal qui décide de ce que la ville finit par croire.",
      "game.ent.jam": "Réalisé lors de la game jam semestrielle du SENAC, sur le thème Mythes brésiliens.",
      "game.ent.credits": "Avec Daniela Marochitte Graciani et Bianca Alves.",
      "game.ent.cta": "Jouer sur itch.io",
      "game.pbs.status": "En développement",
      "game.pbs.genre": "Plateforme 3D · Collecte · Antarctique",
      "game.pbs.desc":
        "Un jeu de plateforme 3D mignon et rapide sur un manchot qui veut conquérir sa bien-aimée. Glissez, plongez et sautez le long de la côte antarctique à la recherche des galets parfaits. Conquérez chaque niveau et offrez-lui le galet le plus précieux de la côte.",
      "game.pbs.release": "Sortie prévue en 2027.",
      "about.foundation": "Fondation",
      "about.tag": "Qui nous sommes",
      "about.title": "Devil's Club",
      "about.p1": "Devil's Club est un studio de jeux indépendant basé à São Paulo, au Brésil. Le nom vient du surnom de son fondateur, Fabio Ferro : Devil, hérité de <cite>Devil May Cry</cite> de Capcom. D'où la blague devenue devise : <em>the devil is in the <span class=\"slogan-accent\">details</span></em>.",
      "about.val1": "<strong>Dans les Détails</strong> Chaque choix a une raison, de la longueur d'un saut au rythme d'une animation. Le joueur ne le remarque pas forcément, mais il le sent.",
      "about.val2": "<strong>Des Jeux qui Restent</strong> Nous voulons qu'on se souvienne de nous après le générique, pas seulement qu'on nous joue.",
      "about.val3": "<strong>Un Gage de Qualité</strong> Devenir une référence parmi les studios brésiliens et une marque en laquelle joueurs et partenaires ont confiance.",
      "team.fabio.role": "Fondateur · Directeur créatif · Lead programmer",
      "team.fabio.bio": "Direction créative et code, du premier prototype au build final de chaque jeu.",
      "team.arthur.role": "Programmeur",
      "team.arthur.bio":
        "Code et systèmes, du gameplay aux outils qui soutiennent les projets du studio.",
      "team.pablo.role": "Directeur artistique",
      "team.pablo.bio":
        "Direction visuelle et identité de chaque projet, du concept au langage graphique qui unifie le studio.",
      "team.ani.role": "Lead artist · Personnages",
      "team.ani.bio":
        "Design et art des personnages, du concept au sprite final, avec de la personnalité dans chaque trait.",
      "reach.tag": "Contactez-nous",
      "reach.title": "Contact & presse",
      "reach.desc": "Choisissez le bon canal. Nous répondrons le plus vite possible.",
      "contact.general.label": "Général",
      "contact.general.hint": "Questions, invitations et autres sujets.",
      "contact.biz.label": "Partenariats & business",
      "contact.biz.hint": "Publishers, investisseurs et collaborations B2B.",
      "press.title": "Presse",
      "contact.press.hint": "Journalistes, créateurs de contenu et curateurs de boutiques.",
      "footer.location": "São Paulo, Brésil",
    },
    es: {
      "meta.description": "Devil's Club: estudio independiente de videojuegos de São Paulo. Juegos hechos en los detalles, para ser recordados. The devil is in the details.",
      "aria.logo": "Devil's Club: inicio",
      "aria.nav": "Principal",
      "aria.menuOpen": "Abrir menú",
      "aria.menuClose": "Cerrar menú",
      "aria.scrollProducts": "Desplazar a juegos",
      "aria.lang": "Seleccionar idioma",
      "nav.products": "Juegos",
      "nav.about": "Quiénes somos",
      "nav.contact": "Contacto",
      "hero.scroll": "Scroll",
      "games.tag": "Nuestros",
      "games.title": "Juegos",
      "game.mel.status": "Disponible",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "Tras un accidente laboral que le cuesta el empleo y daña su brazo mecánico, Conor Spada va a la Praça da República en busca de ingresos. Allí encuentra una tienda de reparaciones al borde de la quiebra y su dueño Nano, callado, serio y un poco misterioso.",
      "game.mel.trailer": "Tráiler",
      "game.mel.trailerAria": "Ver el tráiler de My Eternal Lily",
      "game.mel.cta": "Jugar en itch.io",
      "game.ent.status": "Disponible",
      "game.ent.genre": "Point-and-click · Periodismo · Mitos brasileños",
      "game.ent.desc":
        "Elige la nota, arma el titular y publica. Un juego sobre el periódico que decide lo que el pueblo termina creyendo.",
      "game.ent.jam": "Hecho en la game jam semestral del SENAC, con el tema Mitos Brasileños.",
      "game.ent.credits": "Con Daniela Marochitte Graciani y Bianca Alves.",
      "game.ent.cta": "Jugar en itch.io",
      "game.pbs.status": "En desarrollo",
      "game.pbs.genre": "Plataformas 3D · Coleccionables · Antártida",
      "game.pbs.desc":
        "Un plataformas 3D tierno y veloz sobre un pingüino que intenta conquistar a su amada. Deslízate, bucea y salta por la costa antártica en busca de las piedras perfectas. Supera cada nivel y regálale la piedra más especial de la costa.",
      "game.pbs.release": "Lanzamiento previsto para 2027.",
      "about.foundation": "Fundación",
      "about.tag": "Quiénes somos",
      "about.title": "Devil's Club",
      "about.p1": "Devil's Club es un estudio independiente de videojuegos con sede en São Paulo, Brasil. El nombre viene del apodo de su fundador, Fabio Ferro: Devil, herencia de <cite>Devil May Cry</cite>, de Capcom. De ahí la broma que se volvió lema: <em>the devil is in the <span class=\"slogan-accent\">details</span></em>.",
      "about.val1": "<strong>En los Detalles</strong> Cada decisión tiene un motivo, del largo de un salto al ritmo de una animación. El jugador quizá no lo note, pero lo siente.",
      "about.val2": "<strong>Juegos que Quedan</strong> Queremos que nos recuerden después de los créditos, no solo que nos jueguen.",
      "about.val3": "<strong>Sello de Calidad</strong> Ser un referente entre los estudios de Brasil y una marca en la que jugadores y socios confían.",
      "team.fabio.role": "Fundador · Director creativo · Lead programmer",
      "team.fabio.bio": "Dirección creativa y código, del primer prototipo a la build final de cada juego.",
      "team.arthur.role": "Programador",
      "team.arthur.bio":
        "Código y sistemas, del gameplay a las herramientas que sustentan los proyectos del estudio.",
      "team.pablo.role": "Director de arte",
      "team.pablo.bio":
        "Dirección visual e identidad de cada proyecto, del concepto al lenguaje gráfico que unifica el estúdio.",
      "team.ani.role": "Lead artist · Personajes",
      "team.ani.bio":
        "Diseño y arte de personajes, del concepto al sprite final, con personalidad en cada trazo.",
      "reach.tag": "Hable con nosotros",
      "reach.title": "Contacto y prensa",
      "reach.desc": "Elija el canal adecuado. Respondemos lo antes posible.",
      "contact.general.label": "General",
      "contact.general.hint": "Dudas, invitaciones y otros asuntos.",
      "contact.biz.label": "Alianzas y negocios",
      "contact.biz.hint": "Publishers, inversores y colaboraciones B2B.",
      "press.title": "Prensa",
      "contact.press.hint": "Periodistas, creadores de contenido y curadores de tiendas.",
      "footer.location": "São Paulo, Brasil",
    },
    zh: {
      "meta.description": "Devil's Club：来自圣保罗的独立游戏工作室。在细节中打磨，只为被记住的游戏。The devil is in the details.",
      "aria.logo": "Devil's Club: 首页",
      "aria.nav": "主导航",
      "aria.menuOpen": "打开菜单",
      "aria.menuClose": "关闭菜单",
      "aria.scrollProducts": "滚动至游戏",
      "aria.lang": "选择语言",
      "nav.products": "游戏",
      "nav.about": "关于我们",
      "nav.contact": "联系",
      "hero.scroll": "滚动",
      "games.tag": "我们的",
      "games.title": "游戏",
      "game.mel.status": "现已推出",
      "game.mel.genre": "视觉小说 · 恋爱 · LGBTQIA · 2D",
      "game.mel.desc":
        "一场工伤让他失去工作，机械臂也受了损伤。Conor Spada 前往共和国广场寻找收入，在那里他发现一家濒临倒闭的维修店，以及店主 Nano, 沉默、严肃，略带神秘。",
      "game.mel.trailer": "预告片",
      "game.mel.trailerAria": "观看 My Eternal Lily 预告片",
      "game.mel.cta": "在 itch.io 游玩",
      "game.ent.status": "现已推出",
      "game.ent.genre": "点击解谜 · 新闻业 · 巴西神话",
      "game.ent.desc": "选题、拟标题、付印。一款关于报纸如何决定小镇相信什么的游戏。",
      "game.ent.jam": "为 SENAC 学期游戏 jam 制作，主题为巴西神话。",
      "game.ent.credits": "与 Daniela Marochitte Graciani 和 Bianca Alves 共同制作。",
      "game.ent.cta": "在 itch.io 游玩",
      "game.pbs.status": "开发中",
      "game.pbs.genre": "3D 平台跳跃 · 收集 · 南极",
      "game.pbs.desc":
        "一款可爱又快节奏的 3D 平台跳跃游戏，讲述一只企鹅努力赢得心上人的故事。沿着南极海岸滑行、潜水、跳跃，寻找最完美的石子。征服每一关，把海岸上最特别的那颗石子送给她。",
      "game.pbs.release": "预计 2027 年发售。",
      "about.foundation": "成立",
      "about.tag": "关于我们",
      "about.title": "Devil's Club",
      "about.p1": "Devil's Club 是一家位于巴西圣保罗的独立游戏工作室。名字来自创始人 Fabio Ferro 的昵称 Devil，源于 Capcom 的游戏 <cite>Devil May Cry</cite>。于是这个玩笑成了我们的座右铭：<em>the devil is in the <span class=\"slogan-accent\">details</span></em>。",
      "about.val1": "<strong>细节之中</strong> 每个选择都有理由，从一次跳跃的距离到一段动画的节奏。玩家未必察觉，但一定感受得到。",
      "about.val2": "<strong>让人记住的游戏</strong> 我们希望在片尾字幕之后仍被记住，而不只是被玩过。",
      "about.val3": "<strong>品质之印</strong> 成为巴西游戏工作室中的标杆，一个玩家和合作伙伴都信赖的品牌。",
      "team.fabio.role": "创始人 · 创意总监 · 首席程序员",
      "team.fabio.bio": "创意总监与程序，从首个原型到每款游戏的最终构建。",
      "team.arthur.role": "程序员",
      "team.arthur.bio": "代码与系统, 从玩法到支撑工作室项目的工具。",
      "team.pablo.role": "艺术总监",
      "team.pablo.bio":
        "每个项目的视觉方向与品牌识别, 从概念到统一工作室的视觉语言。",
      "team.ani.role": "首席美术 · 角色",
      "team.ani.bio":
        "角色设计与美术, 从概念到最终立绘，每一笔都充满个性。",
      "reach.tag": "联系我们",
      "reach.title": "联系与媒体",
      "reach.desc": "选择合适渠道。我们会尽快回复。",
      "contact.general.label": "综合",
      "contact.general.hint": "疑问、邀请及其他事宜。",
      "contact.biz.label": "合作与商务",
      "contact.biz.hint": "发行商、投资人与 B2B 合作。",
      "press.title": "媒体",
      "contact.press.hint": "记者、内容创作者与商店编辑。",
      "footer.location": "巴西圣保罗",
    },
    ja: {
      "meta.description": "Devil's Club：サンパウロのインディーゲームスタジオ。細部にこだわり、記憶に残るゲームを。The devil is in the details.",
      "aria.logo": "Devil's Club: ホーム",
      "aria.nav": "メイン",
      "aria.menuOpen": "メニューを開く",
      "aria.menuClose": "メニューを閉じる",
      "aria.scrollProducts": "ゲームへスクロール",
      "aria.lang": "言語を選択",
      "nav.products": "ゲーム",
      "nav.about": "私たちについて",
      "nav.contact": "お問い合わせ",
      "hero.scroll": "スクロール",
      "games.tag": "私たちの",
      "games.title": "ゲーム",
      "game.mel.status": "配信中",
      "game.mel.genre": "ビジュアルノベル · ロマンス · LGBTQIA · 2D",
      "game.mel.desc":
        "職場の事故で仕事を失い、機械腕を損傷した Conor Spada は収入を求めて共和国広場へ。そこで倒産寸前の修理店と、その店主 Nano, 物静かで真面目、少しミステリアスな人物, に出会う。",
      "game.mel.trailer": "トレーラー",
      "game.mel.trailerAria": "My Eternal Lily のトレーラーを見る",
      "game.mel.cta": "itch.io でプレイ",
      "game.ent.status": "配信中",
      "game.ent.genre": "ポイント＆クリック · ジャーナリズム · ブラジルの神話",
      "game.ent.desc": "記事を選び、見出しを組み、発行する。町が何を信じるかを決めてしまう新聞についてのゲーム。",
      "game.ent.jam": "SENAC の学期ゲームジャムで、「ブラジルの神話」をテーマに制作。",
      "game.ent.credits": "Daniela Marochitte Graciani、Bianca Alves との共作。",
      "game.ent.cta": "itch.io でプレイ",
      "game.pbs.status": "開発中",
      "game.pbs.genre": "3Dアクション · 収集 · 南極",
      "game.pbs.desc":
        "愛しい相手の心をつかもうとするペンギンの、かわいくてスピーディーな3Dプラットフォーマー。南極の海岸を滑って、潜って、跳んで、完璧な小石を探そう。すべてのステージを制覇して、海岸でいちばん特別な小石を彼女に贈ろう。",
      "game.pbs.release": "2027年発売予定。",
      "about.foundation": "設立",
      "about.tag": "私たちについて",
      "about.title": "Devil's Club",
      "about.p1": "Devil's Club はブラジル・サンパウロのインディーゲームスタジオです。名前は創設者 Fabio Ferro のニックネーム「Devil」から。由来はカプコンの <cite>Devil May Cry</cite> です。そこから生まれたジョークがモットーになりました：<em>the devil is in the <span class=\"slogan-accent\">details</span></em>。",
      "about.val1": "<strong>細部にこそ</strong> ジャンプの距離からアニメーションのタイミングまで、すべての選択に理由があります。プレイヤーは気づかなくても、きっと感じます。",
      "about.val2": "<strong>心に残るゲーム</strong> 遊ばれるだけでなく、エンドロールの後も覚えていてもらいたい。",
      "about.val3": "<strong>品質の証</strong> ブラジルのスタジオの指標となり、プレイヤーとパートナーが信頼できるブランドになること。",
      "team.fabio.role": "創設者 · クリエイティブディレクター · リードプログラマー",
      "team.fabio.bio": "クリエイティブディレクションとコード。最初のプロトタイプから各タイトルの最終ビルドまで。",
      "team.arthur.role": "プログラマー",
      "team.arthur.bio":
        "コードとシステム, ゲームプレイからスタジオのプロジェクトを支えるツールまで。",
      "team.pablo.role": "アートディレクター",
      "team.pablo.bio":
        "各プロジェクトのビジュアルディレクションとアイデンティティ, コンセプトからスタジオを統一するグラフィック言語まで。",
      "team.ani.role": "リードアーティスト · キャラクター",
      "team.ani.bio":
        "キャラクターデザインとアート, コンセプトから最終スプライトまで、一線一線に個性を。",
      "reach.tag": "お問い合わせ",
      "reach.title": "連絡先とプレス",
      "reach.desc": "適切なチャンネルをお選びください。できるだけ早く返信します。",
      "contact.general.label": "一般",
      "contact.general.hint": "質問、招待、その他の件。",
      "contact.biz.label": "パートナーシップとビジネス",
      "contact.biz.hint": "パブリッシャー、投資家、B2B コラボレーション。",
      "press.title": "プレス",
      "contact.press.hint": "ジャーナリスト、クリエイター、ストアのキュレーターの方へ。",
      "footer.location": "ブラジル・サンパウロ",
    },
    ...(window.I18N_LOCALES_EXTRA || {}),
  };

  function htmlLang(locale) {
    if (locale === "zh") return "zh-Hans";
    if (locale === "zh-TW") return "zh-Hant";
    return locale;
  }

  function normalizeLocale(raw) {
    if (!raw) return DEFAULT_LOCALE;
    const lower = raw.toLowerCase();
    if (lower.startsWith("pt")) return "pt-BR";
    if (lower.startsWith("en")) return "en";
    if (lower.startsWith("es")) return "es";
    if (lower.startsWith("fr")) return "fr";
    if (lower.startsWith("de")) return "de";
    if (lower.startsWith("it")) return "it";
    if (lower.startsWith("pl")) return "pl";
    if (lower.startsWith("ru")) return "ru";
    if (lower.startsWith("tr")) return "tr";
    if (lower.startsWith("ko")) return "ko";
    if (lower.startsWith("th")) return "th";
    if (lower === "zh-tw" || lower === "zh-hk" || lower === "zh-hant") return "zh-TW";
    if (lower.startsWith("zh")) return "zh";
    if (lower.startsWith("ja")) return "ja";
    return DEFAULT_LOCALE;
  }

  function detectLocale() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    return normalizeLocale(navigator.language || navigator.userLanguage);
  }

  function t(locale, key) {
    const bundle = messages[locale] || messages[DEFAULT_LOCALE];
    return bundle[key] ?? messages[DEFAULT_LOCALE][key] ?? key;
  }

  let currentLocale = DEFAULT_LOCALE;

  function applyLocale(locale) {
    const resolved = SUPPORTED.includes(locale) ? locale : DEFAULT_LOCALE;
    currentLocale = resolved;
    document.documentElement.lang = htmlLang(resolved);

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(resolved, "meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(resolved, key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      el.innerHTML = t(resolved, key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const pairs = el.getAttribute("data-i18n-attr").split(";");
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(resolved, key));
      });
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(resolved, key));
    });

    syncLangDropdowns(resolved);

    localStorage.setItem(STORAGE_KEY, resolved);
    return resolved;
  }

  function syncLangDropdowns(locale) {
    const active = getLangOption(locale);

    document.querySelectorAll("[data-lang-dropdown]").forEach((dropdown) => {
      const codeEl = dropdown.querySelector(".lang-dropdown-code");
      const flagEl = dropdown.querySelector(".lang-dropdown-flag");
      if (codeEl) codeEl.textContent = active.code;
      if (flagEl) flagEl.className = `lang-dropdown-flag fi fi-${active.flag}`;

      dropdown.querySelectorAll(".lang-dropdown-option").forEach((option) => {
        const selected = option.getAttribute("data-lang") === locale;
        option.setAttribute("aria-selected", String(selected));
      });
    });
  }

  function closeLangDropdown(dropdown) {
    const btn = dropdown.querySelector(".lang-dropdown-btn");
    const menu = dropdown.querySelector(".lang-dropdown-menu");
    dropdown.classList.remove("is-open");
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (menu) menu.hidden = true;
  }

  function closeAllLangDropdowns(except) {
    document.querySelectorAll("[data-lang-dropdown].is-open").forEach((dropdown) => {
      if (dropdown !== except) closeLangDropdown(dropdown);
    });
  }

  function openLangDropdown(dropdown) {
    closeAllLangDropdowns(dropdown);
    const btn = dropdown.querySelector(".lang-dropdown-btn");
    const menu = dropdown.querySelector(".lang-dropdown-menu");
    dropdown.classList.add("is-open");
    if (btn) btn.setAttribute("aria-expanded", "true");
    if (menu) menu.hidden = false;
  }

  function buildLangMenus() {
    document.querySelectorAll("[data-lang-menu]").forEach((menu) => {
      menu.innerHTML = LANG_OPTIONS.map(
        ({ value, code, name, flag }) => `
        <li role="presentation">
          <button type="button" class="lang-dropdown-option" role="option" data-lang="${value}" aria-selected="false">
            <span class="lang-dropdown-option-flag fi fi-${flag}" aria-hidden="true"></span>
            <span class="lang-dropdown-option-code">${code}</span>
            <span class="lang-dropdown-option-name">${name}</span>
          </button>
        </li>`
      ).join("");
    });
  }

  function initLangDropdowns() {
    document.querySelectorAll("[data-lang-dropdown]").forEach((dropdown) => {
      const btn = dropdown.querySelector(".lang-dropdown-btn");
      const menu = dropdown.querySelector(".lang-dropdown-menu");

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (dropdown.classList.contains("is-open")) {
          closeLangDropdown(dropdown);
        } else {
          openLangDropdown(dropdown);
        }
      });

      menu.querySelectorAll(".lang-dropdown-option").forEach((option) => {
        option.addEventListener("click", () => {
          const locale = option.getAttribute("data-lang");
          if (locale) applyLocale(locale);
          closeLangDropdown(dropdown);
        });
      });
    });

    document.addEventListener("click", () => {
      closeAllLangDropdowns();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllLangDropdowns();
    });
  }

  function init() {
    buildLangMenus();
    const locale = detectLocale();
    applyLocale(locale);
    initLangDropdowns();
  }

  return {
    init,
    applyLocale,
    t: (key) => t(currentLocale, key),
    getLocale: () => currentLocale,
    SUPPORTED,
    DEFAULT_LOCALE,
  };
})();
