function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function MainGoal() {
  return <p>My main goal: Learn React in-depth and from the ground up</p>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!*!</h2>
      </main>
      <MainGoal />
    </div>
  );
}

export default App;
