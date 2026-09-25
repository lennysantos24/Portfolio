const routes = {
  pt: './pt/portfolioPT.html',
  en: './en/portfolioEN.html'
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
});