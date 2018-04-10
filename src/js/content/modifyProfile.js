const hidePicture = () => {
  const profile = document.querySelector('div[class*="profile-photo"]');
  if (profile) {
    profile.style = 'display: none';
  }
};

const getName = () => {
  let name;
  const container = document.querySelector('*[class*="section__name"]');
  if (container) {
    name = container.textContent;
  }
  return name;
};

const anonymizeName = () => {
  const name = getName();
};

export {
  hidePicture,
  anonymizeName,
};
