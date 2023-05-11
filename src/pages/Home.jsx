import  {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../store/categorySlice'
import { fetchProducts } from '../store/productSlice';


import Header from '../components/Header'
import Category from '../components/Category/Category'
import ProductList from '../components/ProductList/ProductList';
import SingleCategory from '../components/SingleCategory/SingleCategory';


const Home = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {data: products, status: productStatus} = useSelector((state) => state.product);
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);


  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, 'all'));
    dispatch(fetchProductsByCategory(2, 'all'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <Header/>
      <Category categories = {categories} status = {categoryStatus} />
      <ProductList products={products} status={productStatus}/>
      
      {/* category one products */}
      <section>
        { productsByCategory[0] && <SingleCategory products = {productsByCategory[0]} status = {catProductAllStatus} /> }
      </section>
      <section>
        { productsByCategory[1] && <SingleCategory products = {productsByCategory[1]} status = {catProductAllStatus} /> }
      </section> 
    </div>
  )
}

export default Home