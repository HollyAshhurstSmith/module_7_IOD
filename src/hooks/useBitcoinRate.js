import { useEffect, useReducer } from 'react';

const initialState = {
  rate: null,
  loading: false,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { rate: action.payload, loading: false, error: null };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let ignore = false;

    const fetchRate = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await res.json();
        if (!ignore) {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: data.bitcoin[currency.toLowerCase()]
          });
        }
      } catch (err) {
        if (!ignore) {
          dispatch({ type: 'FETCH_FAILURE', payload: 'Failed to fetch rate.' });
        }
      }
    };

    fetchRate();
    return () => {
      ignore = true;
    };
  }, [currency]);

  return state; // { rate, loading, error }
}
