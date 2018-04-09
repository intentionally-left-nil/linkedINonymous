import profileHtml from './profileHtml';

const setupProfile = () => (document.body.innerHTML = profileHtml);
const selectors = {
  picture: '*[class=pv-top-card-section__profile-photo-container]',
};

export { selectors };
export default setupProfile;
