import { useContext, MouseEvent } from "react";

import { ExplorerContext } from "@/components/ExplorerContext";
import { ExplorerContextType } from "../types/types";

const actions = [
  {
    name: "Rename",
  },
  {
    name: "Edit",
  },
  {
    name: "Delete",
  },
];

export default function ContextMenu() {
  const { selectedFile, points } = useContext(ExplorerContext) as ExplorerContextType;

  function handleAction(e: MouseEvent) {
    console.log(`${e.target.innerText} - ${selectedFile}`);
  }

  return (
    <div className="contextMenu" style={{left: points.x, top: points.y}}>
      <h6>{selectedFile}</h6>

      <div className="actions">
      {actions.map((action) => (
        <button key={action.name} onClick={handleAction}>
          {action.name}
        </button>
      ))}
      </div>
    </div>
  );
}
