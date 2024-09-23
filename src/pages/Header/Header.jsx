import { Avatar, Button, Space } from "antd";
import "./header.scss";
import { useContext, useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Search from "antd/es/input/Search";
import { Link } from "react-router-dom";
import { UserContextCreate } from "../../Context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const{user,setUser} = useContext(UserContextCreate)
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
}, []);
  
const handleSignOut = () => {
    signOut(auth)
}


  return (
    <header className={`header-main ${scrolled ? "sticky top-0 sticky-css" : ""}`}>
      <div className="header-content">
        <ul className={`left ${toggle ? "flex z-50 bg-white md:bg-transparent" : "hidden"}` }>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/products"}>Shop</Link></li>
          <li className="opacity-20">About</li>
          <li className="opacity-20">Contact</li>
          <li>
            <Search
              placeholder="Search"
              onSearch={"Search"}
              className="block md:hidden"
              style={{ width: "100%", margin: "0 auto" }}
            />
          </li>
          <li>
            <Button className="auth-btn v2 shadow-none border block md:hidden w-full">
              Signout
            </Button>
          </li>
        </ul>
        <div className="center"><Link to={"/"}>NS MART</Link></div>
        <div className="right">
          {!user ? (
            <>
              <Button type="link" className="auth-btn hover:opacity-55">
                <Link to={"/signin"}>
                Signin
                </Link>
              </Button>
              <Button className="auth-btn v2 shadow-none border">
                <Link to={"/signup"}> 
                Signup
                </Link>
                </Button>
            </>
          ) : (
            <>
              <Avatar className="profile-avatar" size={35} icon={<FaUser />} />

              <TbSearch className="header-icons hidden md:block" />
              <AiOutlineHeart className="header-icons hidden md:block" />
              <span className="cart-icon hidden md:block">
                <CgShoppingCart className="header-icons" />
                <span>5</span>
              </span>

              <FaBarsStaggered
                onClick={() => (toggle ? setToggle(false) : setToggle(true))}
                className="header-icons block md:hidden"
              />

              <Button onClick={handleSignOut} className="auth-btn v2 shadow-none border hidden md:block">
                Signout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
