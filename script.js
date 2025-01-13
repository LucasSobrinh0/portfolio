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
