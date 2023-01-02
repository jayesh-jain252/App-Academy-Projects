import harvardArt from "./data/harvardArt.js";
import GalleryNavigation from "./components/GalleryNavigation";
import { Switch, Route } from "react-router-dom";
import GalleryView from "./components/GalleryView";
import "./index.css";
function App() {
  console.log(harvardArt);
  return (
    <div className="app">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path={"/galleries/:galleryId"}>
          <GalleryView galleries={harvardArt.records}></GalleryView>
        </Route>
        <Route exact path={"/"}>
          <h2 className="harvard-art">Harvard Art Museum</h2>
          <p className="harvard-art-p">
            Look but don't touch. Please select a gallery in the navigation bar
          </p>
        </Route>
        <Route>
          <h2 className="harvard-art"> Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
