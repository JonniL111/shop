export const objToArr = (obj) => {
  const arr = [];
  for (const key in obj) {
    arr.push({ [key]: obj[key] });
  }
  return arr;
};

export const arrToObj = (arr) => {
  const object = arr.reduce(
    (obj, item) => Object.assign(obj, { [Object.keys(item)[0]]: Object.values(item)[0] }),
    {},
  );

  return object;
};
