"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

function Page() {
  const result = useQuery(api.Data.getData);
  if (!result) return null;

  const data = result[0];

  return (
    <div className="flex flex-col items-start justify-start w-[200px] h-[200px]">
      <p className="w-fit h-fit font-semibold text-mavi-600 text-xl text-start">{data?.title}</p>
      {data?.players.map((player) => (
        <p key={player.name} className="w-fit h-fit font-semibold text-xl text-start" style={{ color: player.color }}>
          {player.name} : {player.score}
        </p>
      ))}
    </div>
  );
}

export default Page;
