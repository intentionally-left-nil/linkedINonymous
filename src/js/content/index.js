import handleProfile, { isProfilePage } from './profile';

if (isProfilePage()) {
  handleProfile();
}
