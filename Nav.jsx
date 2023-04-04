import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users/ronaldo">Rondaldo</Link>
        <Link to="/users/messi">Messi</Link>
        <Link to="/users/nkosi">nkosi topg</Link>

    
       {/*
    
       Bad Practise
    
       <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
       */} 
      </nav>
    );
}

export default Nav;