import { useState } from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Load_file from "./components/load_file/load_file";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-3 pl-0">
      <Header />
      <div className={` ${styles.corporate_border}`}></div>
      <br />
      <Load_file />
      <br />
      <Home />
    </div>
  );
}

export default App;
