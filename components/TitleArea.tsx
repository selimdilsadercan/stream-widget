"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

interface Props {
  className?: string;
  data: Doc<"Data">;
}

function TitleArea({ className, data }: Props) {
  const updateTitle = useMutation(api.Data.updateTitle);

  return (
    <div className="w-full h-fit flex flex-col justify-start items-start gap-2.5">
      <div className="w-full h-fit flex flex-row justify-between items-center px-2">
        <p className="w-fit h-fit font-semibold text-mavi-600 text-sm text-start">Başlık</p>
      </div>
      <Input
        className="bg-mavi-200 rounded-md border border-mavi-300 text-mavi-600"
        value={data.title}
        onChange={(e) => updateTitle({ id: data._id, title: e.target.value })}
      />
    </div>
  );
}

export default TitleArea;
