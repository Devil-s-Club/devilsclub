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
        "Devil's Club — estúdio indie de jogos e frameworks para Unity Asset Store. Experiências originais e ferramentas para outros devs.",
      "aria.logo": "Devil's Club — início",
      "aria.nav": "Principal",
      "aria.menuOpen": "Abrir menu",
      "aria.menuClose": "Fechar menu",
      "aria.scrollProducts": "Rolar para produtos",
      "aria.lang": "Selecionar idioma",
      "nav.products": "Produtos",
      "nav.about": "Sobre",
      "nav.team": "Equipe",
      "nav.contact": "Contato",
      "hero.eyebrow": "Estúdio indie · Brasil",
      "hero.title1": "Experiência para o jogador.",
      "hero.title2": "Eficiência para o dev.",
      "hero.lead":
        "Criamos jogos com identidade própria e frameworks que aceleram a produção — testados nos nossos projetos antes de irem para a loja.",
      "hero.ctaProducts": "Ver produtos",
      "hero.ctaContact": "Contato",
      "hero.scroll": "Scroll",
      "products.tag": "Produtos",
      "products.title": "O que fazemos",
      "products.desc":
        "Duas linhas de trabalho que se alimentam: jogos com identidade própria e frameworks que aceleram a produção — inclusive a nossa.",
      "games.title": "Jogos",
      "games.desc": "Títulos autorais.",
      "game.mel.coverAlt": "Capa de My Eternal Lily",
      "game.mel.status": "Disponível",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "Após um acidente de trabalho que tira seu emprego e compromete seu braço mecânico, Conor Spada vai até a Praça da República em busca de renda. Lá encontra uma loja de assistência à beira da falência e seu dono Nano, silencioso, sério e um pouco misterioso.",
      "game.mel.cta": "Jogar no itch.io",
      "game.raizes.coverAlt": "Capa de Raízes",
      "game.raizes.status": "Disponível",
      "game.raizes.genre": "Visual Novel · Point-and-click · Ancestralidade amazônica",
      "game.raizes.desc":
        "Uma missão acadêmica leva você até Belém na busca por um artefato. Diálogos, investigação e escolhas revelam o conflito entre memória cultural e poder.",
      "game.raizes.cta": "Jogar no itch.io",
      "game.serra.placeholderAlt": "O Caso Serra Vermelha",
      "game.serra.placeholder": "Arte em breve",
      "game.serra.status": "Em desenvolvimento",
      "game.serra.genre": "Visual Novel · Suspense · Investigação · Point-and-click",
      "game.serra.desc":
        "Clara Carvalho volta a Itaipupé, na Serra Vermelha (MG), para investigar o desaparecimento da irmã — uma jornalista perto de expor os segredos da mineradora Montesa. Cinco dias de diálogos, pistas e decisões.",
      "game.lunaria.placeholderAlt": "Projeto Lunária",
      "game.lunaria.placeholder": "Em prototipação",
      "game.lunaria.status": "Em prototipação",
      "game.lunaria.genre": "Survival Horror · PSX",
      "game.lunaria.desc": "Um survival horror com estética PSX. Detalhes em breve.",
      "product.note":
        "Nosso framework nasce de necessidade real — e foi validado em My Eternal Lily antes de ir para a loja.",
      "frameworks.title": "Frameworks",
      "frameworks.desc":
        "Ferramentas testadas nos nossos jogos, documentadas e disponibilizadas para outros Game Devs usarem em seus projetos.",
      "fw.vn.placeholderAlt": "Framework de visual novel para Unity",
      "fw.vn.placeholder": "Visual Novel",
      "fw.vn.status": "Em desenvolvimento",
      "fw.vn.genre": "Visual Novel · Unity · C# · Nome em definição",
      "fw.vn.desc":
        "Facilita o desenvolvimento de visual novels na Unity: você foca em escrever a história e fazer as artes — o framework cuida do resto. Expansível e customizável para a necessidade de cada projeto.",
      "fw.vn.cta": "Asset Store em breve",
      "about.foundation": "Fundação",
      "about.indieLabel": "De coração",
      "about.tag": "Sobre",
      "about.title": "O Devil's Club",
      "about.p1":
        "Jogos autorais para players. Frameworks para desenvolvedores. Um estúdio indie com as duas frentes — e o mesmo time por trás.",
      "about.p2":
        "É isso que o Devil's Club representa: experiência para o jogador, eficiência para o desenvolvedor.",
      "about.val1":
        "<strong>Para Quem Joga</strong> — Cada decisão pensada na experiência, do primeiro protótipo ao lançamento.",
      "about.val2":
        "<strong>Para Quem Desenvolve</strong> — De Game Dev para Game Dev: ferramentas que nascem do nosso dia a dia em produção.",
      "about.val3":
        "<strong>Tudo Conectado</strong> — O que a gente usa nos nossos jogos é o que publicamos nas Asset Stores.",
      "team.tag": "Quem faz",
      "team.title": "A equipe",
      "team.desc":
        "Time enxuto, multidisciplinar — as mesmas pessoas que fazem os jogos constroem os frameworks.",
      "team.fabio.role": "Fundador · Diretor criativo · Lead programmer",
      "team.fabio.bio":
        "Direção criativa e código — dos protótipos dos jogos aos frameworks que saem da Asset Store.",
      "team.arthur.role": "Programador",
      "team.arthur.bio":
        "Código e sistemas — do gameplay às ferramentas que sustentam os projetos do estúdio.",
      "team.camila.role": "Diretora de narrativa",
      "team.camila.bio":
        "Roteiro, worldbuilding e voz narrativa — da primeira ideia ao arco que define cada jogo do estúdio.",
      "team.pablo.role": "Diretor de arte",
      "team.pablo.bio":
        "Direção visual e identidade de cada projeto — do conceito à linguagem gráfica que unifica o estúdio.",
      "team.ani.role": "Lead artist · Personagens",
      "team.ani.bio":
        "Design e arte de personagens — do conceito ao sprite final, com personalidade em cada traço.",
      "reach.tag": "Fale conosco",
      "reach.title": "Contato & imprensa",
      "reach.desc": "Escolha o canal certo — respondemos o mais rápido possível.",
      "contact.title": "Contato",
      "contact.desc": "Para conversas gerais, parcerias e oportunidades comerciais.",
      "contact.general.label": "Geral",
      "contact.general.hint": "Dúvidas, convites e assuntos diversos.",
      "contact.biz.label": "Parcerias & negócios",
      "contact.biz.hint": "Publishers, investidores e colaborações B2B.",
      "press.title": "Imprensa",
      "press.desc":
        "Jornalistas, criadores de conteúdo e curadores de lojas — material oficial do estúdio.",
      "press.item1": "Logos e paleta de cores",
      "press.item2": "Screenshots e key art",
      "press.item3": "Fact sheet do estúdio",
      "press.ctaDownload": "Baixar press kit",
      "footer.rights": "Todos os direitos reservados.",
    },
    en: {
      "meta.description":
        "Devil's Club — indie game studio and frameworks for the Unity Asset Store. Original experiences and tools for fellow developers.",
      "aria.logo": "Devil's Club — home",
      "aria.nav": "Main",
      "aria.menuOpen": "Open menu",
      "aria.menuClose": "Close menu",
      "aria.scrollProducts": "Scroll to products",
      "aria.lang": "Select language",
      "nav.products": "Products",
      "nav.about": "About",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "hero.eyebrow": "Indie studio · Brazil",
      "hero.title1": "Experience for the player.",
      "hero.title2": "Efficiency for the dev.",
      "hero.lead":
        "We create games with a distinct identity and frameworks that speed up production — tested in our own projects before heading to the store.",
      "hero.ctaProducts": "View products",
      "hero.ctaContact": "Contact",
      "hero.scroll": "Scroll",
      "products.tag": "Products",
      "products.title": "What we do",
      "products.desc":
        "Two lines of work that feed each other: games with a distinct identity and frameworks that speed up production — including our own.",
      "games.title": "Games",
      "games.desc": "Original titles.",
      "game.mel.coverAlt": "My Eternal Lily cover",
      "game.mel.status": "Available",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "After a workplace accident costs him his job and damages his mechanical arm, Conor Spada heads to Praça da República looking for income. There he finds a repair shop on the brink of bankruptcy and its owner Nano — quiet, serious, and a little mysterious.",
      "game.mel.cta": "Play on itch.io",
      "game.raizes.coverAlt": "Raízes cover",
      "game.raizes.status": "Available",
      "game.raizes.genre": "Visual Novel · Point-and-click · Amazonian ancestry",
      "game.raizes.desc":
        "An academic mission takes you to Belém in search of an artifact. Dialogue, investigation, and choices reveal the conflict between cultural memory and power.",
      "game.raizes.cta": "Play on itch.io",
      "game.serra.placeholderAlt": "O Caso Serra Vermelha",
      "game.serra.placeholder": "Art coming soon",
      "game.serra.status": "In development",
      "game.serra.genre": "Visual Novel · Suspense · Investigation · Point-and-click",
      "game.serra.desc":
        "Clara Carvalho returns to Itaipupé, in Serra Vermelha (MG), to investigate her sister's disappearance — a journalist close to exposing mining company Montesa's secrets. Five days of dialogue, clues, and decisions.",
      "game.lunaria.placeholderAlt": "Projeto Lunária",
      "game.lunaria.placeholder": "In prototyping",
      "game.lunaria.status": "In prototyping",
      "game.lunaria.genre": "Survival Horror · PSX",
      "game.lunaria.desc": "A PSX-style survival horror. Details coming soon.",
      "product.note":
        "Our framework was born from real needs — and was validated in My Eternal Lily before heading to the store.",
      "frameworks.title": "Frameworks",
      "frameworks.desc":
        "Tools tested in our games, documented and made available for other game developers to use in their projects.",
      "fw.vn.placeholderAlt": "Visual novel framework for Unity",
      "fw.vn.placeholder": "Visual Novel",
      "fw.vn.status": "In development",
      "fw.vn.genre": "Visual Novel · Unity · C# · Name TBD",
      "fw.vn.desc":
        "Streamlines visual novel development in Unity: you focus on writing the story and creating the art — the framework handles the rest. Expandable and customizable for each project's needs.",
      "fw.vn.cta": "Asset Store coming soon",
      "about.foundation": "Founded",
      "about.indieLabel": "At heart",
      "about.tag": "About",
      "about.title": "Devil's Club",
      "about.p1":
        "Original games for players. Frameworks for developers. An indie studio on both fronts — with the same team behind them.",
      "about.p2":
        "That's what Devil's Club stands for: experience for the player, efficiency for the developer.",
      "about.val1":
        "<strong>For Players</strong> — Every decision shaped around the experience, from first prototype to launch.",
      "about.val2":
        "<strong>For Developers</strong> — By game devs, for game devs: tools born from our day-to-day production.",
      "about.val3":
        "<strong>All Connected</strong> — What we use in our games is what we publish on the Asset Stores.",
      "team.tag": "Who we are",
      "team.title": "The team",
      "team.desc":
        "A lean, multidisciplinary crew — the same people who make the games build the frameworks.",
      "team.fabio.role": "Founder · Creative director · Lead programmer",
      "team.fabio.bio":
        "Creative direction and code — from game prototypes to frameworks on the Asset Store.",
      "team.arthur.role": "Programmer",
      "team.arthur.bio":
        "Code and systems — from gameplay to the tools that power the studio's projects.",
      "team.camila.role": "Narrative director",
      "team.camila.bio":
        "Writing, worldbuilding, and narrative voice — from the first idea to the arc that defines each studio game.",
      "team.pablo.role": "Art director",
      "team.pablo.bio":
        "Visual direction and identity for each project — from concept to the graphic language that unifies the studio.",
      "team.ani.role": "Lead artist · Characters",
      "team.ani.bio":
        "Character design and art — from concept to final sprite, with personality in every line.",
      "reach.tag": "Get in touch",
      "reach.title": "Contact & press",
      "reach.desc": "Choose the right channel — we'll respond as quickly as we can.",
      "contact.title": "Contact",
      "contact.desc": "For general conversations, partnerships, and business opportunities.",
      "contact.general.label": "General",
      "contact.general.hint": "Questions, invitations, and other matters.",
      "contact.biz.label": "Partnerships & business",
      "contact.biz.hint": "Publishers, investors, and B2B collaborations.",
      "press.title": "Press",
      "press.desc":
        "Journalists, content creators, and store curators — official studio materials.",
      "press.item1": "Logos and color palette",
      "press.item2": "Screenshots and key art",
      "press.item3": "Studio fact sheet",
      "press.ctaDownload": "Download press kit",
      "footer.rights": "All rights reserved.",
    },
    fr: {
      "meta.description":
        "Devil's Club — studio indie de jeux et frameworks pour Unity Asset Store. Expériences originales et outils pour les développeurs.",
      "aria.logo": "Devil's Club — accueil",
      "aria.nav": "Principal",
      "aria.menuOpen": "Ouvrir le menu",
      "aria.menuClose": "Fermer le menu",
      "aria.scrollProducts": "Défiler vers les produits",
      "aria.lang": "Choisir la langue",
      "nav.products": "Produits",
      "nav.about": "À propos",
      "nav.team": "Équipe",
      "nav.contact": "Contact",
      "hero.eyebrow": "Studio indie · Brésil",
      "hero.title1": "L'expérience pour le joueur.",
      "hero.title2": "L'efficacité pour le dev.",
      "hero.lead":
        "Nous créons des jeux à identité propre et des frameworks qui accélèrent la production — testés dans nos propres projets avant d'aller en boutique.",
      "hero.ctaProducts": "Voir les produits",
      "hero.ctaContact": "Contact",
      "hero.scroll": "Défiler",
      "products.tag": "Produits",
      "products.title": "Ce que nous faisons",
      "products.desc":
        "Deux lignes de travail qui se nourrissent mutuellement : des jeux à identité propre et des frameworks qui accélèrent la production — y compris la nôtre.",
      "games.title": "Jeux",
      "games.desc": "Titres originaux.",
      "game.mel.coverAlt": "Couverture de My Eternal Lily",
      "game.mel.status": "Disponible",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "Après un accident de travail qui lui coûte son emploi et endommage son bras mécanique, Conor Spada se rend sur la Praça da República en quête de revenus. Il y trouve un atelier de réparation au bord de la faillite et son propriétaire Nano — silencieux, sérieux et un peu mystérieux.",
      "game.mel.cta": "Jouer sur itch.io",
      "game.raizes.coverAlt": "Couverture de Raízes",
      "game.raizes.status": "Disponible",
      "game.raizes.genre": "Visual Novel · Point-and-click · Ancestralité amazonienne",
      "game.raizes.desc":
        "Une mission académique vous mène à Belém à la recherche d'un artefact. Dialogues, enquête et choix révèlent le conflit entre mémoire culturelle et pouvoir.",
      "game.raizes.cta": "Jouer sur itch.io",
      "game.serra.placeholderAlt": "O Caso Serra Vermelha",
      "game.serra.placeholder": "Art bientôt disponible",
      "game.serra.status": "En développement",
      "game.serra.genre": "Visual Novel · Suspense · Enquête · Point-and-click",
      "game.serra.desc":
        "Clara Carvalho retourne à Itaipupé, dans la Serra Vermelha (MG), pour enquêter sur la disparition de sa sœur — une journaliste sur le point d'exposer les secrets de la minière Montesa. Cinq jours de dialogues, d'indices et de décisions.",
      "game.lunaria.placeholderAlt": "Projeto Lunária",
      "game.lunaria.placeholder": "En prototypage",
      "game.lunaria.status": "En prototypage",
      "game.lunaria.genre": "Survival Horror · PSX",
      "game.lunaria.desc": "Un survival horror à l'esthétique PSX. Détails bientôt disponibles.",
      "product.note":
        "Notre framework est né d'un besoin réel — et a été validé dans My Eternal Lily avant d'aller en boutique.",
      "frameworks.title": "Frameworks",
      "frameworks.desc":
        "Outils testés dans nos jeux, documentés et mis à disposition d'autres game devs pour leurs projets.",
      "fw.vn.placeholderAlt": "Framework de visual novel pour Unity",
      "fw.vn.placeholder": "Visual Novel",
      "fw.vn.status": "En développement",
      "fw.vn.genre": "Visual Novel · Unity · C# · Nom en cours de définition",
      "fw.vn.desc":
        "Facilite le développement de visual novels sur Unity : vous vous concentrez sur l'écriture et l'art — le framework s'occupe du reste. Extensible et personnalisable selon chaque projet.",
      "fw.vn.cta": "Asset Store bientôt disponible",
      "about.foundation": "Fondation",
      "about.indieLabel": "Indépendant dans l'âme",
      "about.tag": "À propos",
      "about.title": "Devil's Club",
      "about.p1":
        "Des jeux originaux pour les joueurs. Des frameworks pour les développeurs. Un studio indie sur les deux fronts — avec la même équipe derrière.",
      "about.p2":
        "C'est ce que représente Devil's Club : l'expérience pour le joueur, l'efficacité pour le développeur.",
      "about.val1":
        "<strong>Pour les Joueurs</strong> — Chaque décision pensée pour l'expérience, du premier prototype au lancement.",
      "about.val2":
        "<strong>Pour les Développeurs</strong> — De game dev à game dev : des outils nés de notre quotidien en production.",
      "about.val3":
        "<strong>Tout est Connecté</strong> — Ce que nous utilisons dans nos jeux est ce que nous publions sur les Asset Stores.",
      "team.tag": "Qui sommes-nous",
      "team.title": "L'équipe",
      "team.desc":
        "Une équipe réduite et pluridisciplinaire — les mêmes personnes qui font les jeux construisent les frameworks.",
      "team.fabio.role": "Fondateur · Directeur créatif · Lead programmer",
      "team.fabio.bio":
        "Direction créative et code — des prototypes de jeux aux frameworks sur l'Asset Store.",
      "team.arthur.role": "Programmeur",
      "team.arthur.bio":
        "Code et systèmes — du gameplay aux outils qui soutiennent les projets du studio.",
      "team.camila.role": "Directrice narrative",
      "team.camila.bio":
        "Scénario, worldbuilding et voix narrative — de la première idée à l'arc qui définit chaque jeu du studio.",
      "team.pablo.role": "Directeur artistique",
      "team.pablo.bio":
        "Direction visuelle et identité de chaque projet — du concept au langage graphique qui unifie le studio.",
      "team.ani.role": "Lead artist · Personnages",
      "team.ani.bio":
        "Design et art des personnages — du concept au sprite final, avec de la personnalité dans chaque trait.",
      "reach.tag": "Contactez-nous",
      "reach.title": "Contact & presse",
      "reach.desc": "Choisissez le bon canal — nous répondrons le plus vite possible.",
      "contact.title": "Contact",
      "contact.desc": "Pour les conversations générales, partenariats et opportunités commerciales.",
      "contact.general.label": "Général",
      "contact.general.hint": "Questions, invitations et autres sujets.",
      "contact.biz.label": "Partenariats & business",
      "contact.biz.hint": "Publishers, investisseurs et collaborations B2B.",
      "press.title": "Presse",
      "press.desc":
        "Journalistes, créateurs de contenu et curateurs de boutiques — matériel officiel du studio.",
      "press.item1": "Logos et palette de couleurs",
      "press.item2": "Captures d'écran et key art",
      "press.item3": "Fact sheet du studio",
      "press.ctaDownload": "Télécharger le press kit",
      "footer.rights": "Tous droits réservés.",
    },
    es: {
      "meta.description":
        "Devil's Club — estudio indie de juegos y frameworks para Unity Asset Store. Experiencias originales y herramientas para otros desarrolladores.",
      "aria.logo": "Devil's Club — inicio",
      "aria.nav": "Principal",
      "aria.menuOpen": "Abrir menú",
      "aria.menuClose": "Cerrar menú",
      "aria.scrollProducts": "Desplazar a productos",
      "aria.lang": "Seleccionar idioma",
      "nav.products": "Productos",
      "nav.about": "Sobre nosotros",
      "nav.team": "Equipo",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Estudio indie · Brasil",
      "hero.title1": "Experiencia para el jugador.",
      "hero.title2": "Eficiencia para el dev.",
      "hero.lead":
        "Creamos juegos con identidad propia y frameworks que aceleran la producción — probados en nuestros proyectos antes de llegar a la tienda.",
      "hero.ctaProducts": "Ver productos",
      "hero.ctaContact": "Contacto",
      "hero.scroll": "Scroll",
      "products.tag": "Productos",
      "products.title": "Qué hacemos",
      "products.desc":
        "Dos líneas de trabajo que se alimentan mutuamente: juegos con identidad propia y frameworks que aceleran la producción — incluida la nuestra.",
      "games.title": "Juegos",
      "games.desc": "Títulos originales.",
      "game.mel.coverAlt": "Portada de My Eternal Lily",
      "game.mel.status": "Disponible",
      "game.mel.genre": "Visual Novel · Romance · LGBTQIA · 2D",
      "game.mel.desc":
        "Tras un accidente laboral que le cuesta el empleo y daña su brazo mecánico, Conor Spada va a la Praça da República en busca de ingresos. Allí encuentra una tienda de reparaciones al borde de la quiebra y su dueño Nano — callado, serio y un poco misterioso.",
      "game.mel.cta": "Jugar en itch.io",
      "game.raizes.coverAlt": "Portada de Raízes",
      "game.raizes.status": "Disponible",
      "game.raizes.genre": "Visual Novel · Point-and-click · Ancestralidad amazónica",
      "game.raizes.desc":
        "Una misión académica te lleva hasta Belém en busca de un artefacto. Diálogos, investigación y decisiones revelan el conflicto entre memoria cultural y poder.",
      "game.raizes.cta": "Jugar en itch.io",
      "game.serra.placeholderAlt": "O Caso Serra Vermelha",
      "game.serra.placeholder": "Arte próximamente",
      "game.serra.status": "En desarrollo",
      "game.serra.genre": "Visual Novel · Suspenso · Investigación · Point-and-click",
      "game.serra.desc":
        "Clara Carvalho regresa a Itaipupé, en Serra Vermelha (MG), para investigar la desaparición de su hermana — una periodista a punto de exponer los secretos de la minera Montesa. Cinco días de diálogos, pistas y decisiones.",
      "game.lunaria.placeholderAlt": "Projeto Lunária",
      "game.lunaria.placeholder": "En prototipado",
      "game.lunaria.status": "En prototipado",
      "game.lunaria.genre": "Survival Horror · PSX",
      "game.lunaria.desc": "Un survival horror con estética PSX. Detalles próximamente.",
      "product.note":
        "Nuestro framework nace de una necesidad real — y fue validado en My Eternal Lily antes de llegar a la tienda.",
      "frameworks.title": "Frameworks",
      "frameworks.desc":
        "Herramientas probadas en nuestros juegos, documentadas y disponibles para que otros game devs las usen en sus proyectos.",
      "fw.vn.placeholderAlt": "Framework de visual novel para Unity",
      "fw.vn.placeholder": "Visual Novel",
      "fw.vn.status": "En desarrollo",
      "fw.vn.genre": "Visual Novel · Unity · C# · Nombre por definir",
      "fw.vn.desc":
        "Facilita el desarrollo de visual novels en Unity: tú te enfocas en escribir la historia y crear el arte — el framework se encarga del resto. Expandible y personalizable según cada proyecto.",
      "fw.vn.cta": "Asset Store próximamente",
      "about.foundation": "Fundación",
      "about.indieLabel": "De corazón",
      "about.tag": "Sobre nosotros",
      "about.title": "Devil's Club",
      "about.p1":
        "Juegos autorais para jugadores. Frameworks para desarrolladores. Un estudio indie en ambas frentes — con el mismo equipo detrás.",
      "about.p2":
        "Eso es lo que representa Devil's Club: experiencia para el jugador, eficiencia para el desarrollador.",
      "about.val1":
        "<strong>Para Quien Juega</strong> — Cada decisión pensada en la experiencia, del primer prototipo al lanzamiento.",
      "about.val2":
        "<strong>Para Quien Desarrolla</strong> — De game dev para game dev: herramientas nacidas de nuestro día a día en producción.",
      "about.val3":
        "<strong>Todo Conectado</strong> — Lo que usamos en nuestros juegos es lo que publicamos en las Asset Stores.",
      "team.tag": "Quiénes somos",
      "team.title": "El equipo",
      "team.desc":
        "Equipo reducido y multidisciplinar — las mismas personas que hacen los juegos construyen los frameworks.",
      "team.fabio.role": "Fundador · Director creativo · Lead programmer",
      "team.fabio.bio":
        "Dirección creativa y código — de los prototipos de juegos a los frameworks en la Asset Store.",
      "team.arthur.role": "Programador",
      "team.arthur.bio":
        "Código y sistemas — del gameplay a las herramientas que sustentan los proyectos del estudio.",
      "team.camila.role": "Directora de narrativa",
      "team.camila.bio":
        "Guion, worldbuilding y voz narrativa — de la primera idea al arco que define cada juego del estúdio.",
      "team.pablo.role": "Director de arte",
      "team.pablo.bio":
        "Dirección visual e identidad de cada proyecto — del concepto al lenguaje gráfico que unifica el estúdio.",
      "team.ani.role": "Lead artist · Personajes",
      "team.ani.bio":
        "Diseño y arte de personajes — del concepto al sprite final, con personalidad en cada trazo.",
      "reach.tag": "Hable con nosotros",
      "reach.title": "Contacto y prensa",
      "reach.desc": "Elija el canal adecuado — respondemos lo antes posible.",
      "contact.title": "Contacto",
      "contact.desc": "Para conversaciones generales, alianzas y oportunidades comerciales.",
      "contact.general.label": "General",
      "contact.general.hint": "Dudas, invitaciones y otros asuntos.",
      "contact.biz.label": "Alianzas y negocios",
      "contact.biz.hint": "Publishers, inversores y colaboraciones B2B.",
      "press.title": "Prensa",
      "press.desc":
        "Periodistas, creadores de contenido y curadores de tiendas — material oficial del estúdio.",
      "press.item1": "Logos y paleta de colores",
      "press.item2": "Capturas y key art",
      "press.item3": "Fact sheet del estúdio",
      "press.ctaDownload": "Descargar press kit",
      "footer.rights": "Todos los derechos reservados.",
    },
    zh: {
      "meta.description":
        "Devil's Club — 独立游戏工作室，为 Unity Asset Store 提供游戏与框架。原创体验与开发者工具。",
      "aria.logo": "Devil's Club — 首页",
      "aria.nav": "主导航",
      "aria.menuOpen": "打开菜单",
      "aria.menuClose": "关闭菜单",
      "aria.scrollProducts": "滚动至产品",
      "aria.lang": "选择语言",
      "nav.products": "产品",
      "nav.about": "关于",
      "nav.team": "团队",
      "nav.contact": "联系",
      "hero.eyebrow": "独立工作室 · 巴西",
      "hero.title1": "为玩家打造体验。",
      "hero.title2": "为开发者提升效率。",
      "hero.lead":
        "我们创作具有独特身份的游戏，以及加速制作的框架 — 在上架之前已在我们自己的项目中得到验证。",
      "hero.ctaProducts": "查看产品",
      "hero.ctaContact": "联系",
      "hero.scroll": "滚动",
      "products.tag": "产品",
      "products.title": "我们的工作",
      "products.desc":
        "两条相互促进的业务线：具有独特身份的游戏，以及加速制作（包括我们自己）的框架。",
      "games.title": "游戏",
      "games.desc": "原创作品。",
      "game.mel.coverAlt": "My Eternal Lily 封面",
      "game.mel.status": "现已推出",
      "game.mel.genre": "视觉小说 · 恋爱 · LGBTQIA · 2D",
      "game.mel.desc":
        "一场工伤让他失去工作，机械臂也受了损伤。Conor Spada 前往共和国广场寻找收入，在那里他发现一家濒临倒闭的维修店，以及店主 Nano — 沉默、严肃，略带神秘。",
      "game.mel.cta": "在 itch.io 游玩",
      "game.raizes.coverAlt": "Raízes 封面",
      "game.raizes.status": "现已推出",
      "game.raizes.genre": "视觉小说 · 点击解谜 · 亚马逊祖先文化",
      "game.raizes.desc":
        "一项学术任务将你带到贝伦，寻找一件文物。对话、调查与选择揭示文化记忆与权力之间的冲突。",
      "game.raizes.cta": "在 itch.io 游玩",
      "game.serra.placeholderAlt": "O Caso Serra Vermelha",
      "game.serra.placeholder": "美术即将公布",
      "game.serra.status": "开发中",
      "game.serra.genre": "视觉小说 · 悬疑 · 调查 · 点击解谜",
      "game.serra.desc":
        "Clara Carvalho 回到米纳斯吉拉斯州 Serra Vermelha 的 Itaipupé，调查妹妹的失踪 — 一名记者即将揭露矿业公司 Montesa 的秘密。五天对话、线索与抉择。",
      "game.lunaria.placeholderAlt": "Projeto Lunária",
      "game.lunaria.placeholder": "原型阶段",
      "game.lunaria.status": "原型阶段",
      "game.lunaria.genre": "生存恐怖 · PSX",
      "game.lunaria.desc": "PSX 风格的生存恐怖游戏。详情即将公布。",
      "product.note":
        "我们的框架源于真实需求 — 在上架商店之前，已在 My Eternal Lily 中得到验证。",
      "frameworks.title": "框架",
      "frameworks.desc":
        "在我们游戏中经过测试、编写文档并开放给其他游戏开发者使用的工具。",
      "fw.vn.placeholderAlt": "Unity 视觉小说框架",
      "fw.vn.placeholder": "视觉小说",
      "fw.vn.status": "开发中",
      "fw.vn.genre": "视觉小说 · Unity · C# · 名称待定",
      "fw.vn.desc":
        "简化 Unity 视觉小说开发：你专注于撰写故事与制作美术 — 框架负责其余部分。可扩展、可定制，适应每个项目的需求。",
      "fw.vn.cta": "Asset Store 即将上线",
      "about.foundation": "成立",
      "about.indieLabel": "发自内心",
      "about.tag": "关于",
      "about.title": "Devil's Club",
      "about.p1":
        "为玩家打造原创游戏。为开发者打造框架。独立工作室，双线并行 — 同一支团队。",
      "about.p2":
        "这就是 Devil's Club 的意义：为玩家带来体验，为开发者带来效率。",
      "about.val1":
        "<strong>为玩家</strong> — 每个决定都围绕体验，从首个原型到正式发布。",
      "about.val2":
        "<strong>为开发者</strong> — 游戏开发者做给游戏开发者：源于我们日常制作的工具。",
      "about.val3":
        "<strong>一脉相连</strong> — 我们在游戏中使用的，就是我们在 Asset Store 上发布的。",
      "team.tag": "团队介绍",
      "team.title": "团队",
      "team.desc":
        "精简而多学科的团队 — 制作游戏的人，也在构建框架。",
      "team.fabio.role": "创始人 · 创意总监 · 首席程序员",
      "team.fabio.bio":
        "创意方向与代码 — 从游戏原型到 Asset Store 上的框架。",
      "team.arthur.role": "程序员",
      "team.arthur.bio": "代码与系统 — 从玩法到支撑工作室项目的工具。",
      "team.camila.role": "叙事总监",
      "team.camila.bio":
        "剧本、世界观与叙事声音 — 从最初创意到定义每款游戏的叙事弧线。",
      "team.pablo.role": "艺术总监",
      "team.pablo.bio":
        "每个项目的视觉方向与品牌识别 — 从概念到统一工作室的视觉语言。",
      "team.ani.role": "首席美术 · 角色",
      "team.ani.bio":
        "角色设计与美术 — 从概念到最终立绘，每一笔都充满个性。",
      "reach.tag": "联系我们",
      "reach.title": "联系与媒体",
      "reach.desc": "选择合适渠道 — 我们会尽快回复。",
      "contact.title": "联系",
      "contact.desc": "一般咨询、合作与商业机会。",
      "contact.general.label": "综合",
      "contact.general.hint": "疑问、邀请及其他事宜。",
      "contact.biz.label": "合作与商务",
      "contact.biz.hint": "发行商、投资人与 B2B 合作。",
      "press.title": "媒体",
      "press.desc":
        "记者、内容创作者与商店策展人 — 工作室官方资料。",
      "press.item1": "标志与配色",
      "press.item2": "截图与主视觉",
      "press.item3": "工作室资料页",
      "press.ctaDownload": "下载媒体包",
      "footer.rights": "版权所有。",
    },
    ja: {
      "meta.description":
        "Devil's Club — インディーゲームスタジオ。Unity Asset Store向けのゲームとフレームワーク。独自の体験と開発者向けツール。",
      "aria.logo": "Devil's Club — ホーム",
      "aria.nav": "メイン",
      "aria.menuOpen": "メニューを開く",
      "aria.menuClose": "メニューを閉じる",
      "aria.scrollProducts": "製品へスクロール",
      "aria.lang": "言語を選択",
      "nav.products": "製品",
      "nav.about": "概要",
      "nav.team": "チーム",
      "nav.contact": "お問い合わせ",
      "hero.eyebrow": "インディースタジオ · ブラジル",
      "hero.title1": "プレイヤーへの体験。",
      "hero.title2": "開発者への効率。",
      "hero.lead":
        "独自のアイデンティティを持つゲームと、制作を加速するフレームワークを創り出す — ストアに出る前に自社プロジェクトで検証。",
      "hero.ctaProducts": "製品を見る",
      "hero.ctaContact": "お問い合わせ",
      "hero.scroll": "スクロール",
      "products.tag": "製品",
      "products.title": "私たちの仕事",
      "products.desc":
        "相互に支え合う二つのライン：独自のアイデンティティを持つゲームと、制作（私たち自身の制作も）を加速するフレームワーク。",
      "games.title": "ゲーム",
      "games.desc": "オリジナルタイトル。",
      "game.mel.coverAlt": "My Eternal Lily カバー",
      "game.mel.status": "配信中",
      "game.mel.genre": "ビジュアルノベル · ロマンス · LGBTQIA · 2D",
      "game.mel.desc":
        "職場の事故で仕事を失い、機械腕を損傷した Conor Spada は収入を求めて共和国広場へ。そこで倒産寸前の修理店と、その店主 Nano — 物静かで真面目、少しミステリアスな人物 — に出会う。",
      "game.mel.cta": "itch.io でプレイ",
      "game.raizes.coverAlt": "Raízes カバー",
      "game.raizes.status": "配信中",
      "game.raizes.genre": "ビジュアルノベル · ポイント＆クリック · アマゾンの祖先性",
      "game.raizes.desc":
        "学術ミッションがあなたをベレンへ導き、遺物を探す。対話、調査、選択が文化の記憶と権力の対立を明らかにする。",
      "game.raizes.cta": "itch.io でプレイ",
      "game.serra.placeholderAlt": "O Caso Serra Vermelha",
      "game.serra.placeholder": "アート近日公開",
      "game.serra.status": "開発中",
      "game.serra.genre": "ビジュアルノベル · サスペンス · 捜査 · ポイント＆クリック",
      "game.serra.desc":
        "Clara Carvalho はミナスジェライス州 Serra Vermelha の Itaipupé に戻り、妹の失踪を調査する — 鉱山会社 Montesa の秘密を暴こうとしていたジャーナリスト。5日間の対話、手がかり、決断。",
      "game.lunaria.placeholderAlt": "Projeto Lunária",
      "game.lunaria.placeholder": "プロトタイプ中",
      "game.lunaria.status": "プロトタイプ中",
      "game.lunaria.genre": "サバイバルホラー · PSX",
      "game.lunaria.desc": "PSX風サバイバルホラー。詳細は近日公開。",
      "product.note":
        "フレームワークは実際のニーズから生まれ — ストアに出る前に My Eternal Lily で検証されました。",
      "frameworks.title": "フレームワーク",
      "frameworks.desc":
        "自社ゲームでテストし、文書化して他のゲーム開発者がプロジェクトで使えるように公開したツール。",
      "fw.vn.placeholderAlt": "Unity 向けビジュアルノベルフレームワーク",
      "fw.vn.placeholder": "ビジュアルノベル",
      "fw.vn.status": "開発中",
      "fw.vn.genre": "ビジュアルノベル · Unity · C# · 名称未定",
      "fw.vn.desc":
        "Unity でのビジュアルノベル開発を効率化：ストーリー執筆とアート制作に集中 — フレームワークが残りを担当。プロジェクトごとに拡張・カスタマイズ可能。",
      "fw.vn.cta": "Asset Store 近日公開",
      "about.foundation": "設立",
      "about.indieLabel": "インディーの心",
      "about.tag": "概要",
      "about.title": "Devil's Club",
      "about.p1":
        "プレイヤー向けのオリジナルゲーム。開発者向けのフレームワーク。両方に取り組むインディースタジオ — 同じチームが支える。",
      "about.p2":
        "それが Devil's Club の意味：プレイヤーへの体験、開発者への効率。",
      "about.val1":
        "<strong>プレイヤーのために</strong> — 最初のプロトタイプからリリースまで、体験を念頭に置いたすべての判断。",
      "about.val2":
        "<strong>開発者のために</strong> — ゲーム開発者による、ゲーム開発者のためのツール：日々の制作から生まれた。",
      "about.val3":
        "<strong>すべてがつながる</strong> — ゲームで使うものが、Asset Store で公開するもの。",
      "team.tag": "メンバー",
      "team.title": "チーム",
      "team.desc":
        "少数精鋭の多能工チーム — ゲームを作る人々がフレームワークも構築する。",
      "team.fabio.role": "創設者 · クリエイティブディレクター · リードプログラマー",
      "team.fabio.bio":
        "クリエイティブディレクションとコード — ゲームのプロトタイプから Asset Store のフレームワークまで。",
      "team.arthur.role": "プログラマー",
      "team.arthur.bio":
        "コードとシステム — ゲームプレイからスタジオのプロジェクトを支えるツールまで。",
      "team.camila.role": "ナラティブディレクター",
      "team.camila.bio":
        "脚本、ワールドビルディング、ナラティブの声 — 最初のアイデアから各ゲームを定義する物語の弧まで。",
      "team.pablo.role": "アートディレクター",
      "team.pablo.bio":
        "各プロジェクトのビジュアルディレクションとアイデンティティ — コンセプトからスタジオを統一するグラフィック言語まで。",
      "team.ani.role": "リードアーティスト · キャラクター",
      "team.ani.bio":
        "キャラクターデザインとアート — コンセプトから最終スプライトまで、一線一線に個性を。",
      "reach.tag": "お問い合わせ",
      "reach.title": "連絡先とプレス",
      "reach.desc": "適切なチャンネルをお選びください — できるだけ早く返信します。",
      "contact.title": "お問い合わせ",
      "contact.desc": "一般的な会話、パートナーシップ、ビジネス機会について。",
      "contact.general.label": "一般",
      "contact.general.hint": "質問、招待、その他の件。",
      "contact.biz.label": "パートナーシップとビジネス",
      "contact.biz.hint": "パブリッシャー、投資家、B2B コラボレーション。",
      "press.title": "プレス",
      "press.desc":
        "ジャーナリスト、コンテンツクリエイター、ストアキュレーター — スタジオ公式素材。",
      "press.item1": "ロゴとカラーパレット",
      "press.item2": "スクリーンショットとキーアート",
      "press.item3": "スタジオファクトシート",
      "press.ctaDownload": "プレスキットをダウンロード",
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
