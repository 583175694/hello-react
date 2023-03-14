import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useScreen from "./hooks/useScreen";

function App() {
  // useScreen.ts
  const { openNewWindow, openChomOA } = useScreen();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p onClick={() => openNewWindow('www.baidu.com', '百度')}>获取当前电脑屏幕信息</p>
        <p onClick={() => openChomOA()}>谷歌跳转</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
