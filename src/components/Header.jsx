import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  const Logout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Gaming Portal
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              <a href="discover-games.html" className="nav-link px-2 text-white">
                Recipes
              </a>
            </li>
            <li>
              <a href="/categories" className="nav-link px-2 text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="profile.html" className="nav-link px-2 text-white">
                User Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active bg-dark" href="#">
                Welcome, Player1
              </a>
            </li>
            <li className="nav-item">
              <button onClick={() => {Logout()}} className="btn bg-white text-primary ms-4">
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
