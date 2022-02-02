import {Cars, Form} from "./components";
import css from "./App.module.css"

function App() {
  return (
    <div className={css.main}>
      <Form/>
      <Cars/>
    </div>
  );
}

export default App;
