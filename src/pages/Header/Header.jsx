import { Avatar, Button, Space } from "antd";
import "./header.scss";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Search from "antd/es/input/Search";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
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
  


  return (
    <header className={`header-main ${scrolled ? "sticky top-0 sticky-css" : ""}`}>
      <div className="header-content">
        <ul className={`left ${toggle ? "flex z-50 bg-white md:bg-transparent" : "hidden"}` }>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/products"}>Shop</Link></li>
          <li>About</li>
          <li>Contact</li>
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
        <div className="center">NS MART</div>
        <div className="right">
          {!isLogin ? (
            <>
              <Button type="link" className="auth-btn hover:opacity-55">
                Signin
              </Button>
              <Button className="auth-btn v2 shadow-none border">Signup</Button>
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

              <Button className="auth-btn v2 shadow-none border hidden md:block">
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
