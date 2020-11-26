import * as React from "react";
import { FirebaseContext } from "../service";
import ControlledDisplay from "./ControlledDisplay";

interface PrivateRouteProps {
  data: any;
}
const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { authToken } = React.useContext(FirebaseContext);
  // console.log(authToken, "pr");
  if (!authToken) {
    return <ControlledDisplay data={props.data} />;
  }
  return <>{props.children}</>;
};
export default PrivateRoute;
