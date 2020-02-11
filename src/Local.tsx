import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";

interface ILocal {
  name: string;
}

const Local = (props: ILocal) => {
  const newName = useLocalStore(source => {
    return {
      name: source.name
    };
  }, props);

  return (
    <>
      <h2>Local Store</h2>
      <p>{newName.name}</p>
      <button onClick={() => (newName.name = "Alien Cyborj")}>
        I want to be Alien Cyborj
      </button>
    </>
  );
};
export default observer(Local);
