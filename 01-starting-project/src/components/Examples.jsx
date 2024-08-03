import { useState } from "react";
import { TabButton } from "./TabButton";
import { TabContent } from "./TabContent";
import { EXAMPLES } from "../data";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* <TabButton text="components"/> */}
          <TabButton
            onSelect={() => handleSelect("components")}
            isSelected={selectedTopic === "components"}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("jsx")}
            isSelected={selectedTopic === "jsx"}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("props")}
            isSelected={selectedTopic === "props"}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => handleSelect("state")}
            isSelected={selectedTopic === "state"}
          >
            State
          </TabButton>
        </menu>
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <TabContent
            title={EXAMPLES[selectedTopic].title}
            description={EXAMPLES[selectedTopic].description}
            code={EXAMPLES[selectedTopic].code}
          />
        )}
      </section>
    </>
  );
}
