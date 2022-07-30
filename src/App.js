import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import SingleMoviesdetail from './components/SingleMoviesdetail';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const  App = () => {
  return (
   
      <>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<SingleMoviesdetail/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
       </Routes>
       <Footer/>
      </>
   
  );
}

export default App;
