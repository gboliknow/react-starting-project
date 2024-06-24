
import { Fragment, useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { Header } from './components/Header/Header.jsx';
import { CoreConcepts } from './components/Coreconcepts.jsx';
import { TabButton } from './components/TabButton.jsx'
import { EXAMPLES } from './data.js';






function App() {
  const [selectedTopic, setSelectedTopic] = useState('')
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  return (
    <Fragment>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((_, index) => (
              <CoreConcepts
                {...CORE_CONCEPTS[index]}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic ? <div id="tab-content">

            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div> : <p> Please Select a topic</p>}

        </section>

      </main>
    </Fragment>
  );
}

export default App;
