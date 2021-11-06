export const deleted = (id) => ({ type: 'DELETE', id });
export const onMarked = (id) => ({ type: 'MARKED', id });
export const addItem = (name, wages) => ({ type: 'ADD_ITEM', name, wages });
export const onRaise = (id) => ({ type: 'RAISE', id });
export const search = (value) => ({ type: 'SEARCH', value });
export const filter = (str) => ({ type: 'FILTER', str });
