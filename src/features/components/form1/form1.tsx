import { Form, FormProps } from "react-router-dom";
import "./form1.scss";
import Button from "../button/button";
import { type } from "os";

type ChildrenProp = { onNotify: Function };

function Form1({ onNotify }: ChildrenProp) {
  const handleClick = () => {
    onNotify(1);
  };

  return (
    <>
      <fieldset>
        <legend> Personal Data</legend>
        <div>
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Surname</label>
          <input type="text"></input>
        </div>

        <div>
          <label>DOB</label>
          <input type="date"></input>
        </div>

        <div>
          <label>Female</label>
          <input type="radio" name="gender"></input>
        </div>

        <div>
          <label>Male</label>
          <input type="radio" name="gender"></input>
        </div>

        <div>
          <label>I would rather not to answer</label>
          <input type="radio" name="gender"></input>
        </div>

        <div>
          <label>¿Desea recibir información de nuestra newsletter?</label>
          <input type="checkbox" name="n1"></input>
        </div>
      </fieldset>
      <Button onClick={handleClick} />
    </>
  );
}

export default Form1;
