import styled from "styled-components";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'

export default function CartButtons() {
  return (
    <Wrapper className="cart-btn-wrapper">
        <span className="cart">
        <FaShoppingCart />
        <span className="cart-value">0</span>
        </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
   font-size: 2rem;
   .cart {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
    .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-orange-1);
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr);
    padding: 6px;
    font-weight: bold;
    margin-right: 8px;
  }

  }
`;
