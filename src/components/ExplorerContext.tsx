import { createContext } from "react";
import type { ReactNode } from "react";

import useContextMenu from "@/hooks/useContextMenu";
import { ExplorerContextType } from "@/types/type";

export const ExplorerContext = createContext<ExplorerContextType>({});

export default function ExplorerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    clicked,
    setClicked,
    points,
    setPoints,
    selectedFile,
    setSelectedFile,
  } = useContextMenu();

  return (
    <ExplorerContext.Provider
      value={{
        clicked,
        setClicked,
        points,
        setPoints,
        selectedFile,
        setSelectedFile,
      }}
    >
      {children}
    </ExplorerContext.Provider>
  );
}
