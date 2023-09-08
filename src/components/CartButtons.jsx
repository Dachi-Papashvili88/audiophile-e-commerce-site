import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartButtons() {
  return (
    <Wrapper>
      <div className="cart-btn-wrapper">
        <AiOutlineShoppingCart />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
   font-size: 2rem;
`;
