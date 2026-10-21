import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import Column from "../components/Column";
import type { ColumnData, CardData } from "../types";
import "./BoardPage.css";

export default function BoardPage() {
  const [columns] = useState<ColumnData[]>([
    { id: 1, title: "To do", position: 0 },
    { id: 2, title: "In progress", position: 1 },
    { id: 3, title: "Done", position: 2 },
  ]);

  const [cards, setCards] = useState<CardData[]>([
    { id: "c-1", columnId: 1, title: "Design login page" },
    { id: "c-2", columnId: 1, title: "Set up SQLite database" },
    { id: "c-3", columnId: 2, title: "Implement drag and drop" },
  ]);

  return (
    <div className="board-content">
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          const sourceCardId = event.operation.source?.id;
          const targetColumnId = event.operation.target?.id;

          if (!sourceCardId || targetColumnId === undefined) return;

          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === sourceCardId
                ? { ...card, columnId: Number(targetColumnId) }
                : card,
            ),
          );

          // Optional: Send a PATCH/PUT request to /api/cards/:id with targetColumnId
        }}
      >
        <div className="columns">
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              cards={cards.filter((card) => card.columnId === column.id)}
            />
          ))}
        </div>
      </DragDropProvider>
    </div>
  );
}
