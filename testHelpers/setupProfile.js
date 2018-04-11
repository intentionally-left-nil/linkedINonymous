import profileHtml, { title } from './profileHtml';

const setupProfile = () => {
  document.body.innerHTML = profileHtml;
  let element = document.head.querySelector('title');
  if (!element) {
    element = document.createElement('title');
    document.head.appendChild(element);
  }
  element.innerHTML = title;
};
const selectors = {
  picture: '*[class="pv-top-card-section__profile-photo-container"]',
  name: '*[class="pv-top-card-section__name Sans-26px-black-85%"]',
  title: 'title',
};

export { selectors };
export default setupProfile;
