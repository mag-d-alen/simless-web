import React from "react";
import { SimActions } from "./views/sim_actions/SimActions";
import { Home } from "./views/home/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./views/navbar/Navbar";
import { FAQ } from "./views/faq/FAQ";
import { ContactMain } from "./views/contact/ContactWrapper";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BalanceMain } from "./views/balance/checkBalance/BalanceMain";
import { Header } from "./views/Header";
import { Footer } from "./views/Footer";
import { MainContainer } from "./stylingComponents/MainContainer";

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        {/* <Navbar /> */}
        <React.Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>\
            <Route path="/sim" element={<SimActions />}></Route>
            <Route path="/contact" element={<ContactMain />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/balance" element={<BalanceMain />}></Route>
          </Routes>
          <Footer />
        </React.Fragment>
      </MainContainer>
    </Provider>
  );
};

export default App;
