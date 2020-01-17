import React from 'react';
import useTabs from './hooks/useTabs';

function App() {
  const contents = [
    {
      title: 1,
      content: "I am tab 1!"
    },
    {
      title: 2,
      content: "I am tab 2!"
    },
    {
      title: 3,
      content: "I am tab 3!"
    },
    {
      title: 4,
      content: "I am tab 4!"
    },
  ];
  const tabs = useTabs(0, contents);
  return (
    <div className="App">
      {contents.map((tab, i) => <button key={i} onClick={() => tabs.changeTab(i)}>{tab.title}</button>)}
      {tabs.currentTab.content}
    </div>
  );
}

export default App;
