import styled from "styled-components";
import CartButtons from "./CartButtons";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <div className="nav">
          <div className="nav-header">
            <button type="button" className="nav-toggle">
              <FaBars />
            </button>
            <Link to="/">
              <h4>AUDIOPHILE</h4>
            </Link>
            <Link to="/">HOME</Link>
            <Link to="headphones">HEADPHONES</Link>
            <Link to="speakers">SPEAKERS</Link>
            <Link to="earphones">EARPHONES</Link>
            <CartButtons />
          </div>
        </div>
      </nav>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-black-1);

  .nav {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    color: var(--clr-gray-1);
  }

  .nav a {
    text-decoration: none;
    color: var(--clr-gray-2);
    font-weight: bold;
    font-size: 1rem;
  }
  .nav a:hover {
    color: var(--clr-gray-1);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-gray-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    h4 {
      font-size: 1.5rem;
    }
  }
`;
