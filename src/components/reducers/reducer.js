const initialState = {
  arr: [
    { name: 'Marya', id: 1, wages: 120, marked: false, raise: false },
    { name: 'Artur', id: 2, wages: 2220, marked: false, raise: false },
    { name: 'Alexander', id: 3, wages: 320, marked: false, raise: false },
    { name: 'Violetta', id: 4, wages: 4230, marked: false, raise: false },
  ],
  arrFilter: '',
  filter: 'all',
};
let index = 4;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = {
        name: action.name,
        id: ++index,
        wages: action.wages,
        marked: false,
        raise: false,
      };
      return {
        ...state,
        arr: [...state.arr, newItem],
      };
    case 'DELETE':
      return {
        ...state,
        arr: state.arr.filter((item) => item.id !== action.id),
      };
    case 'MARKED':
      return {
        ...state,
        arr: state.arr.map((item) => {
          if (item.id === action.id) {
            return { ...item, marked: !item.marked };
          }
          return item;
        }),
      };
    case 'RAISE':
      return {
        ...state,
        arr: state.arr.map((item) => {
          if (item.id === action.id) {
            return { ...item, raise: !item.raise };
          }
          return item;
        }),
      };
    case 'SEARCH':
      return {
        ...state,
        arrFilter: action.value,
      };
    case 'FILTER':
      return {
        ...state,
        filter: state.filter !== action.str ? action.str : 'all',
      };
    default:
      return state;
  }
};
export default reducer;
