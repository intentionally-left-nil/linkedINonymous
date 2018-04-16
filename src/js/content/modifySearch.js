import { replaceName, revertName } from './replaceName';

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

const deanonymizeNames = () => {
  const nodes = [...document.querySelectorAll('.actor-name[data-original-name]')];
  nodes.forEach((node) => {
    const names = node.dataset.originalName.split(' ');
    names.forEach(name => revertName({ node, name }));
  });
};

const hidePictures = () => {
  const pictures = document.querySelectorAll('div[class*="image-wrapper"]');
  pictures.forEach((picture) => {
    picture.style = 'visibility: hidden;'; // eslint-disable-line no-param-reassign
  });
};

const showPictures = () => {
  const pictures = document.querySelectorAll('div[class*="image-wrapper"]');
  pictures.forEach(picture => picture.removeAttribute('style'));
};

export {
  anonymizeNames,
  deanonymizeNames,
  hidePictures,
  showPictures,
};
