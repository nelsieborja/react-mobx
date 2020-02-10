import React from "react";
import { useObserver } from "mobx-react-lite";

import useStores from "./hooks/use-stores";

export default function() {
  const { counterStore } = useStores();

  return useObserver(() => (
    <>
      <h2>Counter Store</h2>
      <button onClick={() => counterStore.increment()}>+</button>
      <span>
        {" "}
        {counterStore.count} / {counterStore.doubleCount}{" "}
      </span>
      <button onClick={() => counterStore.decrement()}>-</button>
    </>
  ));
}
