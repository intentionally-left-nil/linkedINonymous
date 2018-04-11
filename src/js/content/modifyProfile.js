import findAndReplaceDomText from 'findandreplacedomtext';

const hidePicture = () => {
  const profile = document.querySelector('div[class*="profile-photo"]');
  if (profile) {
    profile.style = 'display: none';
  }
};

const getNames = () => {
  let names = [];
  const container = document.querySelector('*[class*="section__name"]');
  if (container) {
    names = container.textContent.split(' ');
  }
  return names;
};

const replaceName = ({ name, nickname, node }) => {
  const find = new RegExp(`(^|\\s|^\\w|\\w$|\\W\\w|\\w\\W)${name}($|\\s|^\\w|\\w$|\\W\\w|\\w\\W)`, 'gi');
  const replace = `$1${nickname}$2`;

  findAndReplaceDomText(node, {
    find,
    replace,
  });
};

const anonymizeName = () => {
  const names = getNames();
  if (names.length) {
    const node = document.head.querySelector('title');
    names.forEach(name => replaceName({ name, nickname: 'ada', node }));
  }
};

export {
  hidePicture,
  anonymizeName,
};
