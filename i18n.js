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
      "meta.description":
        "Devil's Club: estúdio indie de jogos. Visual novels, aventuras e plataforma 3D com identidade própria, do roteiro ao lançamento.",
      "aria.logo": "Devil's Club: início",
      "aria.nav": "Principal",
      "aria.menuOpen": "Abrir menu",
      "aria.menuClose": "Fechar menu",
      "aria.scrollProducts": "Rolar para jogos",
      "aria.lang": "Selecionar idioma",
      "nav.products": "Jogos",
      "nav.about": "Quem somos",
      "nav.contact": "Contato",
      "hero.eyebrow": "Estúdio indie · Brasil",
      "hero.title1": "Experiência para o jogador.",
      "hero.title2": "Identidade em cada jogo.",
      "hero.lead":
        "Criamos jogos com identidade própria, produzidos dentro de casa: roteiro, arte e código pelo mesmo time, do primeiro protótipo ao lançamento.",
      "hero.ctaProducts": "Ver jogos",
      "hero.ctaContact": "Contato",
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
      "about.foundation": "Fundação",
      "about.indieLabel": "De coração",
      "about.tag": "Quem somos",
      "about.title": "O Devil's Club",
      "about.p1":
        "Jogos autorais, do começo ao fim. Um estúdio indie pequeno, com o mesmo time do roteiro ao lançamento.",
      "about.p2":
        "É isso que o Devil's Club representa: experiência para o jogador, identidade em cada jogo.",
      "about.val1":
        "<strong>Para Quem Joga</strong> Cada decisão pensada na experiência, do primeiro protótipo ao lançamento.",
      "about.val2":
        "<strong>Identidade Própria</strong> Nada de fórmula pronta: cada projeto tem a sua voz, a sua arte e o seu ritmo.",
      "about.val3":
        "<strong>Tudo na Casa</strong> Um time pequeno que assina cada etapa, do roteiro ao build final.",
      "team.title": "A equipe",
      "team.desc":
        "Time enxuto e multidisciplinar. As mesmas pessoas que escrevem, desenham e programam cada jogo.",
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
      "contact.title": "Contato",
      "contact.desc": "Para conversas gerais, parcerias e oportunidades comerciais.",
      "contact.general.label": "Geral",
      "contact.general.hint": "Dúvidas, convites e assuntos diversos.",
      "contact.biz.label": "Parcerias & negócios",
      "contact.biz.hint": "Publishers, investidores e colaborações B2B.",
      "press.title": "Imprensa",
      "press.desc": "Jornalistas, criadores de conteúdo e curadores de lojas. Fale direto com a gente.",
      "footer.rights": "Todos os direitos reservados.",
    },
    en: {
      "meta.description":
        "Devil's Club: indie game studio. Visual novels, adventures and 3D platformers with an identity of their own, from script to launch.",
      "aria.logo": "Devil's Club: home",
      "aria.nav": "Main",
      "aria.menuOpen": "Open menu",
      "aria.menuClose": "Close menu",
      "aria.scrollProducts": "Scroll to games",
      "aria.lang": "Select language",
      "nav.products": "Games",
      "nav.about": "Who we are",
      "nav.contact": "Contact",
      "hero.eyebrow": "Indie studio · Brazil",
      "hero.title1": "Experience for the player.",
      "hero.title2": "Identity in every game.",
      "hero.lead":
        "We create games with a distinct identity, made in house: script, art and code by the same team, from first prototype to launch.",
      "hero.ctaProducts": "View games",
      "hero.ctaContact": "Contact",
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
      "about.foundation": "Founded",
      "about.indieLabel": "At heart",
      "about.tag": "Who we are",
      "about.title": "Devil's Club",
      "about.p1":
        "Original games, end to end. A small indie studio with the same team from script to launch.",
      "about.p2": "That is what Devil's Club stands for: experience for the player, identity in every game.",
      "about.val1":
        "<strong>For Players</strong> Every decision shaped around the experience, from first prototype to launch.",
      "about.val2":
        "<strong>A Voice of Its Own</strong> No ready-made formula: every project gets its own voice, art and pace.",
      "about.val3":
        "<strong>All In House</strong> A small team that signs every step, from script to final build.",
      "team.title": "The team",
      "team.desc": "A lean, multidisciplinary crew. The same people who write, draw and program every game.",
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
      "contact.title": "Contact",
      "contact.desc": "For general conversations, partnerships, and business opportunities.",
      "contact.general.label": "General",
      "contact.general.hint": "Questions, invitations, and other matters.",
      "contact.biz.label": "Partnerships & business",
      "contact.biz.hint": "Publishers, investors, and B2B collaborations.",
      "press.title": "Press",
      "press.desc": "Journalists, content creators and store curators. Talk to us directly.",
      "footer.rights": "All rights reserved.",
    },
    fr: {
      "meta.description":
        "Devil's Club : studio indie de jeux. Visual novels, aventures et plateforme 3D à l'identité propre, du scénario au lancement.",
      "aria.logo": "Devil's Club: accueil",
      "aria.nav": "Principal",
      "aria.menuOpen": "Ouvrir le menu",
      "aria.menuClose": "Fermer le menu",
      "aria.scrollProducts": "Défiler vers les jeux",
      "aria.lang": "Choisir la langue",
      "nav.products": "Jeux",
      "nav.about": "Qui nous sommes",
      "nav.contact": "Contact",
      "hero.eyebrow": "Studio indie · Brésil",
      "hero.title1": "L'expérience pour le joueur.",
      "hero.title2": "Une identité dans chaque jeu.",
      "hero.lead":
        "Nous créons des jeux à l'identité propre, produits en interne : scénario, art et code par la même équipe, du premier prototype au lancement.",
      "hero.ctaProducts": "Voir les jeux",
      "hero.ctaContact": "Contact",
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
      "about.foundation": "Fondation",
      "about.indieLabel": "Indépendant dans l'âme",
      "about.tag": "Qui nous sommes",
      "about.title": "Devil's Club",
      "about.p1":
        "Des jeux originaux, de bout en bout. Un petit studio indie, avec la même équipe du scénario au lancement.",
      "about.p2":
        "C'est ce que représente Devil's Club : l'expérience pour le joueur, une identité dans chaque jeu.",
      "about.val1":
        "<strong>Pour les Joueurs</strong> Chaque décision pensée pour l'expérience, du premier prototype au lancement.",
      "about.val2":
        "<strong>Une Identité Propre</strong> Pas de formule toute faite : chaque projet a sa voix, son art et son rythme.",
      "about.val3":
        "<strong>Tout en Interne</strong> Une petite équipe qui signe chaque étape, du scénario au build final.",
      "team.title": "L'équipe",
      "team.desc":
        "Une équipe réduite et pluridisciplinaire. Les mêmes personnes écrivent, dessinent et programment chaque jeu.",
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
      "contact.title": "Contact",
      "contact.desc": "Pour les conversations générales, partenariats et opportunités commerciales.",
      "contact.general.label": "Général",
      "contact.general.hint": "Questions, invitations et autres sujets.",
      "contact.biz.label": "Partenariats & business",
      "contact.biz.hint": "Publishers, investisseurs et collaborations B2B.",
      "press.title": "Presse",
      "press.desc": "Journalistes, créateurs de contenu et curateurs de boutiques. Parlez-nous directement.",
      "footer.rights": "Tous droits réservés.",
    },
    es: {
      "meta.description":
        "Devil's Club: estudio indie de videojuegos. Visual novels, aventuras y plataformas 3D con identidad propia, del guion al lanzamiento.",
      "aria.logo": "Devil's Club: inicio",
      "aria.nav": "Principal",
      "aria.menuOpen": "Abrir menú",
      "aria.menuClose": "Cerrar menú",
      "aria.scrollProducts": "Desplazar a juegos",
      "aria.lang": "Seleccionar idioma",
      "nav.products": "Juegos",
      "nav.about": "Quiénes somos",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Estudio indie · Brasil",
      "hero.title1": "Experiencia para el jugador.",
      "hero.title2": "Identidad en cada juego.",
      "hero.lead":
        "Creamos juegos con identidad propia, producidos en casa: guion, arte y código por el mismo equipo, del primer prototipo al lanzamiento.",
      "hero.ctaProducts": "Ver juegos",
      "hero.ctaContact": "Contacto",
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
      "about.foundation": "Fundación",
      "about.indieLabel": "De corazón",
      "about.tag": "Quiénes somos",
      "about.title": "Devil's Club",
      "about.p1":
        "Juegos de autor, de principio a fin. Un estudio indie pequeño, con el mismo equipo del guion al lanzamiento.",
      "about.p2":
        "Eso es lo que representa Devil's Club: experiencia para el jugador, identidad en cada juego.",
      "about.val1":
        "<strong>Para Quien Juega</strong> Cada decisión pensada en la experiencia, del primer prototipo al lanzamiento.",
      "about.val2":
        "<strong>Identidad Propia</strong> Nada de fórmulas hechas: cada proyecto tiene su voz, su arte y su ritmo.",
      "about.val3":
        "<strong>Todo en Casa</strong> Un equipo pequeño que firma cada etapa, del guion a la build final.",
      "team.title": "El equipo",
      "team.desc":
        "Equipo reducido y multidisciplinar. Las mismas personas que escriben, dibujan y programan cada juego.",
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
      "contact.title": "Contacto",
      "contact.desc": "Para conversaciones generales, alianzas y oportunidades comerciales.",
      "contact.general.label": "General",
      "contact.general.hint": "Dudas, invitaciones y otros asuntos.",
      "contact.biz.label": "Alianzas y negocios",
      "contact.biz.hint": "Publishers, inversores y colaboraciones B2B.",
      "press.title": "Prensa",
      "press.desc":
        "Periodistas, creadores de contenido y curadores de tiendas. Habla directamente con nosotros.",
      "footer.rights": "Todos los derechos reservados.",
    },
    zh: {
      "meta.description": "Devil's Club：独立游戏工作室。视觉小说、冒险与 3D 平台游戏，拥有独特身份，从剧本到发布。",
      "aria.logo": "Devil's Club: 首页",
      "aria.nav": "主导航",
      "aria.menuOpen": "打开菜单",
      "aria.menuClose": "关闭菜单",
      "aria.scrollProducts": "滚动至游戏",
      "aria.lang": "选择语言",
      "nav.products": "游戏",
      "nav.about": "关于我们",
      "nav.contact": "联系",
      "hero.eyebrow": "独立工作室 · 巴西",
      "hero.title1": "为玩家打造体验。",
      "hero.title2": "每款游戏都有独特身份。",
      "hero.lead": "我们打造具有独特身份的游戏，全部由内部完成：剧本、美术与代码出自同一支团队，从首个原型到正式发布。",
      "hero.ctaProducts": "查看游戏",
      "hero.ctaContact": "联系",
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
      "about.foundation": "成立",
      "about.indieLabel": "发自内心",
      "about.tag": "关于我们",
      "about.title": "Devil's Club",
      "about.p1": "原创游戏，从头做到尾。一家小型独立工作室，从剧本到发布都是同一支团队。",
      "about.p2": "这就是 Devil's Club 的意义：为玩家带来体验，为每款游戏赋予独特身份。",
      "about.val1":
        "<strong>为玩家</strong> 每个决定都围绕体验，从首个原型到正式发布。",
      "about.val2": "<strong>独特身份</strong> 没有现成公式：每个项目都有自己的声音、美术与节奏。",
      "about.val3": "<strong>全部自研</strong> 一支小团队负责每个环节，从剧本到最终构建。",
      "team.title": "团队",
      "team.desc": "精简而多学科的团队。写剧本、画美术、写代码的都是同一群人。",
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
      "contact.title": "联系",
      "contact.desc": "一般咨询、合作与商业机会。",
      "contact.general.label": "综合",
      "contact.general.hint": "疑问、邀请及其他事宜。",
      "contact.biz.label": "合作与商务",
      "contact.biz.hint": "发行商、投资人与 B2B 合作。",
      "press.title": "媒体",
      "press.desc": "记者、内容创作者与商店编辑。直接与我们联系。",
      "footer.rights": "版权所有。",
    },
    ja: {
      "meta.description":
        "Devil's Club：インディーゲームスタジオ。独自のアイデンティティを持つビジュアルノベル、アドベンチャー、3D プラットフォーマーを、脚本からリリースまで。",
      "aria.logo": "Devil's Club: ホーム",
      "aria.nav": "メイン",
      "aria.menuOpen": "メニューを開く",
      "aria.menuClose": "メニューを閉じる",
      "aria.scrollProducts": "ゲームへスクロール",
      "aria.lang": "言語を選択",
      "nav.products": "ゲーム",
      "nav.about": "私たちについて",
      "nav.contact": "お問い合わせ",
      "hero.eyebrow": "インディースタジオ · ブラジル",
      "hero.title1": "プレイヤーへの体験。",
      "hero.title2": "すべてのゲームに個性を。",
      "hero.lead": "独自のアイデンティティを持つゲームを、すべて自社で制作。脚本もアートもコードも同じチームが、最初のプロトタイプからリリースまで手がけます。",
      "hero.ctaProducts": "ゲームを見る",
      "hero.ctaContact": "お問い合わせ",
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
      "about.foundation": "設立",
      "about.indieLabel": "インディーの心",
      "about.tag": "私たちについて",
      "about.title": "Devil's Club",
      "about.p1": "オリジナルゲームを、最初から最後まで。脚本からリリースまで同じチームが担う小さなインディースタジオです。",
      "about.p2": "それが Devil's Club の意味です。プレイヤーには体験を、すべてのゲームに個性を。",
      "about.val1":
        "<strong>プレイヤーのために</strong> 最初のプロトタイプからリリースまで、体験を念頭に置いたすべての判断。",
      "about.val2": "<strong>独自の個性</strong> 既成の型はありません。プロジェクトごとに固有の声、アート、テンポがあります。",
      "about.val3": "<strong>すべて自社で</strong> 脚本から最終ビルドまで、小さなチームがすべての工程を担います。",
      "team.title": "チーム",
      "team.desc": "少数精鋭の多能工チーム。書く人、描く人、コードを書く人が同じです。",
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
      "contact.title": "お問い合わせ",
      "contact.desc": "一般的な会話、パートナーシップ、ビジネス機会について。",
      "contact.general.label": "一般",
      "contact.general.hint": "質問、招待、その他の件。",
      "contact.biz.label": "パートナーシップとビジネス",
      "contact.biz.hint": "パブリッシャー、投資家、B2B コラボレーション。",
      "press.title": "プレス",
      "press.desc": "ジャーナリスト、クリエイター、ストアのキュレーターの方へ。直接ご連絡ください。",
      "footer.rights": "無断転載を禁じます。",
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
