import { CoreConcepts } from "./components/CoreConceptss";
import { Header } from "./components/Header/Header";
import { Examples } from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
