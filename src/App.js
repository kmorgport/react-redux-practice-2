import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import {fetchCartData} from './store/cart-actions'


function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification)


  useEffect(()=>{
    dispatch(fetchCartData())
  }, [dispatch])

  return (
    <Fragment>
      {notification && 
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
