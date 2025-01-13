document.addEventListener('DOMContentLoaded', () => {
  // Referência aos botões
  const btnAwards = document.getElementById('btn-awards');
  const btnProjects = document.getElementById('btn-projects');
  const btnPages = document.getElementById('btn-pages');

  // Referência às seções de navegação
  const awardsSection = document.getElementById('awards-section');
  const projectsSection = document.getElementById('projects-section');
  const pagesSection = document.getElementById('pages-section');

  // Função para esconder apenas as seções de navegação
  function showSection(sectionToShow) {
      // Esconde apenas as seções de navegação
      awardsSection.classList.add('hidden');
      projectsSection.classList.add('hidden');
      pagesSection.classList.add('hidden');

      // Exibe a seção clicada
      sectionToShow.classList.remove('hidden');
  }

  // Adiciona eventos de clique aos botões
  btnAwards.addEventListener('click', () => {
      showSection(awardsSection);
  });

  btnProjects.addEventListener('click', () => {
      showSection(projectsSection);
  });

  btnPages.addEventListener('click', () => {
      showSection(pagesSection);
  });

  // Exibe a seção de projetos por padrão
  showSection(pagesSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content');
  
    function showSection(sectionToShow) {
      sections.forEach((section) => section.classList.add('hidden'));
      sectionToShow.classList.remove('hidden');
    }
  
    function setActiveButton(activeButton) {
      buttons.forEach((button) => button.classList.remove('active'));
      activeButton.classList.add('active');
    }
  
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const targetSection = document.querySelector(`#${event.target.id.replace('btn-', '')}-section`);
        showSection(targetSection);
        setActiveButton(event.target);
      });
    });
  
    // Exibe a seção de projetos por padrão
    const defaultButton = document.getElementById('btn-pages');
    showSection(document.getElementById('pages-section'));
    setActiveButton(defaultButton);
  });
  