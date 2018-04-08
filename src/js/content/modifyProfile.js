const hidePicture = () => {
  const profile = document.querySelector('div[class*="profile-photo"]');
  if (profile) {
    profile.style = 'display: none';
  }
};

const anonymizeName = () => {
  const title = document.querySelector('*[class*="section__name"');
  if (title) {
    title.innerHTML = 'INSERT NICKNAME HERE';
  }
};

export {
  hidePicture,
  anonymizeName,
};
