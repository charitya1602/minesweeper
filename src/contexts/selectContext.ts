import { createContext } from "react";

type contextType = {
  select: (i: number, j: number) => void;
  toogleFlag: (i: number, j: number) => void;
};

const selectContext = createContext<contextType>({
  select: (i, j) => {},
  toogleFlag: (i, j) => {},
});

export default selectContext;
