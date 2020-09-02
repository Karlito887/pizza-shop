import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages/';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// }

export default App
