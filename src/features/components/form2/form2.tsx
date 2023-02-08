import { FormProps } from "react-router-dom";
import "./../form1/form1.scss";

function Form2({ children }: FormProps) {
  return (
    <form>
      <fieldset>
        <legend> Acces Data</legend>
        <div>
          <label>UserName</label>
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
    </form>
  );
}

export default Form2;
