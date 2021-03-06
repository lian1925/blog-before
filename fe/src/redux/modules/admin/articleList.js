const LOAD = 'admin/articleList/LOAD';
const LOAD_SUCCESS = 'admin/articleList/LOAD_SUCCESS';
const LOAD_FAIL = 'admin/articleList/LOAD_FAIL';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function load(params) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/admin/articleList', { params })
  };
}