import { hidePicture, anonymizeName } from './modifyProfile';

const observer = new MutationObserver(() => {
  hidePicture();
  anonymizeName();
  observer.disconnect();
});

observer.observe(document.body, { childList: true });
