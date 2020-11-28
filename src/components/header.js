import React from "react"

const Header = () => {

  const navSlide = () => {
    const menu_bar = document.querySelector('.navBar-button');
    const nav = document.querySelector('.menu-links');
    const overlay = document.querySelector('.overlay');

    menu_bar.addEventListener("click", openNav());

    function openNav() {
      nav.classList.toggle('nav-active');
      overlay.classList.toggle('open');

      document.addEventListener("click", function (event) {
        if (event.target.closest('.menu-links')) {
          return;
        } else {
          return navSlide();
          
        }
      });

      document.body.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          navSlide();
          return false;
        } else {
          return;
        }
        
      });
      return;
    }
    return false;
  }


  return (
    <header>
      <div className="navBar-button" onClick={() => navSlide()}>
        <div className="red-circle"></div>
      </div>

      <nav className="menu-links">
        <div className="navBar-button-white" onClick={() => navSlide()}>
          <div className="white-circle"></div>
        </div>
        <ul>
          <li><p>About us</p></li>
          <li><p>How it works</p></li>
          <li><p>Blog</p></li>

          <div className="second-text">
          <li><p>Help</p></li>
          <li><p>Download the app</p></li>
          </div>
        </ul>
      </nav>

      <div className="overlay"></div>
      <h2>Zodiac Love</h2>
    </header>

  )
}

export default Header


