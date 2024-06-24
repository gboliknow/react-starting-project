
import { Fragment, useState } from 'react';
import { Header } from './components/Header/Header.jsx';



function App() {
  const [selectedTopic, setSelectedTopic] = useState('')
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  return (
    <Fragment>
      <Header />
      <main>
      <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
