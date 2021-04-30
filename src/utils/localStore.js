export function cleanLocalStore() {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    if (key === 'payment' || key === 'subject' || key === 'genre' || key === 'grade') {
      delete localStorage[key];
    }
  }
}
