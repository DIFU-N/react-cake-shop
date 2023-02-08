// import { useState } from 'react';
import { CakeView } from "./features/cake/cakeView";
import { UserView } from "./features/user/userView";
import { IceCreamView } from "./features/ice cream/iceCreamView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
