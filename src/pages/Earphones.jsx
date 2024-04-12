import data from "../../data.json";

export default function Earphones() {
  const earphonesData = data.filter((item) => item.category === "earphones");

  return (
    <>
      {earphonesData.map((earphone) => (
        <div key={earphone.id}>
          <h1>{earphone.name}</h1>
          <p>{earphone.description}</p>
          <p>{earphone.features}</p>
          <img src={earphone.image.desktop} />
        </div>
      ))}
    </>
  );
}
