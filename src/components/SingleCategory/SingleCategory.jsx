import React from 'react';
import { useSelector,useDispatch } from 'react-redux'

import { STATUS } from '../../utils/status'
import { formatPrice } from '../../utils/helpers';
import { setDetailData } from '../../store/detailSlice'
import { Link } from 'react-router-dom';

import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import './SingleCategory.scss'

const SingleCategory = ({products,status}) => {
  const dispatch = useDispatch();

  if(status === STATUS.ERROR) return(<Error />)
  if(status === STATUS.LOADING) return(<Loader />)
  
  const handleClickDetail = (data) =>{
    dispatch(setDetailData(data)); 
    console.log(data)
  }
 
  
  return (
    <section className='cat-single py-5'>
      <div className='container'>
        <div className='cat-single-content'>
          <div className='section-title'>
            <h3 className='text-uppercase fw-7 text-mint ls-1'>temporary</h3>
          </div>
          <div className='product-items grid'>
            {
              products.map(product => (
                <Link to = {`/detail/${product.id}`} key={product.id}>
                  <div className='product-item bg-white' onClick={() => {handleClickDetail(product)}}>
                    <div className='product-item-img'>
                      <img src = {product.images} alt={product.title}/>
                      <div className='product-item-cat text-white fs-13 text-uppercase bg-gold fw-6'>
                        {product.category.name}
                      </div>
                    </div>
                    <div className='product-item-body'>
                      <h6 className='product-item-title text-pine-green fw-4 fs-15'>{product.title}</h6>
                      <div className = "product-item-price text-regal-blue fw-7 fs-18">{formatPrice(product.price)}</div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleCategory