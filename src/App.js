import { Route, Routes } from "react-router-dom";

import AllMeetsPage from "./pages/AllMeetUps";
import FavoritePage from "./pages/Favourites";
import NewMeetsPage from "./pages/NewMeets";

import NavBar from './components/layout/navBar'
function App() {
  return (
    <div>
   <NavBar/>
      <Routes>
        <Route path="/" element={ <AllMeetsPage />}>
          
        </Route>
        <Route path="/new" element={ <NewMeetsPage />}>
     
        </Route>
        <Route path="/fav" element={ <FavoritePage />}>
     
        </Route>
      </Routes>
    </div>
  );
}

export default App;
