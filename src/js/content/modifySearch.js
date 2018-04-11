import replaceName from './replaceName';

const anonymizeNames = () => {
  const nodes = [...document.querySelectorAll('.actor-name:not([data-original-name])')];
  nodes.forEach((node) => {
    if (!node.dataset.originalName) {
      node.dataset.originalName = node.textContent; // eslint-disable-line no-param-reassign
      const names = node.textContent.split(' ');
      names.forEach(name => replaceName({ node, name }));
    }
  });
};

export { anonymizeNames };
