import type React from "react";
import type { ColumnData } from "../types";
import Droppable from "./Droppable";

type ColumnsProps = {
  column: ColumnData;
  children?: React.ReactNode;
};

export default function Column({ column, children }: ColumnsProps) {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <Droppable id={column.id} className="column-cards">
        {children}
      </Droppable>
    </div>
  );
}
