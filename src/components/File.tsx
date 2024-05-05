import React, { useState, useContext } from "react";

import { File as FileType } from "@/types/types";
import { FileIconMapping } from "@/data/data";
import { ExplorerContext } from "./ExplorerContext";

export default function File({ name, meta = "file" }: FileType) {
  const {setClicked, setPoints, setSelectedFile} = useContext(ExplorerContext)
  const [selected, setSelected] = useState(false);

  function toggle(): void {
    setSelected(v => !v);
  }

  function handleContextMenuClick(e: React.MouseEvent) {
    e.preventDefault();
    setClicked(true);
    setPoints({
      x: e.pageX,
      y: e.pageY,
    });
    setSelectedFile(name);
  }

  return (
    <div
      className={`file ${selected ? 'selected' :''}`}
      onClick={toggle}
      onContextMenu={handleContextMenuClick}
    >
        <img src={FileIconMapping[meta]} />
        <h6>{name}</h6>
    </div>
  );
}
