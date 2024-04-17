import data from "../../data.json";
import styled from "styled-components";

export default function Speakers() {
  const speakersData = data.filter((item) => item.category === "speakers");
  return (
    <Wrapper>
      {speakersData.map((speaker) => (
        <div key={speaker.id}>
          <h1>{speaker.name}</h1>
          <div className="main">
            <img src={speaker.image.desktop} />
            <div>
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
`;
