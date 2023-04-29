import { useState } from "react"
import "./Navbar.css"
/**
 * Date: 02/12/22
 * @author Katie Munoz
 * @version 2.
 *
 */ 
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(true)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        KatieDev
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >

      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="#HOMEPAGE"> Home</a>

          </li>
       
        <li>
          <a href="#Courses">Courses</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
         
          <li>
            <a href="#Portfolio"> Portfolio </a>
          </li>
          <li>
            <a href="#About"> About Me</a>

          </li>
          <li>
            <a href="#Contact"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}