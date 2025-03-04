import reactLogo from "./assets/react.svg";
// import RecipesOldWay from "./components/recipesOldWay";
import {LoginForm} from "./components/LoginForm";
// import RecipesActionsWay from "./components/recipesActionsWay";
// import Messages from "./components/Massages";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ marginTop: 0, marginBottom: "18px" }}>React 19</h1>
      <h2 style={{ margin: 0 }}>
        <a
          href="https://www.youtube.com/@SimpleFrontendUA"
          target="_blank"
          style={{ color: "#E464C1" }}
        >
          Простий Фронтенд
        </a>
      </h2>
      <div className="card">
        {/* <RecipesOldWay /> */}
        {/* <RecipesActionsWay /> */}
        <LoginForm/>
        {/* <Messages /> */}
      </div>
    </>
  );
}

export default App;
