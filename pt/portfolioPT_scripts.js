const projectsData = {
    1: {
        title: 'Educahost',
        period: '1º semestre · Site · Finalizado',
        description: 'Plataforma Web Gamificada de Educação Voltada a Crianças Refugiadas',
        images: ['../assets/primeiro_semestre/Educahost_inicial.png', '../assets/primeiro_semestre/Educahost_game.png', '../assets/primeiro_semestre/Educahost_sobre.png', '../assets/primeiro_semestre/Educahost_apresentacao.jpeg'],
        skills: ['HTML', 'CSS', 'Javascript', 'Scrum', 'Figma', 'Diagramas UML'],
        fullDetails: [{
                text: "'Todo ser humano, vitima de perseguição, tem o direito de procurar e gozar de auxilio em outro país' ",
                style: ['bold', 'center']
            },
            {
                text: 'Art. 205. A educação, direito de todos e dever do Estado e da família, será promovida e incentivada com a colaboração da sociedade, visando ao pleno desenvolvimento da pessoa, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.',
                style: ['bold', 'center']
            },
            '',
            '',
            'Segundo levantamento feito pelo Comitê Nacional para os Refugiados (CONARE), em 2022, cerca de 710 mil refugiados viviam em solo brasileiro, sendo 46,8% deles jovens de até 24 anos.',
            'Sendo a educação um direito fundamental, o projeto Educahost visa oferecer uma plataforma web gamificada de educação voltada a crianças refugiadas, com o objetivo de promover a inclusão social e o aprendizado de forma lúdica e interativa. A plataforma abrange conhecimentos de cultura, língua e disciplinas básicas, utilizando elementos de gamificação, como quizzes e jogos de memória, para engajar os usuários e tornar o processo de aprendizagem mais atrativo.',
            '',
            '',
            'Este projeto foi realizado no primeiro semestre do curso de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste, realizado no primeiro semestre de 2024. Para a modelagem e compreensão do sistema, foram utilizados diagramas UML. Adotamos o Scrum como metodologia ágil, com reuniões semanais para acompanhamento do progresso e definição de tarefas. No desenvolvimento, utilizamos o Figma como ferramenta de prototipação e as tecnologias HTML, CSS e JavaScript para a construção da plataforma web.',
            'Meu Papel no Projeto: Fiquei responsável por parte da documentação e pesquisa de público alvo do sistema, além de parte da programação e prototipação do Fron-End. Além disso, o projeto foi apresentado para a comunidade acadêmica.',
            '',
        ],
        link: 'https://github.com/emanuelmartinslima/Projeto-Educahost',
        integrantes: ['Emanuel Lima', 'Felipe da Silva Moreno', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },

    2: {
        title: 'Sagrado Sistema',
        period: '2º semestre · Site · Finalizado',
        description: 'Automação do Gerenciamento da Empresa Sagrado Neon',
        images: ['../assets/segundo_semestre/SagradoSistema_login.png', '../assets/segundo_semestre/SagradoSistema_menu.png', '../assets/segundo_semestre/SagradoSistema_Cliente.png', '../assets/segundo_semestre/SagradoSistema_contrato.png', '../assets/segundo_semestre/SagradoSistema_Relatorio.png'],
        skills: ['HandleBars', 'Bootstrap', 'HTML', 'CSS', 'Javascript', 'Node.js', 'MySQL', 'Figma', 'Diagramas UML', 'Scrum'],
        fullDetails: ['O Sagrado Neon é uma empresa especializada na locação e venda de letreiros em neon para eventos.',
            'Antes deste projeto, a equipe operacional e a gestão utilizavam ferramentas descentralizadas (como Excel e Word) para realizar tarefas essenciais, como geração de relatórios, emissão de contratos e controle de alocação dos equipamentos.',
            'O Sagrado Sistema foi desenvolvido como uma solução de automação para centralizar as principais necessidades do cliente, reduzindo falhas operacionais e otimizando o tempo de gestão.',
            '',
            'O projeto foi realizado no segundo semestre do curso de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste, realizado no segundo semestre de 2024. A interface foi prototipada no Figma e a arquitetura estruturada via diagramas UML. Adotamos o Scrum como metodologia ágil, além de Handlebars, Node.js, CSS, JavaScript e MySQL para o desenvolvimento.',
            'Meu Papel no Projeto: Fiquei responsável pela Engenharia de Requisitos e Documentação, realizando o levantamento de requisitos funcionais e não funcionais, elaboração de diagramas de casos de uso e diagramas de sequência. Além disso, o projeto foi apresentado na feira ENGETEC para a comunidade acadêmica.',

            ''
        ],
        link: 'https://github.com/emanuelmartinslima/ProjetoPI2-Sagrado-Sistema',
        integrantes: ['Emanuel Lima', 'Felipe da Silva Moreno', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']

    },
    3: {
        title: 'EcoBalance',
        period: '3º semestre · Site · Finalizado',
        description: 'Sistema de Rastreamento de Pegada de Carbono.',
        images: ['../assets/terceiro_semestre/Ecobalance_site_inicio.png', '../assets/terceiro_semestre/Ecobalance_site_login.png', '../assets/terceiro_semestre/Ecobalance_site_alimento.png', '../assets/terceiro_semestre/Ecobalance_site_transporte.png', '../assets/terceiro_semestre/Ecobalance_site_resultados.png', '../assets/terceiro_semestre/Ecobalance_site_sugestoes.png',],
        skills: ['MongoDB', 'React.js', 'Node.js', 'HTML', 'CSS', 'Javascript', 'Figma', 'Diagramas UML', 'Scrum'],
        fullDetails: [{
                text: 'ODS 12: Consumo e Produção responsáveis',
                style: ['bold', 'center']
            },
            {
                text: 'ODS 13: Ação Contra a Mudança Global do Clima',
                style: ['bold', 'center']
            },
            {
                text: 'ODS 15: Vida Terrestre',
                style: ['bold', 'center']
            },
            '',
            '',
            'Os verões estão cada vez mais quentes, acompanhados pelo aumento de incêndios, secas, ciclones e desastres naturais.',
            'Segundo a Organização Meteorológica Mundial (OMM), o período de 2015 a 2025 foi registrado como o mais quente da história, resultado direto da alta concentração de dióxido de carbono (CO_2) na atmosfera.Apesar de a Geração Z priorizar a sustentabilidade, ainda é um desafio quantificar e compreender o impacto real das escolhas diárias. Para solucionar essa dor, desenvolvemos o EcoBalance.',
            'O EcoBalance é um sistema de rastreamento de pegada de carbono projetado para conscientizar os usuários sobre o impacto de seus hábitos. A plataforma permite registrar dados de consumo de energia, transporte, gás (encanado e de cozinha), viagens e alimentação para calcular a emissão individual de CO_2. Com base nesse diagnóstico, o sistema fornece historiais e sugestões personalizadas para a adoção de hábitos mais sustentáveis, utilizando um sistema de conquistas e gamificação para incentivar a retenção e o engajamento contínuo dos usuários.',
            '',
            '',
            'Esse projeto foi realizado no teceiro semestre do curso de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste, realizado no primeiro semestre de 2025. A interface foi prototipada no Figma e a arquitetura estruturada via diagramas UML. Adotamos o Scrum como metodologia ágil, com reuniões e apresentações com stakeholders (turma e professor) a cada 15 dias. Também foi utilizado o React.js, Node.js, MongoDB, Render e Vercel para o desenvolvimento e deploy.',
            'Meu Papel no Projeto: Fiquei responsável pela pesquisa e mapeamento dos fatores de emissão de $CO_2$, cobrindo desde as médias globais até os índices individuais de transporte, alimentação e consumo de gás. Participei ativamente da gestão e organização do backlog, das reuniões de alinhamento e das apresentações quinzenais para os stakeholders, além de atuar diretamente na elaboração dos protótipos e da documentação do sistema.',
   
            ''
        ],
        link: 'https://github.com/littlerichard01/EcoBalance',
        integrantes: ['Emanuel Lima', 'Felipe da Silva Moreno', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },

    4: {
        title: 'Questões e Masmorras',
        period: '4º semestre · Site · Finalizado',
        description: 'Plataforma gamificada de educação inspirada em RPGs.',
        images: ['../assets/quarto_semestre/Q&M_menu.png', '../assets/quarto_semestre/Q&M_login.png', '../assets/quarto_semestre/Q&M_sala.png', '../assets/quarto_semestre/Q&M_sala3.png', '../assets/quarto_semestre/Q&M_multipla.png', '../assets/quarto_semestre/Q&M_monstro.png', '../assets/quarto_semestre/Q&M_Engetec.jpg',],
        skills: ['Acessibilidade', 'Figma', 'Product Discovery', 'Personas', 'React.js', 'MongoDB', 'Scrum', 'Node.js', 'Vercel'],
        fullDetails: [{
            text: 'Em um cotidiano tão frenético, a educação não precisa ser mais um peso.',
            style: ['bold', 'center']
        },
        '',
        'Durante a infância, o lúdico é mostrado como elemento essencial para o aprendizado. Entretanto, a cada ano estudantil a educação se torna mais engessada e no ensino superior, com jornadas duplas e às vezes triplas, a gamificação é quase nula e a retenção diminui.',
        '',
        '',
        'Larissa tem 19 anos, cursa Comércio Exterior e é bem familiarizada com tecnologia (passa mais de 6 horas por dia em telas). Trabalha e estuda e, apesar da sua personalidade comunicativa, possui dificuldade em interagir com colegas de turma que estão igualmente cansados da rotina monótona e que se veem como rivais por conta da pressão profissional. É adepta de jogos de interpretação (RPG) e está aberta a novas ferramentas na educação.',
        'Felipe é um professor de tecnologia de 42 anos e também possui alta familiaridade com tecnologia por causa da sua profissão (mais de 6 horas por dia). Costuma usar ferramentas tradicionais como slides em suas aulas e busca métodos para torná-las mais dinâmicas e interativas, porém seus alunos parecem constantemente desanimados, competitivos e com diferentes níveis de dedicação, principalmente nas turmas iniciais. Também se mostra aberto à utilização de novas tecnologias para aumentar o engajamento.',
        '',
        '',        
        'Após realizar uma pesquisa com 47 estudantes e professores da instituição, identificamos as duas personas da aplicação: Larissa e Felipe. Ambos ressaltaram a dificuldade de engajamento e socialização no ensino superior e, pensando nisso, surgiu o Questões e Masmorras.',
        'O Questões e Masmorras é uma aplicação inspirada em elementos de RPG de mesa voltada ao contexto educacional. Seu principal objetivo é proporcionar aos alunos e professores uma ferramenta para tornar as aulas mais dinâmicas e envolventes. A plataforma permite que o professor cadastre desafios (questões de múltipla escolha, desafios em grupo e individuais) e crie uma narrativa dinâmica para ser vivida pela turma. Em sala de aula, os alunos acessam a aventura e participam ativamente da experiência pedagógica.',
        '',
        '',
            'Este projeto foi desenvolvido no quarto semestre (2º semestre de 2025) do curso de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste. A interface foi prototipada no Figma após um processo de Product Discovery que incluiu pesquisa com o público-alvo, construção de personas e reuniões de validação com stakeholders. Adotamos o Scrum como metodologia ágil e utilizamos React.js, Node.js, MongoDB e Vercel para o desenvolvimento e deploy. Além disso, garantimos a acessibilidade da aplicação aplicando diretrizes técnicas validadas via extensão WAVE, biblioteca axe-core e integração com o VLibras.',
            'Meu papel no Projeto: Fiquei responsável pela etapa de Product Discovery, conduzindo a criação das personas e a apresentação de validação com os stakeholders. Também liderei a elaboração da documentação funcional e a adequação do projeto às normas de acessibilidade web.',
     
            ''
    ],
        link: 'https://github.com/Lucas-Gatto/Questoes-e-Masmorras',
        integrantes: [ 'Felipe da Silva Moreno', 'Lucas Gatto', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },

    5: {
        title: 'EcoBalance Mobile',
        period: '5º semestre · Mobile · Finalizado',
        description: 'Versão Mobile do sistema de rastreamento de pegada de carbono.',
        images: ['../assets/quinto_semestre/EcoBalance_Mobile_Menu.png', '../assets/quinto_semestre/EcoBalance_Mobile_Dieta.png', '../assets/quinto_semestre/EcoBalance_Mobile_Gas.png', '../assets/quinto_semestre/EcoBalance_Mobile_Conquista.png', '../assets/quinto_semestre/EcoBalance_Mobile_Resultado.png', '../assets/quinto_semestre/EcoBalance_Mobile_Graficos.png', '../assets/quinto_semestre/EcoBalance_Mobile_ConquistaGraficos.jpg',],
        skills: ['React Native', 'Figma', 'Andoid Studio', 'MongoDB', 'Swagger UI', 'Sonar'],
        fullDetails: [{
            text: 'O sistema de rastreamento de pegada de carbono agora na palma da sua mão.',
            style: ['bold', 'center']
        },
            '',
            '',
            "Para o projeto do quinto semestre (1º semestre de 2026) do curso de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste, expandimos as capacidades do EcoBalance para o formato de aplicativo mobile, oferecendo uma experiência mais acessível, prática e contínua para os usuários.",
            'A versão mobile aprimorou o sistema de gamificação para incentivar a retenção dos usuários, além de contar com uma arquitetura técnica mais robusta.',
            '',
            '',
            'O aplicativo foi prototipado no Figma e desenvolvido utilizando Scrum como metodologia ágil. No desenvolvimento, utilizamos React Native, Android Studio, Node.js e MongoDB. Neste semestre, aplicamos um foco especial em segurança e qualidade de código, integrando ferramentas como bcrypt, dotenv, Swagger UI e SonarQube.',
            'Meu papel no projeto: Fiquei responsável pela prototipação de UI/UX e desenvolvimento front-end da aplicação móvel. Além disso, participei ativamente das reuniões de validação com stakeholders e contribuí para a construção das documentações técnicas e funcionais do sistema.',
       
            ''
        ],
        link: 'https://github.com/littlerichard01/EcoBalance-mobile',
        integrantes: ['Felipe da Silva Moreno', 'Lucas Gatto', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']

    },

    6: {
        title: 'BlueWatch',
        period: '6º semestre · Multiplataforma · Em desenvolvimento',
        description: 'Plataforma de monitoramento de aquarios.',
        images: ['../assets/sexto_semestre/BlueWatch.png'],
        skills: ['Kotlin', 'IoT', 'Java', 'Figma'],
        fullDetails: ['~ EM PROCESSO ~',
            '',
            '',
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-project-carousel]');

    if (!carousel) {
        return;
    }

    const tabs = carousel.querySelectorAll('.semester-tab');
    const image = carousel.querySelector('#project-image');
    const projectVisual = carousel.querySelector('.project-visual');
    const semester = carousel.querySelector('#project-semester');
    const period = carousel.querySelector('#project-period');
    const title = carousel.querySelector('#project-title');
    const description = carousel.querySelector('#project-description');
    const skills = carousel.querySelector('#project-skills');
    const counter = carousel.querySelector('#project-counter');
    const previous = carousel.querySelector('#project-previous');
    const next = carousel.querySelector('#project-next');
    const more = carousel.querySelector('#project-more');
    const modal = document.querySelector('#project-modal');
    const modalPeriod = document.querySelector('#modal-period');
    const modalTitle = document.querySelector('#modal-title');
    const modalBody = document.querySelector('#modal-body');
    const modalSkills = document.querySelector('#modal-skills');
    const modalProjectLink = document.querySelector('#modal-project-link');
    const modalMembersList = document.querySelector('#modal-members-list');
    const modalClose = document.querySelector('#modal-close');
    const modalImage = document.querySelector('#modal-image');
    const modalImagePrevious = document.querySelector('#modal-image-previous');
    const modalImageNext = document.querySelector('#modal-image-next');
    const modalImageCounter = document.querySelector('#modal-image-counter');
    let currentSemester = 1;
    let currentImage = 0;

    const renderModalImage = () => {
        const project = projectsData[currentSemester];
        modalImage.src = project.images[currentImage];
        modalImage.alt = `Imagem do projeto ${project.title}`;
        modalImageCounter.textContent = `${String(currentImage + 1).padStart(2, '0')} / ${String(project.images.length).padStart(2, '0')}`;
    };

    const selectImage = imageIndex => {
        const project = projectsData[currentSemester];
        currentImage = (imageIndex + project.images.length) % project.images.length;
        renderModalImage();
    };

    const renderModalLink = (element, url) => {
        element.textContent = url || 'Não informado';

        if (url) {
            element.href = url;
            element.removeAttribute('aria-disabled');
        } else {
            element.removeAttribute('href');
            element.setAttribute('aria-disabled', 'true');
        }
    };

    const renderMembers = members => {
        const memberList = Array.isArray(members) ? members : [members];
        const validMembers = memberList.filter(member => member && member.trim());

        modalMembersList.replaceChildren(...(validMembers.length ? validMembers : ['Não informado']).map(member => {
            const line = document.createElement('span');
            line.className = 'modal-member';
            line.textContent = member;
            return line;
        }));
    };

    const selectSemester = semesterNumber => {
        const project = projectsData[semesterNumber];

        if (!project) {
            return;
        }

        currentSemester = semesterNumber;
        currentImage = 0;
        image.src = project.images[0];
        image.alt = `Imagem de capa do projeto ${project.title}`;

        const shouldCompactImage = semesterNumber === 5;
        const isWideSemester = semesterNumber === 6;

        image.classList.toggle('project-image--compact', shouldCompactImage);
        projectVisual?.classList.toggle('project-visual--compact', shouldCompactImage);
        carousel?.classList.toggle('project-showcase--wide', isWideSemester);

        const modalGallery = document.querySelector('.modal-gallery');
        const modalImageElement = document.querySelector('#modal-image');
        modalGallery?.classList.toggle('modal-gallery--compact', shouldCompactImage);
        modalImageElement?.classList.toggle('modal-image--compact', shouldCompactImage);

        if (semester) {
            semester.textContent = `${String(semesterNumber).padStart(2, '0')} / 06`;
        }
        period.textContent = project.period;
        title.textContent = project.title;
        description.textContent = project.description;
        counter.textContent = `${String(semesterNumber).padStart(2, '0')} / 06`;
        skills.replaceChildren(...project.skills.map(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            return tag;
        }));

        tabs.forEach(tab => {
            const isActive = Number(tab.dataset.semester) === semesterNumber - 1;
            tab.classList.toggle('is-active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
        });

    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            selectSemester(Number(tab.dataset.semester) + 1);
        });
    });

    previous.addEventListener('click', () => {
        selectSemester(currentSemester === 1 ? 6 : currentSemester - 1);
    });

    next.addEventListener('click', () => {
        selectSemester(currentSemester === 6 ? 1 : currentSemester + 1);
    });

    modalImagePrevious.addEventListener('click', () => selectImage(currentImage - 1));
    modalImageNext.addEventListener('click', () => selectImage(currentImage + 1));

    more.addEventListener('click', () => {
        const project = projectsData[currentSemester];
        currentImage = 0;
        renderModalImage();
        modalPeriod.textContent = project.period;
        modalTitle.textContent = project.title;
        modalBody.replaceChildren(...[].concat(project.fullDetails).map(detail => {
            const detailText = typeof detail === 'string' ? detail : detail.text;

            if (detailText.trim() === '') {
                const breakLine = document.createElement('div');
                breakLine.className = 'modal-line-break';
                breakLine.setAttribute('aria-hidden', 'true');
                return breakLine;
            }

            const paragraph = document.createElement('p');
            paragraph.textContent = detailText;

            if (typeof detail === 'object') {
                const styles = Array.isArray(detail.style) ?
                    detail.style :
                    String(detail.style || '').split(' ');

                paragraph.classList.toggle('modal-detail-bold', styles.includes('bold'));
                paragraph.classList.toggle('modal-detail-centered', styles.includes('center'));
            }

            return paragraph;
        }));
        modalSkills.replaceChildren(...project.skills.map(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            return tag;
        }));
        renderModalLink(modalProjectLink, project.link);
        renderMembers(project.integrantes);
        modal.showModal();
    });

    modalClose.addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.close();
        }
    });

    selectSemester(1);
});