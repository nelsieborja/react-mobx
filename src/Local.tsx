import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";

export default observer(function(props) {
  const newName = useLocalStore(source => {
    console.log("local", source); // NOT PICKING UP THE UPDATED PROP VALUE!
    return {
      name: source.name
    };
  }, props);

  return (
    <>
      <h2>Local Store</h2>
      <p>{newName.name || props.name}</p>
      <button onClick={() => (newName.name = "Alien Cyborj")}>
        I want to be Alien Cyborj
      </button>
    </>
  );
});
