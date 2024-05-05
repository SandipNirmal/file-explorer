import { useState } from "react";

import folderIcon from "/assets/folder.svg";
import folderOpenIcon from "/assets/folder_open.svg";
import { File, FileTypes } from "@/types/types";
import FileComp from "./File";

export default function Directory({
  type,
  name,
  data = [],
  meta = "file",
}: File) {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen((v) => !v);
  }

  const isDirectory = type === FileTypes.directory;

  if (isDirectory) {
    return (
      <div className="directory">
        <div className="file" onClick={toggle}>
          <img src={isOpen ? folderOpenIcon : folderIcon} />
          <h5>{name}</h5>
        </div>
        {isOpen ? (
          <ul>
            {data.map((item: File) => (
              <Directory {...item} key={item.name} />
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  return <FileComp name={name} meta={meta} />;
}
