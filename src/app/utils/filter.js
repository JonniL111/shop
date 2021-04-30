export function filter({ goods, activeFilter }) {
  const newArr = [];
  //достаем товар
  for (const product of goods.items) {
    let flag = false;
    //проходим по фильтрам
    for (const activF of activeFilter) {
      const key = Object.keys(activF)[0];
      const val = Object.values(activF)[0];
      if (key === 'search') {
        const str = product.title.toLowerCase();
        if (str.includes(val.toLowerCase())) {
          flag = true;
          continue;
        } else {
          flag = false;
          break;
        }
      }
      //оплата всегда true
      if (key === 'payment')  {
        flag = true
        continue
      };
      //ищем число в строке чисел
      if (key === 'grade') {
        let str = product[key].split(';');
        if (str.some((item) => item === val)) {
          flag = true;
          continue;
        } else {
          flag = false;
          break;
        }
      }
      //проверяем соотв зн фильтра значению товара
      if (product[key] === val) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) newArr.push(product);
  }
  return newArr;
}
