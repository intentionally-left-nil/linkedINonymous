import { anonymizeNames, hidePictures } from './modifySearch';
import { isDisabled } from './disabled';

const isSearchPage = () => window.location.pathname.startsWith('/search/results');

const handleSearch = () => {
  const onChange = () => {
    if (isDisabled() || !isSearchPage()) {
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
