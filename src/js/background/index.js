const onClick = () => {
  chrome.storage.local.get('disabled', ({ disabled }) => {
    const newDisabled = !disabled;
    const path = {
      16: 'logo-16.png',
      32: 'logo-32.png',
      48: 'logo-48.png',
      128: 'logo-128.png',
    };
    if (newDisabled) {
      Object.entries(path).forEach(([k, v]) => {
        path[k] = `gray${v}`;
      });
    }
    chrome.browserAction.setIcon({ path });
    chrome.storage.local.set({ disabled: newDisabled });
  });
};

chrome.browserAction.onClicked.addListener(onClick);
