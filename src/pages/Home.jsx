import data from "../../data.json";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {data.map((d) => (
        <div key={d.id}>
          <h1>{d.name}</h1>
          <p>{d.category}</p>
          <img src={d.image.mobile} alt={d.name} />
        </div>
      ))}
    </div>
  );
}
