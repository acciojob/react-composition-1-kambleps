
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs.js"

const App = () => {
  const tabs = [
    {
      title: 'Tab 1',
      content: 'This is the content of Tab 1.',
    },
    {
      title: 'Tab 2',
      content: 'This is the content of Tab 2.',
    },
    {
      title: 'Tab 3',
      content: 'This is the content of Tab 3.',
    },
  ];
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabs}/>
    </div>
  )
}

export default App
