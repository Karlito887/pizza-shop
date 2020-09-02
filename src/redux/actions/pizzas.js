import Axios from 'axios';

// export const fetchPizzas = (category, sortBy) => (dispatch) => {
//     dispatch(setLoaded(false))
//     Axios.get(`/pizzas?${
//         category !== null ? `category=${category}` : ''}&_sort=${
//             sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
//         dispatch(setPizzas(data))
//     })
// }

export const setPizzas = () => ({
    type: 'SET_PIZZAS',
    // payload: items,
    // isLoaded: false
})

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

