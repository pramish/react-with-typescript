import { FC, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
export const AuthProvider: FC<ReactNode> = ({ children }) => {
  const history = useHistory();
  const domain = `${process.env.REACT_APP_AUTH0_DOMAIN}`;
  const clientId = `${process.env.REACT_APP_AUTH0_CLIENT_ID}`;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};
