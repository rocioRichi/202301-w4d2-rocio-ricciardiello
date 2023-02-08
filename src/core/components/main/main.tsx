import { useState } from "react";
import Form1 from "../../../features/components/form1/form1";
import Form2 from "../../../features/components/form2/form2";

function Main() {
  const [indexForm, setIndexForm] = useState(0);
  const nextForm = (index: number) => {
    console.log(index);
    setIndexForm(index);
  };
  return (
    <main className="main">
      {indexForm === 0 && <Form1 onNotify={nextForm} />}
      {indexForm === 1 && <Form2 />}
    </main>
  );
}
export default Main;
