const initialState = {
  items: [],
  isLoaded: false,
  sortGoods:[]
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GOODS_REQUEST':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'GET_SORT_GOODS':
      return{
        ...state,
        sortGoods: action.payload,
        isLoaded: true,
      }

    case 'CHANJE_IS_LOADDED':
      return {
        ...state,
        isLoaded: false,
      };
    default:
      return state;
  }
};

export default goods;
