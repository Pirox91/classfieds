import React from "react";
export default function Navbar() {
  return (
    <div>
      <div className='uppernav'>
        <p className='bye'>Logo</p>
        <form className="searchInputWrapper">
          <input className="searchInput" type="text" placeholder='Search'>
          </input>
        </form>
        <div className='hi'>
          <button className='buttonClass2' type="button">sign up</button>
          <button className='buttonClass' type="button">sign in</button>
        </div></div>
      <nav className="navigation"><ul className='navul'>
        <li className='navli'><a className="text-black" >carte mere</a></li>
        <li className='navli'><a href="#">carte graphique </a></li>
        <li className='navli'><a href="#">ram</a></li>
        <li className='navli'><a href="#">cpu</a></li>
        <li className='navli'><a href="#">boitier</a></li>
        <li className='navli'><a href="#">stockage</a></li>
        <li className='navli'><a href="#">boite dalimentation</a></li>
        <li className='navli'><a href="#">moniteur</a></li>
        <li className='navli'><a href="#">pc</a></li>
        <li className='navli'><a href="#">console</a></li>
      </ul></nav>
    </div>
  )
}