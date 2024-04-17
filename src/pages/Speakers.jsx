import data from "../../data.json";
import styled from "styled-components";

export default function Speakers() {
  const speakersData = data.filter((item) => item.category === "speakers");
  return (
    <Wrapper>
      {speakersData.map((speaker) => (
        <div key={speaker.id}>
          <div className="main">
            <img src={speaker.image.desktop} />
            <div>
              <h1>{speaker.name}</h1>
              <p>{speaker.description}</p>
              <p>{speaker.features}</p>
              <p>$ {speaker.price}</p>
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
  }

  .main {
    display: flex;
    align-items: center;
    text-align: justify;
    gap: 2rem;
  }
  @media (max-width: 992px) {
    .main {
      display: flex;
      flex-direction: column;
    }
    img {
      width: 100%;
    }
  }
`;
