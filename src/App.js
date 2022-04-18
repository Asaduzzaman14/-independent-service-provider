import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Component/Pages/Blog/Blog';
import Header from './Component/Pages/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Component/LogInSignIn/Login/Login';
import About from './Component/Pages/About/About';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Pages/NotFound/NotFound';
import RequirAuth from './Component/LogInSignIn/RequirAuth/RequirAuth';
import Register from './Component/LogInSignIn/Register/Register';
import CheckOut from './Component/Pages/CheckOut/CheckOut';
import Coutuct from './Component/Pages/Contuct/Coutuct';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/services/:id' element={
          <RequirAuth>
            <CheckOut></CheckOut>
          </RequirAuth>
        }></Route>


        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contuct' element={<Coutuct></Coutuct>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>



    </div>
  );
}

export default App;
