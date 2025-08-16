import { UserContext, ThemeContext } from "./components/UserContext";
import { useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// step: 1-create context
// step:2-wrap the all child inside a provider
// step:3-pass value
// step:4-Go inside the consumer and consume
function App() {
  const [user, setUser] = useState({ name: "prakash" });
  return (
    <>
      <div>
        <UserContext.Provider value={user}>
          <ChildA />
        </UserContext.Provider>
      </div>
    </>
  );
}


export default App;
export { UserContext };
