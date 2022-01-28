import React, {useState} from 'react';
import {  Link } from "react-router-dom";

function Navbar() {
    // const [click] = useState(false);

    return (
      <div>
         <li>
            <Link to="/">Dashboard</Link>
         </li>
         <li>
            <Link to="/levels">Levels</Link>
         </li>
      </div>
    );
}

export default Navbar;