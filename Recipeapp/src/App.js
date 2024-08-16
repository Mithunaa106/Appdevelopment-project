import { Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import Login from './components/Login';
import Signup from './components/Signup';


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
     <div className='bg-black'>
      <Routes>
  

    

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
          <Route path='favorites' element={<Favorites />} /> Add Favorites route
        </Route>
    
       
    
        
      </Routes>
    </div>
  );
}

export default App;