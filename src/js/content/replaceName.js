import findAndReplaceDomText from 'findandreplacedomtext';
import getNickname from './getNickname';

const swap = ({ node, from, to }) => {
  const find = new RegExp(`(^|\\s|^\\w|\\w$|\\W\\w|\\w\\W)${from}($|\\s|^\\w|\\w$|\\W\\w|\\w\\W|,|\\.)`, 'gi');
  const replace = `$1${to}$2`;

  findAndReplaceDomText(node, {
    forceContext: findAndReplaceDomText.NON_INLINE_PROSE,
    find,
    replace,
  });
};

const replaceName = ({ name, node }) => {
  const nickname = getNickname(name);
  swap({ node, from: name, to: nickname });
};

const revertName = ({ name, node }) => {
  const nickname = getNickname(name);
  swap({ node, from: nickname, to: name });
};

export {
  replaceName,
  revertName,
};
