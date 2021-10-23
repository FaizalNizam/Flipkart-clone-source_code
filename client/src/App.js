import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css'
import Cart from './components/cart/Cart';
import Footer from './components/Footer/Footer';
import Header from "./components/header/Header"
import Home from './components/home/Home'
import CreditFooter from './components/creditFooter/CreditFooter';
import TemplateProvider from './templates/TemplateProvider';


function App() {
  return (
   <TemplateProvider>
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
          <CreditFooter/>
        </Route> 
   
    </Router>
   </TemplateProvider>
  );
}

export default App;
