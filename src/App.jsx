import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home";
import Category from "./pages/CategoryPage";
import Cart from "./pages/Cart/Cart"
import PreviewProduct from "./components/PreviewProduct/PreviewProduct";
// import DetailItem from "./pages/DetailItem";
// import Header from "./components/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<Home />} />
          <Route exact path = '/category/:id' element = {<Category />} />
          <Route exact path = '/cart' element = {<Cart />} />
            <Route path = '/detail/:id' element={<PreviewProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
{/* <Route path=":genre" element={<MovieList />}></Route>
<Route path="/:genre/:movieId" element={<MovieDetails/>}></Route> */}
export default App;
