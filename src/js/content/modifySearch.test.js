import { anonymizeNames, deanonymizeNames, hidePictures, showPictures } from './modifySearch';
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
    expect(names.length).toBeGreaterThan(0);
    names.forEach(name => expect(name.textContent).toEqual('Nick Nick'));
  });
});

describe('deanonymizeNames', () => {
  test('reverts the anonymous names', () => {
    setupSearch();
    const nameNodes = [...document.querySelectorAll(selectors.names)];
    const names = nameNodes.map(node => node.textContent);
    expect(names.length).toBeGreaterThan(0);
    anonymizeNames();
    deanonymizeNames();
    const newNames = nameNodes.map(node => node.textContent);
    expect(names).toEqual(newNames);
  });

  test('removes the data-original-name prop', () => {
    setupSearch();
    const nameNodes = [...document.querySelectorAll(selectors.names)];
    anonymizeNames();
    deanonymizeNames();
    nameNodes.forEach((node) => {
      expect(node.hasAttribute('data-original-name')).toBe(false);
    });
  });
});

describe('hidePictures', () => {
  test('hides every picture', () => {
    setupSearch();
    const pictures = [...document.querySelectorAll(selectors.pictures)];
    expect(pictures.length).toBeGreaterThan(0);
    hidePictures();
    pictures.forEach(picture => expect(picture.style.visibility).toBe('hidden'));
  });
});

describe('showPictures', () => {
  test('shows all pictures previously hidden', () => {
    setupSearch();
    const pictures = [...document.querySelectorAll(selectors.pictures)];
    expect(pictures.length).toBeGreaterThan(0);
    hidePictures();
    showPictures();
    pictures.forEach(picture => expect(picture.hasAttribute('style')).toBe(false));
  });
});
