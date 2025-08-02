import { Link } from "react-router-dom";
import Homepage from "./Home";   
const Navbar = () => {
    return ( 
    <>
<header className="bg-green-800 text-white p-4 h-20 ">
  <nav className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
    <a>WLN</a>
    <div className="flex space-x-4 text-lg ">
      <Link to="/" className="hover:text-orange-300 ">Home</Link>
      <Link to="/blogs" className="hover:text-orange-300 transition">Blogs</Link>
    </div>

  </nav>
</header>
    </>
    );
};

export default Navbar;