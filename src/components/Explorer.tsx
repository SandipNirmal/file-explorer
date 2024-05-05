import { useContext } from "react";

import ContextMenu from "./ContextMenu";
import Directory from "./Directory";
import ExplorerProvider, { ExplorerContext } from "./ExplorerContext";
import { File } from "@/types/types";

function Explorer(props: File) {
  const { clicked } = useContext(ExplorerContext);

  return (
    <div className="explorer">
      <Directory {...props} />
      {clicked ? <ContextMenu /> : null}
    </div>
  );
}

export default function Provider(props: File) {
  return (
    <ExplorerProvider>
      <Explorer {...props} />
    </ExplorerProvider>
  );
}
