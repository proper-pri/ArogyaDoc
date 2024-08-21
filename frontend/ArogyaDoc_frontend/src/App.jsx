import React from "react";
import AppRoutes from "./Routes";
import store from "./redux/store/reduxStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        
          <AppRoutes />
      
      </Provider>
    </>
  );
}

export default App;
