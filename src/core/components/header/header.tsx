import fotoformulario from "../header/fotoformulario.png";
type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header className="App-header">
      <img src={fotoformulario} className="App-logo" alt="logo" />
      <p>FORMULARIO</p>

      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      {children}
    </header>
  );
}
