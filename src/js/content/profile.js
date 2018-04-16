import { setOriginalName, hidePicture, getNames, anonymizeNames } from './modifyProfile';

const isProfilePage = () => window.location.pathname.startsWith('/in/');

const handleProfile = () => {
  let names;
  let pictureHidden = false;

  const setName = () => {
    const newNames = getNames();
    if (newNames) {
      names = newNames;
      setOriginalName(names);
    }
  };

  const onChange = () => {
    if (!isProfilePage()) {
      return;
    }
    setName();

    if (!pictureHidden) {
      pictureHidden = hidePicture();
    }

    if (names) {
      anonymizeNames(names);
    }
  };

  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  onChange();
};

export default handleProfile;
