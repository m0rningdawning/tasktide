"use client";

import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return (
    <div className="flex flex-row">
      <ol>
        <ListForm />
        <div className="flex-shrink-0 w-1" />
      </ol>
    </div>
  );
};
