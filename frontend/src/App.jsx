import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pizza from './components/Pizza'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import { pizzaCart } from './data/pizzas'

function App() {
  const [activeView, setActiveView] = useState('home')
  const [cart, setCart] = useState(pizzaCart)

  const total = cart.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.count,
    0
  )

  return (
    <>
      <Navbar onNavigate={setActiveView} total={total} />

      {activeView === 'home' && <Home />}
      {activeView === 'pizza' && <Pizza onBack={() => setActiveView('home')} />}
      {activeView === 'cart' && <Cart cart={cart} setCart={setCart} />}
      {activeView === 'login' && (
        <Login onSuccess={() => setActiveView('home')} />
      )}
      {activeView === 'register' && (
        <Register onSuccess={() => setActiveView('login')} />
      )}

      <Footer />
    </>
  )
}

export default App
