import "./App.css";
import Header from "./Header";
import PopMess from "./PopMess";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./store/Store";
import { useEffect, useState } from "react";

function App() {
  //all message will be list here and then flush from here
  const [popMessage, setPopMessage] = useState("");
  // state to capture screen size of the system
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // this is main component of the application, so let us provide our store to this component
    <main className="flex flex-col gap-8 w-full min-h-screen overflow-scroll noscrollbar">
      <Provider store={myStore}>
        <Header
          size={screenSize}
          message={popMessage}
          setPopMessage={setPopMessage}
        />
        {/* render the children root of app route here, down below component will render one common component that will be Header*/}
        <Outlet context={{ setPopMessage }} />
      </Provider>
      <PopMess popMessage={popMessage} setPopMessage={setPopMessage} />
    </main>
  );
}

export default App;
