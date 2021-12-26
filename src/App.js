import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import ProductCreate from './create-product';
import UserList from './UserList';
import UserEdit from './user-edit';
import UserDelete from './user-delete';
import UserCreate from './create-user';
import ProductList from './ProductList';
import ProductEdit from './product-edit';
import ProductDelete from './product-delete';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/create-user" element={<UserCreate />}></Route>
                <Route path="/user-edit" element={<UserEdit />}></Route>
                <Route path="/user-delete" element={<UserDelete />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/create-product" element={<ProductCreate />}></Route>
                <Route path="/product-edit" element={<ProductEdit />}></Route>
                <Route path="/product-delete" element={<ProductDelete />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
