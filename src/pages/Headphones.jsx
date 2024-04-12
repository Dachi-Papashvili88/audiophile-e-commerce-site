import data from "../../data.json";

export default function Headphones() {
  const headphonesData = data.filter((item) => item.category === "headphones");

  return (
    <>
      {headphonesData.map((headphone) => (
        <div key={headphone.id}>
          <h1>{headphone.name}</h1>
          <p>{headphone.description}</p>
          <p>{headphone.features}</p>
          <img src={headphone.image.desktop} />
        </div>
      ))}
    </>
  );
}
