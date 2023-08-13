import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";

function App() {
  return (
    <>
      <Header />
      <Main></Main>
      <Card />
    </>
  );
}

export default App;
