import { replaceName, revertName } from './replaceName';

const hidePicture = () => {
  const profile = document.querySelector('div[class*="profile-photo"]');
  if (profile) {
    profile.style = 'display: none;';
  }
  return !!profile;
};

const showPicture = () => {
  const profile = document.querySelector('div[class*="profile-photo"]');
  if (profile) {
    profile.removeAttribute('style');
  }
};

const stripEmpty = (name) => !(/^\s+$/.test(name));

const getNames = () => {
  let names = null;
  const container = document.querySelector('*[class*="section__name"]:not([data-original-name])');
  if (container) {
    names = container.textContent.trim().split(' ').filter(stripEmpty);
  }
  return names;
};

const setOriginalName = (names) => {
  const container = document.querySelector('*[class*="section__name"]');
  container.dataset.originalName = names.join(' ');
};

const removeOriginalName = () => {
  const container = document.querySelector('*[class*="section__name"]');
  if (container) {
    container.removeAttribute('data-original-name');
  }
};

const getOriginalNames = () => {
  let names = [];
  const container = document.querySelector('*[class*="section__name"]');
  if (container && container.dataset.originalName) {
    names = container.dataset.originalName.split(' ');
  }
  return names;
};

const anonymizeNames = (names) => {
  const node = document.head.querySelector('title');
  names.forEach(name => replaceName({ name, node }));
  names.forEach(name => replaceName({ name, node: document.body }));
};

const deanonymizeNames = () => {
  const names = getOriginalNames();
  const node = document.head.querySelector('title');
  names.forEach(name => revertName({ name, node }));
  names.forEach(name => revertName({ name, node: document.body }));
  removeOriginalName();
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
  getOriginalNames,
  setOriginalName,
  hideEducation,
  hidePicture,
  showPicture,
  anonymizeNames,
  deanonymizeNames,
};
