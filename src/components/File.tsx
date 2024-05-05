import React, { useContext } from "react";

import { File as FileType } from "@/types/types";
import { FileIconMapping } from "@/data/data";
import { ExplorerContext } from "./ExplorerContext";

export default function File({ name, meta = "file" }: FileType) {
  const {setClicked, setPoints, setSelectedFile, selectedFile} = useContext(ExplorerContext)

  function handleContextMenuClick(e: React.MouseEvent) {
    e.preventDefault();
    setClicked(true);
    setPoints({
      x: e.pageX,
      y: e.pageY,
    });
    setSelectedFile(name);
  }

  function handleClick() {
    setSelectedFile(name);
  }

  // use unique id instead of name
  const selected = selectedFile === name;

  return (
    <div
      className={`file ${selected ? 'selected' :''}`}
      onClick={handleClick}
      onContextMenu={handleContextMenuClick}
    >
        <img src={FileIconMapping[meta]} />
        <h6>{name}</h6>
    </div>
  );
}
