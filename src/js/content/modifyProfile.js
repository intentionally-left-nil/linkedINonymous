import findAndReplaceDomText from 'findandreplacedomtext';
import getNickname from './getNickname';

const hidePicture = () => {
  const profile = document.querySelector('div[class*="profile-photo"]');
  if (profile) {
    profile.style = 'display: none';
  }
  return !!profile;
};

const getNames = () => {
  let names = null;
  const container = document.querySelector('*[class*="section__name"]');
  if (container) {
    names = container.textContent.split(' ');
  }
  return names;
};

const replaceName = ({ name, node }) => {
  const nickname = getNickname(name);
  const find = new RegExp(`(^|\\s|^\\w|\\w$|\\W\\w|\\w\\W)${name}($|\\s|^\\w|\\w$|\\W\\w|\\w\\W|,|\\.)`, 'gi');
  const replace = `$1${nickname}$2`;

  findAndReplaceDomText(node, {
    forceContext: findAndReplaceDomText.NON_INLINE_PROSE,
    find,
    replace,
  });
};

const anonymizeNames = (names) => {
  const node = document.head.querySelector('title');
  names.forEach(name => replaceName({ name, node }));
  names.forEach(name => replaceName({ name, node: document.body }));
};

export {
  getNames,
  hidePicture,
  anonymizeNames,
};
