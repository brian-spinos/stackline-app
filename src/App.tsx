import stacklineLogo from "/stackline_logo.svg";
import MyButton from "./main/components/Button";
import BasicCard from "./main/components/BasicCard";

function App() {
  return (
    <div className="m-10 bg-yellow-500">
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

      <MyButton />

      <BasicCard />
    </div>
  );
}

export default App;
