import { useState } from "react";
import { File, FileTypes } from "../types/types";

export default function Directory({ type, name, data = [] }: File) {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen((v) => !v);
  }

  const isDirectory = type === FileTypes.directory;

  if (isDirectory) {
    return (
      <div>
        <h5 onClick={toggle}>{name}</h5>
        {isOpen ? (
          <ul>
            {data.map((item) => (
              <Directory {...item} key={item.name} />
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <h5>{name}</h5>
    </div>
  );
}
