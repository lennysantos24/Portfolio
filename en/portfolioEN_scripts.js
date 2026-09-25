const projectsData = {
    1: {
        title: 'Educahost',
        period: '1st semester · Website · Completed',
        description: 'Gamified web platform for education aimed at refugee children',
        images: ['../assets/primeiro_semestre/Educahost_inicial.png', '../assets/primeiro_semestre/Educahost_game.png', '../assets/primeiro_semestre/Educahost_sobre.png', '../assets/primeiro_semestre/Educahost_apresentacao.jpeg'],
        skills: ['HTML', 'CSS', 'Javascript', 'Scrum', 'Figma', 'UML Diagrams'],
        fullDetails: [{
                text: 'Every human being, a victim of persecution, has the right to seek and enjoy assistance in another country.',
                style: ['bold', 'center']
            },
            {
                text: 'Education is a fundamental right and a public duty. This project aims to provide a gamified web platform for refugee children, promoting inclusion and accessible learning through playful activities.',
                style: ['bold', 'center']
            },
            '',
            '',
            'According to a survey by the National Committee for Refugees (CONARE), in 2022 around 710 thousand refugees lived in Brazil, with 46.8% of them being youth up to 24 years old.',
            'Because education is a fundamental right, Educahost offers a web platform with games, quizzes, and memory activities to make learning more engaging and inclusive.',
            '',
            '',
            'This project was developed in the first semester of the Multiplatform Software Development course at Fatec Zona Leste. We used UML diagrams for system modeling and Scrum as the agile methodology, with weekly meetings and task tracking. For implementation, we used Figma and HTML, CSS, and JavaScript.',
            'My role in the project: I was responsible for part of the documentation, research on the target audience, front-end programming, and prototyping. The project was also presented to the academic community.',
            '',
        ],
        link: 'https://github.com/emanuelmartinslima/Projeto-Educahost',
        integrantes: ['Emanuel Lima', 'Felipe da Silva Moreno', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },

    2: {
        title: 'Sagrado Sistema',
        period: '2nd semester · Website · Completed',
        description: 'Automation of management for Sagrado Neon company',
        images: ['../assets/segundo_semestre/SagradoSistema_login.png', '../assets/segundo_semestre/SagradoSistema_menu.png', '../assets/segundo_semestre/SagradoSistema_Cliente.png', '../assets/segundo_semestre/SagradoSistema_contrato.png', '../assets/segundo_semestre/SagradoSistema_Relatorio.png'],
        skills: ['HandleBars', 'Bootstrap', 'HTML', 'CSS', 'Javascript', 'Node.js', 'MySQL', 'Figma', 'UML Diagrams', 'Scrum'],
        fullDetails: ['Sagrado Neon is a company specialized in renting and selling neon signs for events.',
            'Before this project, the operational and management teams used decentralized tools such as Excel and Word for essential tasks such as report generation, contract issuance, and equipment allocation control.',
            'Sagrado System was developed as an automation solution to centralize the company’s main needs, reducing operational problems and optimizing management time.',
            '',
            'The project was carried out in the second semester of the Multiplatform Software Development course at Fatec Zona Leste. The interface was prototyped in Figma and the architecture was structured using UML diagrams. We used Scrum as the agile methodology, as well as Handlebars, Node.js, CSS, JavaScript, and MySQL.',
            'My role in the project: I was responsible for requirements engineering and documentation, conducting functional and non-functional requirements analysis, use case diagrams, and sequence diagrams. I also presented the project at the ENGETEC fair to the academic community.',
            ''
        ],
        link: 'https://github.com/emanuelmartinslima/ProjetoPI2-Sagrado-Sistema',
        integrantes: ['Emanuel Lima', 'Felipe da Silva Moreno', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },
    3: {
        title: 'EcoBalance',
        period: '3rd semester · Website · Completed',
        description: 'Carbon footprint tracking system.',
        images: ['../assets/terceiro_semestre/Ecobalance_site_inicio.png', '../assets/terceiro_semestre/Ecobalance_site_login.png', '../assets/terceiro_semestre/Ecobalance_site_alimento.png', '../assets/terceiro_semestre/Ecobalance_site_transporte.png', '../assets/terceiro_semestre/Ecobalance_site_resultados.png', '../assets/terceiro_semestre/Ecobalance_site_sugestoes.png'],
        skills: ['MongoDB', 'React.js', 'Node.js', 'HTML', 'CSS', 'Javascript', 'Figma', 'UML Diagrams', 'Scrum'],
        fullDetails: [{
                text: 'SDG 12: Responsible Consumption and Production',
                style: ['bold', 'center']
            },
            {
                text: 'SDG 13: Climate Action',
                style: ['bold', 'center']
            },
            {
                text: 'SDG 15: Life on Land',
                style: ['bold', 'center']
            },
            '',
            '',
            'Summers are getting hotter, accompanied by more fires, droughts, cyclones, and natural disasters.',
            'According to the World Meteorological Organization (WMO), the period from 2015 to 2025 was recorded as the hottest in history, directly resulting from the high concentration of carbon dioxide (CO2) in the atmosphere. Although Gen Z prioritizes sustainability, it is still a challenge to quantify and understand the real impact of daily choices. To solve this pain point, we developed EcoBalance.',
            'EcoBalance is a carbon footprint tracking system designed to raise awareness about the impact of habits. The platform allows users to record energy consumption, transportation, gas usage (water and kitchen), trips, and food choices to calculate their individual CO2 emissions. Based on this diagnosis, the system provides histories and personalized suggestions for adopting more sustainable habits, using a rewards and gamification system to encourage engagement.',
            '',
            '',
            'This project was developed in the third semester of the Multiplatform Software Development course at Fatec Zona Leste. The interface was prototyped in Figma and the architecture was structured via UML diagrams. We used Scrum as the agile methodology, with meetings and presentations to stakeholders every 15 days. We also used React.js, Node.js, MongoDB, Render, and Vercel.',
            'My role in the project: I was responsible for research and mapping of CO2 emission factors, covering global averages and individual indices for transportation, food, and gas consumption. I also actively participated in backlog management, alignment meetings, and biweekly stakeholder presentations, and contributed to prototypes and system documentation.',
            ''
        ],
        link: 'https://github.com/littlerichard01/EcoBalance',
        integrantes: ['Emanuel Lima', 'Felipe da Silva Moreno', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },

    4: {
        title: 'Questions and Dungeons',
        period: '4th semester · Website · Completed',
        description: 'Gamified education platform inspired by RPGs.',
        images: ['../assets/quarto_semestre/Q&M_menu.png', '../assets/quarto_semestre/Q&M_login.png', '../assets/quarto_semestre/Q&M_sala.png', '../assets/quarto_semestre/Q&M_sala3.png', '../assets/quarto_semestre/Q&M_multipla.png', '../assets/quarto_semestre/Q&M_monstro.png', '../assets/quarto_semestre/Q&M_Engetec.jpg'],
        skills: ['Accessibility', 'Figma', 'Product Discovery', 'Personas', 'React.js', 'MongoDB', 'Scrum', 'Node.js', 'Vercel'],
        fullDetails: [{
            text: 'In such a fast-paced daily life, education doesn’t need to be a burden.',
            style: ['bold', 'center']
        },
        '',
        'During childhood, play is essential for learning. However, every school year education becomes more rigid, and in higher education, with double or triple shifts, gamification is almost nonexistent and retention drops.',
        '',
        '',
        'Larissa is 19 years old, studies Foreign Trade, and is familiar with technology (spending more than 6 hours a day on screens). She works and studies, and although she is communicative, she struggles to interact with classmates who are equally tired of the routine and see each other as rivals because of professional pressure. She enjoys role-playing games (RPGs) and is open to new educational tools.',
        'Felipe is a 42-year-old technology teacher with high familiarity with technology due to his profession (more than 6 hours a day). He usually uses traditional classroom tools like slides and looks for methods to make classes more dynamic and interactive, but his students seem constantly discouraged, competitive, and with different levels of dedication, especially in introductory classes. He is also open to new technologies to increase engagement.',
        '',
        '',
        'After interviewing 47 students and teachers, we identified two main personas for the application: Larissa and Felipe. Both highlighted the difficulty of engagement and socialization in higher education, and that is how Questions and Dungeons was born.',
        'Questions and Dungeons is an application inspired by tabletop RPG elements in an educational context. Its main goal is to provide students and teachers with a tool to make classes more dynamic and engaging. The platform allows teachers to create challenges (multiple-choice questions, group and individual tasks) and build a narrative for the class. In the classroom, students access the adventure and participate actively in the pedagogical experience.',
        '',
        '',
        'This project was developed in the fourth semester (2nd semester of 2025) of the Multiplatform Software Development course at Fatec Zona Leste. The interface was prototyped in Figma after a Product Discovery process that included research with the target audience, persona creation, and stakeholder validation meetings. We used Scrum as the agile methodology and React.js, Node.js, MongoDB, and Vercel for development and deployment. We also ensured accessibility by applying technical guidelines validated via the WAVE extension, axe-core, and the VLibras tool.',
        'My role in the project: I was responsible for the Product Discovery process, leading persona development and validation presentations with stakeholders. I also led the creation of functional documentation and the project’s adaptation to web accessibility standards.',
        ''
    ],
        link: 'https://github.com/Lucas-Gatto/Questoes-e-Masmorras',
        integrantes: ['Felipe da Silva Moreno', 'Lucas Gatto', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },

    5: {
        title: 'EcoBalance Mobile',
        period: '5th semester · Mobile · Completed',
        description: 'Mobile version of the carbon footprint tracking system.',
        images: ['../assets/quinto_semestre/EcoBalance_Mobile_Menu.png', '../assets/fatec-zona-leste.png'],
        skills: ['React Native', 'Figma', 'Android Studio', 'MongoDB', 'Swagger UI', 'Sonar'],
        fullDetails: [{
            text: 'The carbon footprint tracking system now in the palm of your hand.',
            style: ['bold', 'center']
        },
            '',
            '',
            'For the fifth semester project (1st semester of 2026), we expanded EcoBalance into a mobile app format, offering a more accessible, practical, and continuous experience for users.',
            'The mobile version improved the gamification system to increase user retention and included a more robust technical architecture.',
            '',
            '',
            'The app was prototyped in Figma and developed using Scrum as the agile methodology. For implementation, we used React Native, Android Studio, Node.js, and MongoDB. This semester, we focused especially on security and code quality, integrating tools like bcrypt, dotenv, Swagger UI, and SonarQube.',
            'My role in the project: I was responsible for UI/UX prototyping and front-end development of the mobile app. I also participated in stakeholder validation meetings and contributed to the technical and functional documentation of the system.',
            ''
        ],
        link: 'https://github.com/littlerichard01/EcoBalance-mobile',
        integrantes: ['Felipe da Silva Moreno', 'Lucas Gatto', 'Milene Santos', 'Ricardo Campos', 'Viviane Silva']
    },

    6: {
        title: 'Final Integrative Project',
        period: '6th semester · Multiplatform · In development',
        description: 'Intelligent home automation platform based on microservices.',
        images: ['../assets/fatec-zona-leste.png', '../assets/liceu_de_artes_e_ofcios_cover.jpg'],
        skills: ['Docker', 'IoT', 'React Native', 'Python'],
        fullDetails: 'Integrative project that combines hardware, mobile app, and cloud server into a smart home automation solution.'
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
        modalImage.alt = `Image of the project ${project.title}`;
        modalImageCounter.textContent = `${String(currentImage + 1).padStart(2, '0')} / ${String(project.images.length).padStart(2, '0')}`;
    };

    const selectImage = imageIndex => {
        const project = projectsData[currentSemester];
        currentImage = (imageIndex + project.images.length) % project.images.length;
        renderModalImage();
    };

    const renderModalLink = (element, url) => {
        element.textContent = url || 'Not informed';

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

        modalMembersList.replaceChildren(...(validMembers.length ? validMembers : ['Not informed']).map(member => {
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
        image.alt = `Cover image of the project ${project.title}`;

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
