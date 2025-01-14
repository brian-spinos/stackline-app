import stacklineLogo from "/stackline_logo.svg";
import MyButton from "./main/components/Button";

function App() {
  return (
    <>
      <div>
        <h1>Stackline</h1>

        <a href="/" target="_blank">
          <img
            src={stacklineLogo}
            className="logo stackline"
            alt="Stackline logo"
          />
        </a>
      </div>
      <div className="card"></div>

      <MyButton />
    </>
  );
}

export default App;
