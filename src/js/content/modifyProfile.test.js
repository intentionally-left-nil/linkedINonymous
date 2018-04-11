import { hideEducation, hidePicture, getNames, anonymizeNames } from './modifyProfile';
import setupProfile, { selectors } from '../../../testHelpers/setupProfile';

jest.mock('./getNickname');
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

const getElement = name => document.querySelector(selectors[name]);

describe('hidePicture', () => {
  test('hides the picture', () => {
    setupProfile();
    expect(hidePicture()).toBe(true);
    const picture = getElement('picture');
    expect(picture.style.display).toBe('none');
  });

  test('returns false when the picture is not found', () => {
    expect(hidePicture()).toBe(false);
  });
});

describe('hideEducation', () => {
  test('hides the education section', () => {
    setupProfile();
    expect(hideEducation()).toBe(true);
    const education = getElement('education');
    expect(education.style.display).toBe('none');
  });

  test('returns false when the education section is not found', () => {
    expect(hideEducation()).toBe(false);
  });
});

describe('getNames', () => {
  test('returns null when the div is not present', () => {
    expect(getNames()).toBe(null);
  });

  test('returns the name of the user', () => {
    setupProfile();
    expect(getNames()).toEqual(['Jeff', 'Weiner']);
  });
});

describe('anonymizeNames', () => {
  const names = ['Jeff', 'Weiner'];
  test('removes the name from the <title>', () => {
    setupProfile();
    anonymizeNames(names);
    const title = getElement('title');
    expect(title.textContent).toEqual('Nick Nick | LinkedIn');
  });

  test('removes the name from the body', () => {
    document.body.innerHTML = '<div class="pv-top-card-section__name Sans-26px-black-85%">Seattle Sounders</div>';
    anonymizeNames(['Seattle', 'Sounders']);
    const name = getElement('name');
    expect(name.textContent).toBe('Nick Nick');
  });

  test('handles apostrophes', () => {
    document.body.innerHTML = '<div class="pv-top-card-section__name Sans-26px-black-85%">Seattle Sounders</div><div>Seattle\'s profile is awesome</div>';
    anonymizeNames(['Seattle', 'Sounders']);
    expect(document.body.textContent).toBe("Nick NickNick's profile is awesome");
  });

  test('removes all references to Jeff in the profile', () => {
    setupProfile();
    anonymizeNames(['Jeff', 'Weiner']);
    expect(document.body.textContent.includes('Jeff')).toBe(false);
    expect(document.body.textContent.includes('Weiner')).toBe(false);
  });
});
