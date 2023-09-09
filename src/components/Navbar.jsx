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
          <h4>AUDIOPHILE</h4>
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
  background-color: var(--clr-black-1);

  .nav {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    color: var(--clr-gray-1)
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
