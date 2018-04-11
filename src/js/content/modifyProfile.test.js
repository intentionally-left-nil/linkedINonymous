import { hidePicture, anonymizeName } from './modifyProfile';
import setupProfile, { selectors } from '../../../testHelpers/setupProfile';

let savedBody;
let savedTitle;

beforeEach(() => {
  savedBody = document.body.innerHTML;
  const title = document.querySelector(selectors.title);
  savedTitle = title ? title.innerHTML : '';
});

afterEach(() => {
  document.body.innerHTML = savedBody;
  document.querySelector(selectors.title).innerHTML = savedTitle;
});

const getElement = (name) => document.querySelector(selectors[name]);

test('hides the picture', () => {
  setupProfile();
  hidePicture();
  const picture = getElement('picture');
  expect(picture.style.display).toBe('none');
});

test('does not error if the picture cannot be found', () => {
  hidePicture();
});

test('removes the name from the <title>', () => {
  setupProfile();
  anonymizeName();
  const title = getElement('title');
  expect(title.textContent).toEqual('ada ada | LinkedIn');
});

test('removes the name from the body', () => {
  document.body.innerHTML = '<div class="pv-top-card-section__name Sans-26px-black-85%">Seattle Sounders</div>';
  anonymizeName();
  const name = getElement('name');
  expect(name.textContent).toBe('ada ada');
});

test('handles apostrophes', () => {
  document.body.innerHTML = '<div class="pv-top-card-section__name Sans-26px-black-85%">Seattle Sounders</div><p>Seattle\'s profile is awesome</p>';
  anonymizeName();
  expect(document.body.textContent).toBe("ada adaada's profile is awesome");
});

test('removes all references to Jeff in the profile', () => {
  setupProfile();
  anonymizeName();
  expect(document.body.textContent.includes('Jeff')).toBe(false);
  expect(document.body.textContent.includes('Weiner')).toBe(false);
});
