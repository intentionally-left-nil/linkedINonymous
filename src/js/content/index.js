import handleProfile, { isProfilePage } from './profile';
import handleSearch, { isSearchPage } from './search';

debugger;
if (isProfilePage()) {
  handleProfile();
} else if (isSearchPage()) {
  handleSearch();
}
