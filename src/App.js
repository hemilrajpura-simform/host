import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(() => import("Remote/App"));
const Header = React.lazy(() => import("Remote/Header"));
const Todos = React.lazy(() => import("Remote/Todos"));

const RemoteWrapper = ({ children }) => (
  <div>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div className="app-main">
    <RemoteWrapper>
      <Header />
    </RemoteWrapper>

    <RemoteWrapper>
      <Todos />   
    </RemoteWrapper>
  </div>
);
export default App;     