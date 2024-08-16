import Hero from "../hero/Hero";
import Process from "../process/process";
import Reviews from "../Reviews/Reviews";
import styles from "./main.module.css";

function main() {
  return (
    <main className="main_wrapper">
      <Hero />
      <Reviews />
      <Process />
    </main>
  );
}

export default main;
