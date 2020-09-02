import React from 'react'
import { Categories, SortPopUp, PizzaBlock } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas, setPizzas } from '../redux/actions/pizzas';
import PizzaBlockLoading from '../components/PizzaBlockLodading';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortNames = [{ name: 'популярности', type: 'rating' },
{ name: 'цене', type: 'price' },
{ name: 'алфавиту', type: 'name' }]

function Home() {
  const { items, category, sortBy } = useSelector(({ pizzas }) => ({
    items: pizzas.items,
    category: pizzas.category,
    sortBy: pizzas.sortBy
  }))
  const addedPizzas = useSelector(({ cart }) => cart.items)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setPizzas())
    dispatch(setSortBy(sortBy))
  }, [])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch])

  const onClickAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopUp sortBy={sortBy} items={sortNames} onClickItem={onSelectSortType}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.length > 0 && items.map((pizza, index) => {
          return <PizzaBlock key={pizza.id} {...pizza} cartPizzasCount={addedPizzas[pizza.id] && addedPizzas[pizza.id].length} 
            onClickAddPizza={onClickAddPizza} />
        })}
      </div>
    </div>
  )
}

export default Home
