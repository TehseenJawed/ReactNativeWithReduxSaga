const initialState = {
  localhost: 'http',
  loading: false,
  user: [],
};

export const LOADING = state => state.AuthReducer.loading;

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_USERDATA':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
