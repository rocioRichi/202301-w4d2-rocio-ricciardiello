import "./button.scss";

type ChildrenProp = { onClick: Function };

function Button({ onClick }: ChildrenProp) {
  return <button onClick={() => onClick()}>SIGUIENTE</button>;
}

export default Button;
