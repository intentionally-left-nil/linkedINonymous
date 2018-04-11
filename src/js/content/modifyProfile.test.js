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

test('hides the picture', () => {
  setupProfile();
  hidePicture();
  const picture = document.querySelector(selectors.picture);
  expect(picture.style.display).toBe('none');
});

test('does not error if the picture cannot be found', () => {
  hidePicture();
});

test('removes the name from the <title>', () => {
  setupProfile();
  anonymizeName();
  const title = document.head.querySelector(selectors.title);
  expect(title.textContent).toEqual('ada ada | LinkedIn');
});
