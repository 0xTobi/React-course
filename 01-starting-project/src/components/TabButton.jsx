export function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* <button>{props.text}</button> */}
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
