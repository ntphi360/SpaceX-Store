import React from 'react'
import {STATUS} from '../../utils/status'
import { Link } from 'react-router-dom'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import './Category.scss'
// import bannerBg2 from '../../assets/images/bannerBg2.png'



const Category = ({categories, status}) => {
  
  if(status === STATUS.ERROR) return(<Error />)
  if(status === STATUS.LOADING) return(<Loader />)
//   console.log(status)

  
  return (
    <section className = "categories py-5" id="categories">
      <div className = "container">
          <div className = "categories-content">
              <div className='section-title '>
                  <h3 className = "text-uppercase fw-7 text-mint ls-1 lg:flex lg:justify-center ">Category</h3>
              </div>
              <div className = "category-items grid">
                  {
                    categories.map(category => (
                        <Link to = {`category/${category.id}`} key = {category.id}>
                            <div className = "category-item" >
                                <div className='category-item-img'>
                                    <img src = {category.image} alt ={category.name} />
                                </div>
                                <div className = "category-item-name text-center">
                                    <h6 className='fs-20'>{category.name}</h6>
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

export default Category