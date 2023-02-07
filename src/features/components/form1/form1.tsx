import { Form } from "react-router-dom";

function Form1() {
  return (
    <fieldset>
      <legend> Personal Data</legend>

      <input type="checkbox" name="n1">
        {" "}
        ¿Desea recibir información de nuestra newsletter?
      </input>
    </fieldset>
  );
}

export default Form1;
