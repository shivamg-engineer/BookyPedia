
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Pages/Home/Home';
import Ebooks from './Component/Pages/Ebooks/Ebooks';
import Cart from './Component/Pages/Cart/Cart';
import AddBook from './Component/Pages/AddBook/AddBook';
import BookDetails from './Component/Pages/BookDetails/BookDetails'
import UpdateBook from './Component/Pages/UpdateBook/UpdateBook';
import Login from './Component/Pages/Login/Login';
import Register from './Component/Pages/Login/Register';
import './App.css'
import { AuthProvider } from './context/AuthContext';


function App() {
 

  return (
    <AuthProvider>
    <Router>
   <Header />
   <Routes>
    <Route path="" element={<Home />} />
    <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/ebooks/:id" element={<BookDetails />} />
        <Route path="/ebooks/update/:id" element={<UpdateBook />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-book" element={<AddBook />} />
        {/* Add more routes as needed */}
    </Routes>
   <Footer/>
   </Router>
   </AuthProvider>
  )
}

export default App
