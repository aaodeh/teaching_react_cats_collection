import { Switch, Route } from "react-router-dom";
import CatCards from "./CatCards";
import Map from "./Map";
import Duel from "./Duel";

const Main = ({
  filteredContacts,
  handleSearchText,
  handleCatClick,
  AddCat
}) => {
  return (
    <div className="main">
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <CatCards
              filteredContacts={filteredContacts}
              handleSearchText={handleSearchText}
              AddCat={AddCat}
            />
          )}
        />
        <Route
          exact
          path="/duel"
          component={() => <Duel filteredContacts={filteredContacts} />}
        />
        <Route
          exact
          path="/map"
          component={() => (
            <Map data={filteredContacts} style={{ height: 100, width: 100 }} />
          )}
        />
      </Switch>
    </div>
  );
};

export default Main;
