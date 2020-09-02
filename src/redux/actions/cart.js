export const addPizzaToCart = (payload) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: payload
})

export const deleteAllPizzas = () => ({
    type: 'DELETE_ALL_PIZZA'
})

export const deletePizzasGroup = (id) => ({
    type: 'DELETE_PIZZA_GROUP',
    id
})

export const minusPizza = (id) => ({
    type: 'MINUS_PIZZA',
    id
})

