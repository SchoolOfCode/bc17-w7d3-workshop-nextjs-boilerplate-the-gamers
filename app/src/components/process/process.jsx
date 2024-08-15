import Card from "../card/card";
import styles from "./process.module.css";

function Process() {
  const cards = [
    {
      id: "1",
      src: "/images/how-it-works-1.png",
      alt: "image",
      title: "Give us a call...",
      desc: `Call us and book in a "Design Consulation" on a date and time to suit you`,
    },
    {
      id: "2",
      src: "/images/how-it-works-2.png",
      alt: "image",
      title: "We come to you...",
      desc: `We come to your home to do an assessment of the space and to your style preference.`,
    },
    {
      id: "3",
      src: "/images/how-it-works-3.png",
      alt: "image",
      title: "We recommend...",
      desc: `We send you a bespoke set of fireplace recommendations.`,
    },
  ];

  return (
    <section className={`${styles.process} grid`}>
      <h1 className={styles.process_title}>How it works.</h1>
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </section>
  );
}

export default Process;
