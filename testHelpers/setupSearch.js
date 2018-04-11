import searchHtml from './searchHtml';

const setupSearch = () => {
  document.body.innerHTML = searchHtml;
};

const selectors = {
  names: '.actor-name',
};

export { selectors };
export default setupSearch;
