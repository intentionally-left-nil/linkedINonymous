import handleProfile, { isProfilePage } from './profile';
import handleSearch, { isSearchPage } from './search';

if (isProfilePage()) {
  handleProfile();
} else if (isSearchPage()) {
  handleSearch();
}
