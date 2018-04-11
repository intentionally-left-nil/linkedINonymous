import searchHtml from './searchHtml';

const setupSearch = () => {
  document.body.innerHTML = searchHtml;
};

const selectors = {
  names: '.actor-name',
  pictures: '.search-result__image-wrapper'
};

export { selectors };
export default setupSearch;
