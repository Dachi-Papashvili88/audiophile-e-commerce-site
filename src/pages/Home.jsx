import data from "../../data.json";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <h1>Home</h1>
      {data.map((d) => (
        <div key={d.id}>
          <h1>{d.name}</h1>
          <p>{d.category}</p>
          <img src={d.image.desktop} alt={d.name} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    color: red;
  }
`;
