import { useState } from "react";

import { File as FileType } from "@/types/types";
import { FileIconMapping } from "@/data/data";

export default function File({ name, meta = "file" }: FileType) {
  const [selected, setSelected] = useState(false);

  function toggle(): void {
    setSelected(v => !v);
  }

  return (
    <div className={`file ${selected ? 'selected' :''}`} onClick={toggle}>
        <img src={FileIconMapping[meta]} />
        <h6>{name}</h6>
    </div>
  );
}
