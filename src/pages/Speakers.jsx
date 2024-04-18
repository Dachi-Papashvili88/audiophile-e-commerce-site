import data from "../../data.json";
import styled from "styled-components";

export default function Speakers() {
  const speakersData = data.filter((item) => item.category === "speakers");
  return (
    <Wrapper>
      <div className="component-name">EARPHONES</div>
      {speakersData.map((speaker, index) => (
        <div
          key={speaker.id}
          className={index % 2 === 0 ? "main" : "main reversed"}
        >
          <div>
            <h1>{speaker.name}</h1>
            <p>{speaker.description}</p>
            <p>{speaker.features}</p>
            <p>$ {speaker.price}</p>
          </div>
          <img src={speaker.image.desktop} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2em;

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
  img {
    width: 40%;
    border-radius: 10px;
    margin-bottom: 10em;
  }
  @media (max-width: 992px) {
    .main {
      flex-direction: column;
    }
    img {
      width: 100%;
      margin-bottom: 5em;
    }
  }
`;
