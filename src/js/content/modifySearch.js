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

const hidePictures = () => {
  const pictures = document.querySelectorAll('div[class*="image-wrapper"]');
  pictures.forEach((picture) => {
    picture.style = 'visibility: hidden;'; // eslint-disable-line no-param-reassign
  });
};

export { anonymizeNames, hidePictures };
