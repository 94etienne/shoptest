

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import { Redirect } from "react-router-dom";
import Categories from "./components/Categories";



const App = () => {
  const user = true //for login and register page
  return (

  <Router>
    <Switch>
     <Route exact path="/">
       <Home/>
     </Route>
     {/* not lecture part */}
     <Route path="/products">
       <ProductList/>
     </Route>
     <Route path="/product">
       <Product/>
     </Route>
      {/* End not lecture part */}
     <Route path="/products/:category">
       <ProductList/>
     </Route>
     <Route path="/product/:id">
       <Product/>
     </Route>
     <Route path="/cart">
       <Cart/>
     </Route>

     <Route path="/login">
       {/* if there is user got to home if no user go to login in case you logged in*/}
       {user? <Redirect to="/" /> : <Login/>}
       
     </Route>
     <Route path="/register">
        {/* if there is user got to home if no user go to Register in case you logged in */}
        {user? <Redirect to="/" /> : <Register/>}
       
     </Route>
     

     <Route path="/pay">
       <Pay/>
     </Route>
     <Route exact path="/success">
       <Success/>
     </Route>
    </Switch>
  </Router>
  )
  
}

export default App;