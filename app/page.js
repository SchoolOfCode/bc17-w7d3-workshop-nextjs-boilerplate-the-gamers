import "./page.css";

import Header from "./src/components/header/header";
import Main from "./src/components/main/main";
import Footer from "./src/components/footer/footer";

export default function Home() {
  return (
    <div className="main_wrapper">
      <Main />
    </div>
  );
}
