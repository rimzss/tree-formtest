"use client";
import { PropsWithChildren, createContext, useState } from "react";
import { Node } from "@/types";

interface ICreateTreeContext {
  nestedObject: Node;
  setNestedObject: React.Dispatch<React.SetStateAction<any>>;
}
export const treeContext = createContext<ICreateTreeContext>(
  {} as ICreateTreeContext
);

const TreeProvider = ({ children }: PropsWithChildren) => {
  const [nestedObject, setNestedObject] = useState<Node>({
    id: 1,
    name: "Root",
    children: [],
  });
  return (
    <treeContext.Provider value={{ nestedObject, setNestedObject }}>
      {children}
    </treeContext.Provider>
  );
};
export default TreeProvider;
