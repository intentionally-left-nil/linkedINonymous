/* eslint-disable no-bitwise */
import constellations from 'constellations';

const hashCode = str => str.split('').reduce((prevHash, currVal) =>
  (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);

const getNickname = (name) => {
  const index = Math.abs(hashCode(name)) % constellations.length;
  return constellations[index].name;
};

export default getNickname;
