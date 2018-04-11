import { anonymizeNames, hidePictures } from './modifySearch';

const isSearchPage = () => window.location.pathname.startsWith('/search/results');

const handleSearch = () => {
  const observer = new MutationObserver(() => {
    anonymizeNames();
    hidePictures();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
};

export { isSearchPage };

export default handleSearch;
