import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
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
