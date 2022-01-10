import { FC, ReactNode, ComponentType } from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type ComponentProps = {
  component: ComponentType;
  args: ReactNode;
};

export const ProtectedRoute: FC<ComponentProps> = ({ component, args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <h1>Loading</h1>,
    })}
    {...args}
  />
);
