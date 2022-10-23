import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default withRouter(Routes);
