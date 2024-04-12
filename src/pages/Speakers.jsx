import data from "../../data.json";

export default function Speakers() {
  const speakersData = data.filter((item) => item.category === "speakers");
  return (
    <>
      {speakersData.map((speaker) => (
        <div key={speaker.id}>
          <h1>{speaker.name}</h1>
          <p>{speaker.description}</p>
          <p>{speaker.features}</p>
          <img src={speaker.image.desktop} />
        </div>
      ))}
    </>
  );
}
