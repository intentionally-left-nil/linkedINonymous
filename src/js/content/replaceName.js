import findAndReplaceDomText from 'findandreplacedomtext';
import getNickname from './getNickname';

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

export default replaceName;
