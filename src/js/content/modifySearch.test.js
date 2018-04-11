import { anonymizeNames, hidePictures } from './modifySearch';
import setupSearch, { selectors } from '../../../testHelpers/setupSearch';

jest.mock('./getNickname');

let savedBody;

beforeEach(() => {
  savedBody = document.body.innerHTML;
});

afterEach(() => {
  document.body.innerHTML = savedBody;
});


describe('anonymizeNames', () => {
  test('anonymizes the users', () => {
    setupSearch();
    anonymizeNames();
    const names = [...document.querySelectorAll(selectors.names)];
    names.forEach(name => expect(name.textContent).toEqual('Nick Nick'));
  });
});

describe('hidePictures', () => {
  test('hides every picture', () => {
    setupSearch();
    const pictures = [...document.querySelectorAll(selectors.pictures)];
    expect(pictures.length).toBeGreaterThan(0);
    hidePictures();
    pictures.forEach(picture => expect(picture.style.display).toBe('none'));
  });
});
