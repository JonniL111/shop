import axios from 'axios';
//записываем список товаров
export const fetchGoodsRequest = (data) => ({
  type: 'FETCH_GOODS_REQUEST',
  payload: data,
});

//создаем фильтрованный список
export const getSortGoods = (data)=>({
  type: 'GET_SORT_GOODS',
  payload: data
})
//создаем список значений фильтров
export const buildFiltersList = (goods) => ({
  type: 'BUILD_FILTERS_LIST',
  payload: goods,
});
//записываем текущие значения фильтров
export const setActiveFilters = (data) => ({
  type: 'SET_ACTIVE_FILTERS',
  payload: data,
});

export const clearActiveFilter = {
  type: 'CLEAR_ACTIVE_FILTERS',
};

export const deleteActiveFilter = (data)=>({
  type: 'DELETE_ACTIVE_FILTER',
  payload: data
})

export const addActiveFiter = (data) =>({
  type:'ADD_ACTIVE_FILTER',
  payload: data
})

const chanjIsLoadded = {
  type: 'CHANJE_IS_LOADDED',
};

export const fetchGoods = () => (dispatch) => {
  dispatch(chanjIsLoadded);
  return axios
    .post('https://krapipl.imumk.ru:8443/api/mobilev1/update')
    .then(function (resp) {
      dispatch(fetchGoodsRequest(resp.data.items));
      return resp.data.items;
    })
    .then(function (items) {
      dispatch(buildFiltersList(items));
      return items;
    });
};
