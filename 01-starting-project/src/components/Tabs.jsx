export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonContainer = buttonsContainer; // We need the value of the buttonsContainer, so we have to store it inside a variable that starts with Uppercase letter, that way REACT doesn't treat it as a built in component.
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
