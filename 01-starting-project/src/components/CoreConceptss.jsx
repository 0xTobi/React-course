import { CoreConcept } from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data";

export function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}

          {/* <CoreConcept concept={CORE_CONCEPTS[0]} /> */}
          {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}

          {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        </ul>
      </section>
    </>
  );
}
