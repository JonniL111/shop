const initialState = {
  activeFilter: [{ payment: 'рубли' }],
  filterList: [],
};

//делаем уникальные значения полей для фильтров
const getUniqueFilter = (fildName, data) => {
  const fildArr = data.map((item) => item[fildName]);
  const t = [...new Set(fildArr)];
  return t;
};

function buildList(action) {
  return ['subject', 'genre'].map((name) => ({
    [name]: getUniqueFilter(name, action.payload),
  }));
}

//обновляем или добавляем значение активного фильтра
function addFilter(activeFilter, payload) {
  const idx = activeFilter.findIndex((item) => item[payload.key]);
  if ((idx === -1)) {
    return [...activeFilter, { [payload.key]: payload.value }]
  } else {
    return activeFilter.map(item=>item[payload.key]?
      {...item, [payload.key]:payload.value}: item)
  }
}

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'BUILD_FILTERS_LIST':
      return {
        ...state,
        filterList: buildList(action),
      };

    case 'SET_ACTIVE_FILTERS':
      return {
        ...state,
        activeFilter: [...action.payload],
      };

    case 'CLEAR_ACTIVE_FILTERS':
      return {
        ...state,
        activeFilter:[{ payment: 'рубли' }]
      };
    case 'ADD_ACTIVE_FILTER':
      return {
        ...state,
        activeFilter: addFilter(state.activeFilter,action.payload)
      };
    case 'DELETE_ACTIVE_FILTER':
      return {
        ...state,
        activeFilter: state.activeFilter.filter((item) => !item[action.payload.key]),
      };

    default:
      return state;
  }
};

export default filters;
