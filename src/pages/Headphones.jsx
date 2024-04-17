import data from "../../data.json";
import styled from "styled-components";

export default function Headphones() {
  const headphonesData = data.filter((item) => item.category === "headphones");

  return (
    <Wrapper>
      {headphonesData.map((headphone) => (
        <div key={headphone.id}>
          <div className="main">
            <img src={headphone.image.desktop} />
            <div>
              <h1>{headphone.name}</h1>
              <p>{headphone.description}</p>
              <p>{headphone.features}</p>
              <p>$ {headphone.price}</p>
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
