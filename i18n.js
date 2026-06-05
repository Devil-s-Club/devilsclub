window.I18N = (function () {
  const STORAGE_KEY = "devilsclub-lang";
  const DEFAULT_LOCALE = "pt-BR";
  const SUPPORTED = ["pt-BR", "en", "es", "zh", "ja"];

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
      "hero.title1": "Jogos com",
      "hero.title2": "alma e dentes",
      "hero.lead":
        "Desenvolvemos jogos originais e frameworks para outras equipes — ferramentas vendidas em lojas como Unity Asset Store, itch.io e parceiros do ecossistema.",
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
      "game.lunaria.desc": "Detalhes em breve.",
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
      "hero.title1": "Games with",
      "hero.title2": "soul and bite",
      "hero.lead":
        "We build original games and frameworks for other teams — tools sold on stores like the Unity Asset Store, itch.io, and ecosystem partners.",
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
      "game.lunaria.desc": "Details coming soon.",
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
      "hero.title1": "Juegos con",
      "hero.title2": "alma y garra",
      "hero.lead":
        "Desarrollamos juegos originales y frameworks para otros equipos — herramientas vendidas en tiendas como Unity Asset Store, itch.io y socios del ecosistema.",
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
      "game.lunaria.desc": "Detalles próximamente.",
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
      "hero.title1": "有灵魂、",
      "hero.title2": "有锋芒的游戏",
      "hero.lead":
        "我们开发原创游戏与框架，供其他团队使用 — 工具上架 Unity Asset Store、itch.io 及生态系统合作伙伴。",
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
      "game.lunaria.desc": "详情即将公布。",
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
      "hero.title1": "魂と",
      "hero.title2": "歯ごたえのあるゲーム",
      "hero.lead":
        "オリジナルゲームとフレームワークを開発 — Unity Asset Store、itch.io などのストアで提供しています。",
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
      "game.lunaria.desc": "詳細は近日公開。",
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
  };

  function normalizeLocale(raw) {
    if (!raw) return DEFAULT_LOCALE;
    const lower = raw.toLowerCase();
    if (lower.startsWith("pt")) return "pt-BR";
    if (lower.startsWith("en")) return "en";
    if (lower.startsWith("es")) return "es";
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
    document.documentElement.lang = resolved === "zh" ? "zh-Hans" : resolved;

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

    document.querySelectorAll(".lang-select").forEach((select) => {
      select.value = resolved;
    });

    localStorage.setItem(STORAGE_KEY, resolved);
    return resolved;
  }

  function init() {
    const locale = detectLocale();
    applyLocale(locale);

    document.querySelectorAll(".lang-select").forEach((select) => {
      select.addEventListener("change", (e) => {
        applyLocale(e.target.value);
      });
    });
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
