const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const arrPizzas = [].concat.apply([], Object.values(newItems))
            console.log(action.payload);
            return {
                ...state,
                items: newItems,
                totalCount: arrPizzas.length,
                totalPrice: arrPizzas.reduce((prev, item) => prev + item.price, 0)
            }
        case 'DELETE_ALL_PIZZA':
            return initialState
        case 'DELETE_PIZZA_GROUP':
            const newPizzaItems = {
                ...state.items
            }

            const currentGrouplPrice = newPizzaItems[action.id].reduce((prev, item) => prev + item.price, 0);
            const currentGroupCount = newPizzaItems[action.id].length;
            delete newPizzaItems[action.id]

            return {
                ...state,
                items: newPizzaItems,
                totalPrice: state.totalPrice - currentGrouplPrice,
                totalCount: state.totalCount - currentGroupCount,
            }
        case 'MINUS_PIZZA' :
            let lastPizzaItems = {
                ...state.items
            }

            const currentPrice = lastPizzaItems[action.id][0].price;
            lastPizzaItems[action.id].pop()
            return {
                ...state,
                items: lastPizzaItems,
                totalPrice: state.totalPrice - currentPrice,
                totalCount: state.totalCount - 1,
            }
        default:
            return state
    }
}

export default cart