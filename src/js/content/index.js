import { hidePicture, getNames, anonymizeNames } from './modifyProfile';

let names;
let pictureHidden = false;
const setName = () => {
  if (!names) {
    names = getNames();
  }
};

const observer = new MutationObserver(() => {
  setName();

  if (!pictureHidden) {
    pictureHidden = hidePicture();
  }

  if (names) {
    anonymizeNames(names);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
