import React from "react";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { ContextProvider } from "./context/Context";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Favorites } from "./pages/Favorites";
import { ArrowUp } from "./components/ArrowUp";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content category="/" />}/>
          <Route path="/colors" element={<Content category="colors" />}/>
          <Route path="/design-tools" element={<Content category="design-tools" />}/>
          <Route path="/documentations" element={<Content category="documentations" />}/>
          <Route path="/frontend-tools" element={<Content category="frontend-tools" />}/>
          <Route path="/html-templates" element={<Content category="html-templates" />}/>
          <Route path="/icons" element={<Content category="icons" />}/>
          <Route path="/javascript-libraries" element={<Content category="javascript-libraries" />}/>

          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
        <Footer />
        <ArrowUp />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
