import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Map from "./pages/Map";
import List from "./pages/List";
import Buttons from "./components/Buttons";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  const dispatch = useDispatch();

  // detayı gösterilecek uçuşun id'si
  const [detailId, setDetailId] = useState(null);

  // tr sınırları içersindeki uçuşları al ve store'a aktar
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Buttons />
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List />} />
      </Routes>

      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;
