import styled from "styled-components";
import CartButtons from "./CartButtons";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <NavContainer>
      <div className="nav">
        <div className="nav-header">
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
          <h2>AUDIOPHILE</h2>
          <CartButtons />
        </div>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
  }
`;
