import { BrowserRouter, Switch, Route } from "react-router-dom";
import Map from "./Map";
import Duel from "./Duel";
import Cats from "./Cats";

const Main = ({ AddCat, HandleSearchText }) => {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Duel path="/duel" />
          <Map path="/map" style={{ height: 100, width: 100 }} />
          <Cats
            exact
            path="/"
            HandleSearchText={HandleSearchText}
            AddCat={AddCat}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Main;
