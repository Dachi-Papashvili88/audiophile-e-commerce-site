import data from "../../data.json";
import styled from "styled-components";

export default function Earphones() {
  const earphonesData = data.filter((item) => item.category === "earphones");

  return (
    <Wrapper>
      <div className="component-name">EARPHONES</div>
      {earphonesData.map((earphone, index) => (
        <div
          key={earphone.id}
          className={index % 2 === 0 ? "main" : "main reversed"}
        >
          <div className="main">
            <img src={earphone.image.desktop} />
            <div>
              <h1>{earphone.name}</h1>
              <p>{earphone.description}</p>
              <p>{earphone.features}</p>
              <p>$ {earphone.price}</p>
            </div>
          </div>
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
