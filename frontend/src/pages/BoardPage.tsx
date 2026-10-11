import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import "./BoardPage.css";
import Columns from "../components/Columns";
import type { ColumnData } from "../types";

export default function BoardPage() {
  const [cardColumnId, setCardColumnId] = useState<string | number>(1);

  const columns: ColumnData[] = [
    { id: 1, title: "To do", position: 0 },
    { id: 2, title: "In progress", position: 1 },
    { id: 3, title: "Done", position: 2 },
  ];

  return (
    <div className="board-content">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          const targetId = event.operation.target?.id;
          if (targetId === undefined) return;
          setCardColumnId(targetId);

          
        }}
      >
        <Columns columns={columns} cardColumnId={cardColumnId} />
      </DragDropProvider>
    </div>
  );
}
