import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Section title={"Examples"} id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                onClick={() => handleSelect("components")}
                isSelected={selectedTopic === "components"}
              >
                Components
              </TabButton>
              <TabButton
                onClick={() => handleSelect("jsx")}
                isSelected={selectedTopic === "jsx"}
              >
                JSX
              </TabButton>
              <TabButton
                onClick={() => handleSelect("props")}
                isSelected={selectedTopic === "props"}
              >
                Props
              </TabButton>
              <TabButton
                onClick={() => handleSelect("state")}
                isSelected={selectedTopic === "state"}
              >
                State
              </TabButton>
            </>
          }
        >
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <TabContent
              title={EXAMPLES[selectedTopic].title}
              description={EXAMPLES[selectedTopic].description}
              code={EXAMPLES[selectedTopic].code}
            />
          )}
        </Tabs>
      </Section>
    </>
  );
}
