import { anonymizeNames, hidePictures } from './modifySearch';

const isSearchPage = () => window.location.pathname.startsWith('/search/results');

const handleSearch = () => {
  const observer = new MutationObserver(() => {
    if (!isSearchPage()) {
      return;
    }
    anonymizeNames();
    hidePictures();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
};

export default handleSearch;
