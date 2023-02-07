import { Header } from "../header/header";
import { Footer } from "../footer/footer";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header>
        <p>Please fill in all the fields</p>
      </Header>
      <Footer></Footer>
    </div>
  );
}
