const routes = {
  pt: './pt/portfolioPT.html'
};

const languageStorageKey = 'userLanguage';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-lang]');
  const status = document.querySelector('#languageStatus');

  const showStatus = message => {
    if (status) {
      status.textContent = message;
    }
  };

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const lang = event.currentTarget.dataset.lang;
      const route = routes[lang];

      if (!route) {
        showStatus('A versão em inglês ainda não está disponível.');
        return;
      }

      localStorage.setItem(languageStorageKey, lang);
      window.location.assign(route);
    });
  });

  const carousel = document.querySelector('[data-project-carousel]');

  if (!carousel) {
    return;
  }

  const projects = [
    {
      semester: '1º semestre',
      title: 'Educahost',
      period: '1º semestre · Site',
      images: ['../assets/liceu_de_artes_e_ofcios_cover.jpg', '../assets/fatec-zona-leste.png'],
      description: 'Investigação de um problema de usuário e organização das primeiras hipóteses para uma solução digital.',
      details: 'O projeto apresenta a etapa inicial de descoberta: entendimento do contexto, identificação de necessidades e definição de uma oportunidade de produto.',
      skills: ['Pesquisa', 'UX/UI', 'Produto']
    },
    {
      semester: '2º semestre',
      title: 'Educahost - protótipo navegável',
      period: '2º semestre · Projeto acadêmico',
      images: ['../assets/fatec-zona-leste.png', '../assets/liceu_de_artes_e_ofcios_cover.jpg'],
      description: 'Construção de uma interface navegável para testar fluxos, conteúdo e decisões de experiência.',
      details: 'A solução evolui das hipóteses para um protótipo navegável, permitindo validar a organização das telas e o caminho principal do usuário.',
      skills: ['Figma', 'Prototipação', 'Testes']
    },
    {
      semester: '3º semestre',
      title: 'Aplicação com banco de dados',
      period: '3º semestre · Projeto acadêmico',
      images: ['../assets/fatec-zona-leste.png', '../assets/liceu_de_artes_e_ofcios_cover.jpg'],
      description: 'Desenvolvimento de uma aplicação com persistência de dados e foco na organização das informações.',
      details: 'O projeto conecta a interface ao banco de dados, trabalhando modelagem, operações de cadastro e a consistência das informações.',
      skills: ['Python', 'SQL', 'Banco de dados']
    },
    {
      semester: '4º semestre',
      title: 'Automação e integração de dados',
      period: '4º semestre · Projeto acadêmico',
      images: ['../assets/liceu_de_artes_e_ofcios_cover.jpg', '../assets/fatec-zona-leste.png'],
      description: 'Exploração de sensores e integração de dados para acompanhar processos de forma mais eficiente.',
      details: 'A proposta combina automação e visualização de dados para reduzir tarefas manuais e apoiar o acompanhamento de um processo.',
      skills: ['IoT', 'Arduino', 'APIs']
    },
    {
      semester: '5º semestre',
      title: 'Produto orientado por dados',
      period: '5º semestre · Projeto acadêmico',
      images: ['../assets/fatec-zona-leste.png', '../assets/liceu_de_artes_e_ofcios_cover.jpg'],
      description: 'Análise de informações para apoiar decisões de produto e priorizar melhorias na experiência.',
      details: 'O projeto trabalha indicadores, leitura de dados e priorização de oportunidades para orientar a evolução de um produto digital.',
      skills: ['Análise', 'Excel', 'Métricas']
    },
    {
      semester: '6º semestre',
      title: 'Projeto integrador de software',
      period: '6º semestre · Projeto acadêmico',
      images: ['../assets/liceu_de_artes_e_ofcios_cover.jpg', '../assets/fatec-zona-leste.png'],
      description: 'Integração de produto, tecnologia e gestão em uma solução construída ao longo do ciclo de desenvolvimento.',
      details: 'O projeto integrador reúne descoberta, planejamento, desenvolvimento e apresentação de uma solução completa para um desafio real.',
      skills: ['Gestão ágil', 'Cloud', 'Engenharia de software']
    }
  ];

  const tabs = carousel.querySelectorAll('.semester-tab');
  const image = carousel.querySelector('#project-image');
  const imageCounter = carousel.querySelector('#project-image-counter');
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
  const modalClose = document.querySelector('#modal-close');
  let selectedProject = 0;
  let selectedImage = 0;
  let imageTimer;
  let imageSwapTimer;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const stopImageRotation = () => {
    window.clearInterval(imageTimer);
  };

  const startImageRotation = () => {
    stopImageRotation();

    if (reducedMotion.matches) {
      return;
    }

    imageTimer = window.setInterval(() => {
      const project = projects[selectedProject];
      selectedImage = (selectedImage + 1) % project.images.length;
      renderImage();
    }, 4500);
  };

  const renderImage = () => {
    const project = projects[selectedProject];
    const formattedImageIndex = String(selectedImage + 1).padStart(2, '0');

    window.clearTimeout(imageSwapTimer);
    image.classList.add('is-changing');
    imageSwapTimer = window.setTimeout(() => {
      image.src = project.images[selectedImage];
      image.classList.remove('is-changing');
    }, 180);
    imageCounter.textContent = `${formattedImageIndex} / ${String(project.images.length).padStart(2, '0')}`;
  };

  const renderProject = index => {
    const project = projects[index];
    const formattedIndex = String(index + 1).padStart(2, '0');

    selectedProject = index;
    selectedImage = 0;
    image.src = project.images[selectedImage];
    image.alt = `Imagem ilustrativa do projeto do ${project.semester}`;
    imageCounter.textContent = `01 / ${String(project.images.length).padStart(2, '0')}`;
    semester.textContent = `${formattedIndex} / 06`;
    period.textContent = project.period;
    title.textContent = project.title;
    description.textContent = project.description;
    counter.textContent = `${formattedIndex} / 06`;
    skills.replaceChildren(...project.skills.map(skill => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = skill;
      return tag;
    }));

    tabs.forEach((tab, tabIndex) => {
      const isSelected = tabIndex === index;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
    });

    startImageRotation();
  };

  const openProjectModal = () => {
    const project = projects[selectedProject];
    modalPeriod.textContent = project.period;
    modalTitle.textContent = project.title;
    modalBody.textContent = project.details;

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => renderProject(index));
  });

  previous.addEventListener('click', () => {
    renderProject((selectedProject - 1 + projects.length) % projects.length);
  });

  next.addEventListener('click', () => {
    renderProject((selectedProject + 1) % projects.length);
  });

  more.addEventListener('click', openProjectModal);
  modalClose.addEventListener('click', () => modal.close());
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.close();
    }
  });

  renderProject(0);

  carousel.addEventListener('mouseenter', stopImageRotation);
  carousel.addEventListener('mouseleave', startImageRotation);
  carousel.addEventListener('focusin', stopImageRotation);
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) {
      startImageRotation();
    }
  });
});