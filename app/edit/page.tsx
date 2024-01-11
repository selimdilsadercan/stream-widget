"use client";

import { useMutation, useQuery } from "convex/react";
import { Grip, Minus, Pencil, Plus, PlusCircle } from "lucide-react";
import { Droppable, DragDropContext, Draggable } from "@hello-pangea/dnd";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import TitleArea from "@/components/TitleArea";

function Page() {
  const result = useQuery(api.Data.getData);
  if (!result) return null;

  const data = result[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-start items-center overflow-y-scroll z-1">
      <div className="w-full h-full max-w-[800px] flex flex-col md:flex-row justify-tart items-center md:items-start gap-8 p-5">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2.5">
          <div className="w-full h-fit flex flex-row justify-between items-center px-2">
            <p className="w-fit h-fit font-semibold text-mavi-600 text-sm text-start">Ön İzleme</p>
          </div>
          <div className="w-full h-[300px] flex flex-col justify-start items-start gap-2 p-3 bg-mavi-200 rounded-md border border-mavi-300">
            <p className="w-fit h-fit font-semibold text-mavi-600 text-xl text-start">{data?.title}</p>
            {data?.players.map((player) => (
              <p key={player.name} className="w-fit h-fit font-semibold text-xl text-start" style={{ color: player.color }}>
                {player.name}: {player.score}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full h-fit flex flex-col justify-start items-center gap-8">
          <TitleArea data={data} />

          <div className="w-full h-fit flex flex-col justify-start items-start gap-2.5">
            <div className="w-full h-fit flex flex-row justify-between items-center px-2">
              <p className="w-fit h-fit font-semibold text-mavi-600 text-sm text-start">Kişiler</p>
              <div className="w-fit h-fit flex flex-row justify-start items-center gap-1">
                <PlusCircle className="text-mavi-600" size={12} />
                <p className="w-fit h-fit overflow-visible font-medium text-mavi-600 text-sm text-start">Ekle</p>
              </div>
            </div>
            <DragDropContext onDragEnd={() => {}}>
              <Droppable droppableId="chapters">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="w-full h-fit flex flex-col justify-start items-start gap-2.5 p-3 bg-mavi-200 rounded-md border border-mavi-300"
                  >
                    {data.players.map((player, index) => (
                      <Draggable key={player.name} draggableId={player.name} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="w-full h-fit flex flex-row justify-between items-center gap-x-2 bg-slate-200 border text-slate-700 rounded-md text-sm"
                          >
                            <div
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              className="px-2 py-3 border-r border-r-slate-200 hover:bg-slate-300 rounded-l-md transition"
                            >
                              <Grip size={20} />
                            </div>

                            <div className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: player.color }}></div>

                            {player.name}

                            <div className="ml-auto w-[62px] h-fit flex flex-row justify-between items-center p-1 rounded-sm border border-[#606A80] mr-2">
                              <p className="w-fit h-fit overflow-visible font-medium text-mavi-600 text-sm text-start">{player.score}</p>
                              <div className="w-fit h-fit flex flex-row justify-center items-center gap-1">
                                <Plus size={12} className="text-mavi-600" />
                                <Minus size={12} className="text-mavi-600" />
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
