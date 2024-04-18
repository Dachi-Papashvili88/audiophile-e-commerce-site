import data from "../../data.json";
import styled from "styled-components";

export default function Headphones() {
  const headphonesData = data.filter((item) => item.category === "headphones");

  return (
    <Wrapper>
      <div className="component-name">HEADPHONES</div>
      {headphonesData.map((headphone, index) => (
        <div
          key={headphone.id}
          className={index % 2 === 0 ? "main reversed" : "main"}
        >
          <div>
            <h1>{headphone.name}</h1>
            <p>{headphone.description}</p>
            <p>{headphone.features}</p>
            <p>$ {headphone.price}</p>
          </div>
          <img src={headphone.image.desktop} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2em;
  img {
    width: 40%;
    border-radius: 10px;
    margin-bottom: 10em;
  }

  .component-name {
    font-size: 1.5rem;
    font-weigth: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-black-2);
    margin-top: -32px;
    color: white;
    width: 95vw;
    padding: 2em;
    margin-left: -40px;
    border-top: 0.5px solid gray;
  }

  .main {
    display: flex;
    align-items: center;
    text-align: justify;
    gap: 2rem;
  }

  .reversed {
    flex-direction: row-reverse;
  }
  @media (max-width: 992px) {
    .main {
      display: flex;
      flex-direction: column;
    }
    img {
      width: 100%;
      margin-bottom: 5em;
    }
  }
`;
