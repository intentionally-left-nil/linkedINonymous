import getNickname from './getNickname';

test('The nickname for Ada is Monoceros', () => {
  expect(getNickname('Ada')).toBe('Canis Minor');
});
