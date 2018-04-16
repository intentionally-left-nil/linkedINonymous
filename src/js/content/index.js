import handleProfile from './profile';
import handleSearch from './search';
import { showPictures, deanonymizeNames } from './modifySearch';
import { setDisabled } from './disabled';

const run = () => {
  handleProfile();
  handleSearch();
};

chrome.storage.onChanged.addListener(({ disabled: { newValue: disabled } }) => {
  setDisabled(disabled);
  if (disabled) {
    window.location.reload(false);
  } else {
    run();
  }
});

chrome.storage.local.get('disabled', ({ disabled }) => {
  setDisabled(disabled);
  if (!disabled) {
    run();
  }
});
