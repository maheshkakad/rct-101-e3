import "./App.css";
import Login from "./pages/Login"
import Product from "./components/Products/Product/Product";


function App() {
  return (
    <div className="App">
      {
        <div>
          
           <Login></Login>
           <Product/>
           
        </div>
      }
    </div>
  );
}

export default App;
