import { hideEducation, setOriginalName, hidePicture, getNames, anonymizeNames } from './modifyProfile';

const isProfilePage = () => window.location.pathname.startsWith('/in/');

const handleProfile = () => {
  let names;
  let pictureHidden = false;
  let educationHidden = false;

  const setName = () => {
    const newNames = getNames();
    if (newNames) {
      names = newNames;
      setOriginalName(names);
    }
  };

  const observer = new MutationObserver(() => {
    if (!isProfilePage()) {
      return;
    }
    setName();

    if (!pictureHidden) {
      pictureHidden = hidePicture();
    }

    if (!educationHidden) {
      educationHidden = hideEducation();
    }

    if (names) {
      anonymizeNames(names);
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
};

export default handleProfile;
