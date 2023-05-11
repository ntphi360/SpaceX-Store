import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { openDurum,scrollColorNav } from "../store/SideBarSlice";
import {fetchCategories} from "../store/categorySlice"


const Navbar = () => {

  const { isDurum,setNavbar } = useSelector((store) => store.sidebar)
  const dispatch = useDispatch()
  const {data: categories} = useSelector((state)=>state.category)
  
  useEffect(()=>{
    dispatch(fetchCategories())
  },[])
  
  //change color navbar when scroll
  const scrollNavbar = () => {
    if (window.scrollY >= 80) {
      dispatch(scrollColorNav(!setNavbar)) 
    } else {
      dispatch(scrollColorNav(setNavbar))
    }
  }

  useEffect(() => {
    scrollNavbar()
    window.addEventListener("scroll", scrollNavbar)
  },[]);


  


  return (
    <>
      <div className={`${setNavbar && "bg-[#0e0d0d] scroll-smooth shadow-lg"} flex justify-between items-center px-20 py-6  z-40 text-white lg:px-6 fixed w-full `} >
        <h1 className="text-4xl">SpaceX</h1>
        {/* navbar */}
        <nav className = {` flex justify-center items-center gap-x-10 ${isDurum && "lg:hidden"} lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717] lg:h-[580px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}>
          <ul className="flex gap-10 text-2xl mr-4 lg:flex-col lg:gap-6">
            <Link to="/">
              <li className="bla">Home</li>
            </Link>
            {categories.map(category => (
              <li className="bla" key={category.id}>
                <Link to ={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
          {/* icon */}
          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/react-tailwind-portfolio">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
          <div className="btn">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">
              Lets Connect
            </button>
          </div>
        </nav>
        <i onClick={() => {dispatch(openDurum(!isDurum))}} className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"></i>
      </div>
    </>
  );
};

export default Navbar;
