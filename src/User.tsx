import React, { useEffect } from "react";
import { useObserver } from "mobx-react-lite";

import useStores from "./hooks/use-stores";

import Local from "./Local";

export default function() {
  const { userStore } = useStores();

  useEffect(() => {
    userStore.name = "Nelsie Borja";
    userStore.job = "Frontend Engineer";
  }, []);

  return useObserver(() => (
    <div>
      <div>
        <h2>User Store</h2>
        <p>[name]: {userStore.name}</p>
        <p>[job]: {userStore.job}</p>
      </div>
      <Local name={userStore.name} />
    </div>
  ));
}
