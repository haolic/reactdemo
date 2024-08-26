/* eslint-disable no-restricted-globals */
self.addEventListener('message', e => {
  self.postMessage({ count: e.data.count + 1 });
});
