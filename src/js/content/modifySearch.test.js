import { anonymizeNames, deanonymizeNames, hidePictures } from './modifySearch';
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
