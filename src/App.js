import { Route, Routes } from "react-router-dom";

import AllMeetsPage from "./pages/AllMeetUps";
import FavoritePage from "./pages/Favorites";
import NewMeetsPage from "./pages/NewMeets";

import Layout from "./components/layout/layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetsPage />}></Route>
        <Route path="/new" element={<NewMeetsPage />}></Route>
        <Route path="/fav" element={<FavoritePage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
