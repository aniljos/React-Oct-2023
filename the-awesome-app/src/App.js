import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React</a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main >
          <Routes>
            <Route path='/' element={<Hello message="React routing"/>}/>
            <Route path='/counter' element={<Counter value={5}/>}/>
            <Route path='/products' element={<ProtectedRoute> <ListProducts/> </ProtectedRoute>}/>
            <Route path='/products/:id' element={<EditProduct/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </main>


      </div>
    </Router>
  );
}

export default App;
