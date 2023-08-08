import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Chat } from "./Chat";
import LoginForm from "./LoginForm/LoginForm";
import { store } from "./store";

function App() {
  const [login, setLogin] = useState(true);
  return (
    <Provider store={store}>
      <div className="App flex justify-center items-center h-screen">
        {!login && <LoginForm />}
        {login && <Chat />}
      </div>
    </Provider>
  );
}

export default App;
