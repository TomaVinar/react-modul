import {Routes, Route} from "react-router";

import Layout from "./components/Layout/Layout";
import CharactersPage from "./Pages/CharactersPage/CharactersPage";
import LocationsPage from "./Pages/LocationsPage/LocationsPage";
import EpisodesPage from "./Pages/EppisodesPage/EpisodesPage";

function App() {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'character'} element={<CharactersPage/>}/>
                    <Route path={'location'} element={<LocationsPage/>}/>
                    <Route path={'episode'} element={<EpisodesPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;

