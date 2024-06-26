
import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/Coreconcept.jsx';
import { TabButton } from './components/TabButton.jsx'
import { EXAMPLES } from './data.js';
// import { Examples } from './components/Examples.jsx';
import Tabs from './components/Tabs.jsx';







function App() {
  const [selectedTopic, setSelectedTopic] = useState('')
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((_, index) => (
              <CoreConcept
                {...CORE_CONCEPTS[index]}
              />
            ))}
          </ul>
        </section>

        <section id='examples'>
        <Tabs 
        buttons={
          <>
          <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </>
        }> 
        {
          <>    <h2>Examples</h2>
          {selectedTopic ? <div id="tab-content">

            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div> : <p> Please Select a topic</p>}
</>
        }
        </Tabs>
      
        </section>
      
      </main>
    </div>
  );
}

export default App;
