import { pizzasData } from '../../pizzasData'

const initialState = {
    items: [],
    // isLoaded: false
    sortBy: 'rating',
    category: null
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: pizzasData,
                // isLoaded: action.isLoaded
            }
        // case 'SET_LOADED':
        //     return {
        //         ...state,
        //         isLoaded: action.payload
        //     }
        case 'SET_CATEGORY':
            const filteredPizzas = (category) => {
                if (category !== null) {
                    return pizzasData.filter(item => {
                        return item.category.includes(category)
                    })
                } else return [...pizzasData]
            }
            return {
                ...state,
                category: action.payload,
                items: filteredPizzas(action.payload)
            }
        case 'SET_SORT_BY':
            const sortedPizza = (sortType) => {
                // return state.items.sort()


                return state.items.sort((prev, next) => {
                    if(sortType === 'name') {
                        return next[sortType][0] > prev[sortType][0] ? -1 
                        : next[sortType][0] < prev[sortType][0] ? 1 
                        : 0
                    } else {
                        return next[sortType] - prev[sortType]
                    }
                })

            }
            return {
                ...state,
                sortBy: action.payload,
                items: sortedPizza(action.payload)
            }
        default:
            return state
    }
}

export default pizzas