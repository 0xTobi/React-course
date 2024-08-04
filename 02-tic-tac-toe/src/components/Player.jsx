import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [updatedName, setUpdatedName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    setUpdatedName(event.target.value);
  }

  return (
    <>
      <li>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              required
              value={updatedName}
              onChange={handleNameChange}
            />
          ) : (
            <span className="player-name">{updatedName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
