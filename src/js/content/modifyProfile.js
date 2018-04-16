import { replaceName } from './replaceName';

const hidePicture = () => {
  const profile = document.querySelector('div[class*="profile-photo"]');
  if (profile) {
    profile.style = 'display: none';
  }
  return !!profile;
};

const getNames = () => {
  let names = null;
  const container = document.querySelector('*[class*="section__name"]:not([data-original-name])');
  if (container) {
    names = container.textContent.split(' ');
  }
  return names;
};

const setOriginalName = (names) => {
  const container = document.querySelector('*[class*="section__name"]');
  container.dataset.originalName = names.join(' ');
};

const anonymizeNames = (names) => {
  const node = document.head.querySelector('title');
  names.forEach(name => replaceName({ name, node }));
  names.forEach(name => replaceName({ name, node: document.body }));
};

const hideEducation = () => {
  const education = document.getElementById('education-section');
  if (education) {
    education.style = 'display: none';
  }
  return !!education;
};

export {
  getNames,
  setOriginalName,
  hideEducation,
  hidePicture,
  anonymizeNames,
};
