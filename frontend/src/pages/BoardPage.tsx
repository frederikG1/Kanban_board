import { useState } from "react";
import Draggable from "../stores/Draggable";
import Droppable from "../stores/Droppable";
import { DragDropProvider } from "@dnd-kit/react";
import "./BoardPage.css";

export default function BoardPage() {
  const targets = ["A", "B", "C"];
  const [target, setTarget] = useState<string | number | undefined>();
  const draggable = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <div className="board-content">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          setTarget(event.operation.target?.id);
        }}
      >
        {!target ? draggable : null}

        {targets.map((id) => (
          <Droppable key={id} id={id}>
            {target === id ? draggable : `Droppable ${id}`}
          </Droppable>
        ))}
      </DragDropProvider>
    </div>
  );
}
