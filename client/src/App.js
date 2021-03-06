import { BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import Cart from './components/cart/Cart'
import Footer from './components/Footer/Footer'
import Header from "./components/header/Header"
import Home from './components/home/Home'
import CreditFooter from './components/creditFooter/CreditFooter'
import TemplateProvider from './templates/TemplateProvider'
import ContextProvider from './context/contextProvider'
import DetailView from './components/itemDetail/DetailView'

function App() {
  return (
   <TemplateProvider>
    <ContextProvider>
     <Router>
        <Route exact path='/'>
         <Header/>  
         <Home/>
         <Footer/>
         <CreditFooter/>
        </Route>
   
        <Route exact path='/cart' >
          <Header/>
          <Cart/>
        </Route> 

        <Header/>
        <Route exact path='/product/:id' component={DetailView}/>
        
     </Router>
    </ContextProvider>
   </TemplateProvider>
  )
}

export default App;
