function getLocalStoragePropertyDescriptor() {
  const iframe = document.createElement('iframe');
  document.head.append(iframe);
  const pd = Object.getOwnPropertyDescriptor(iframe.contentWindow, 'localStorage');
  iframe.remove();
  return pd;
}

Object.defineProperty(window, 'localStorage', getLocalStoragePropertyDescriptor());

window.localStorage.email_cache; // gets the localstorage value

const localStorage = getLocalStoragePropertyDescriptor().get.call(window);
