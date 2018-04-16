import { anonymizeNames, hidePictures } from './modifySearch';

const isSearchPage = () => window.location.pathname.startsWith('/search/results');

const handleSearch = () => {
  const onChange = () => {
    if (!isSearchPage()) {
      return;
    }
    anonymizeNames();
    hidePictures();
  };
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  onChange();
};

export default handleSearch;
