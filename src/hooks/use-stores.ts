import { useContext } from "react";

import storesContext from "../contexts/stores-context";

const useStores = () => useContext(storesContext);

export default useStores;
