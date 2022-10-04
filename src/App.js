import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Todolist from "./pages/Todolist";
import Header from "./components/Header";
import PageAbout from "./pages/About";
import PageHome from "./pages/Home";
import PageNewsDetail from "./pages/NewsDetail";
import PageNews from "./pages/News";
import PageNotFound from "./pages/NotFound";

function App() {
  const [booleanLang, setLang] = useState(true);
  const handlerAppLangEvent = (lang) => {
    setLang(!booleanLang);
    console.log(booleanLang);
  };
  return (
    <div>
      <Header onLangBtnClick={handlerAppLangEvent} lang={booleanLang}></Header>
      <div className="text-center p-4">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/" element={<PageHome />} />
          <Route
            path="/todolist"
            element={<Todolist lang={booleanLang} />}
          ></Route>
          <Route path="/about/*" element={<PageAbout />} />

          <Route path="/news/*" element={<PageNews />} />
          <Route
            path="/news/:id"
            element={<PageNewsDetail />}
            loader={({ params }) => {
              console.log(params.teamId); // "hotspur"
            }}
            // and the action
            action={({ params }) => {}}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
