import { hideEducation, hidePicture, getNames, anonymizeNames } from './modifyProfile';

const isProfilePage = () => /^\/in\//.test(window.location.pathname);

const handleProfile = () => {
  let names;
  let pictureHidden = false;
  let educationHidden = false;

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

    if (!educationHidden) {
      educationHidden = hideEducation();
    }

    if (names) {
      anonymizeNames(names);
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
};

export {
  isProfilePage,
};

export default handleProfile;
