import handleProfile from './profile';
import handleSearch from './search';

const run = () => {
  handleProfile();
  handleSearch();
};

chrome.storage.onChanged.addListener(({ disabled: { newValue: disabled } }) => {
  if (disabled) {
    window.location.reload(false);
  } else {
    run();
  }
});

chrome.storage.local.get('disabled', ({ disabled }) => {
  if (!disabled) {
    run();
  }
});
