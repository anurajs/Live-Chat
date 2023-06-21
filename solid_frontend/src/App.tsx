import type { Component } from "solid-js";
import { Header } from "./components/Header";
import { Route, Routes } from "@solidjs/router";
import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" component={Login} />
        <Route path="/chat" component={Chat} />
      </Routes>
    </>
  );
};

export default App;
