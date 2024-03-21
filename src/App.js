import logo from "./logo.svg";
import "./App.css";
import Index from "./app/Index";
import About from "./app/About";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Booknow from "./app/Booknow";
import Beach from "./app/Beach";
import Blog from "./app/Blog";
import Blogsingle from "./app/Blogsingle";
import Contact from "./app/Contact";
import Nature from './app/Nature';
import Rooms from "./app/Rooms";
import Menu from './app/Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from "./app/Users";
import UpdateUser from "./app/UpdateUser";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/booknow' element={<Booknow />} />
          <Route path='/beach' element={<Beach />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogsingle' element={<Blogsingle />} />
          <Route path='/nature' element={<Nature />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/users' element={<Users />} />
          <Route path='/update/:id' element={<UpdateUser />} />

        </Routes>
      </Router>
      
    </>
  );
}

export default App;
