import { hidePicture } from './modifyProfile.js';
import setupProfile, { selectors } from '../../../testHelpers/setupProfile';

let body;

beforeEach(() => {
  body = document.body.innerHTML;
});

afterEach(() => {
  document.body.innerHTML = body;
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
