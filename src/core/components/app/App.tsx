import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import Main from "../main/main";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header>
        <p>Please fill in all the fields</p>
      </Header>
      <Main />
      <Footer></Footer>
    </div>
  );
}
