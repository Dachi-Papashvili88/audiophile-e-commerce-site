import data from "../../data.json";
import styled from "styled-components";

export default function Earphones() {
  const earphonesData = data.filter((item) => item.category === "earphones");

  return (
    <Wrapper>
      {earphonesData.map((earphone) => (
        <div key={earphone.id}>
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
