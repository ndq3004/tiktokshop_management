import React from "react";
import Header from "./components/header/Header";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Items from "./pages/Items";
import Report from "./pages/Reports";
import Payment from "./pages/Payment.js";
import { GlobalStateContext as globalStateContext } from "./context/globalContext";
import globalContextValue from "./context/globalContextValue";
import AddItemIcon from "./components/AddItemIcon/AddItemIcon";
import AddItemModal from "./components/AddItemModal";


function App() {
  const [isOpenAddItemModel, setOpenAddItemModal] = React.useState(false);

  return (
    <globalStateContext.Provider value={globalContextValue}>
      <CssBaseline />
      <Router>
        <Header />
        {/* <ResponsiveAppBar /> */}
        <Routes>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/reports" element={<Report />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
        <AddItemIcon handleOpenAddItem={() => {setOpenAddItemModal(true)}}/>
        <AddItemModal open={isOpenAddItemModel} onCloseModal={() => setOpenAddItemModal(false)} />
      </Router>
    </globalStateContext.Provider>
  );
}

export default App;
