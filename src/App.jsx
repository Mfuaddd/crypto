import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { fetchContext } from "./contexts/FetchContext";
import { useContext, useEffect } from "react";

function App() {
  const { getDataLatest, getDataCurrencies, getDataTimeseries } = useContext(fetchContext);

  useEffect(() => {
    getDataLatest();
    getDataCurrencies();
    getDataTimeseries();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
