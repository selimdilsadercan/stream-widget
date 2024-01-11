import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const initiliaze = mutation({
  handler: async (ctx) => {
    const document = await ctx.db.insert("Data", {
      title: "Puan Sıralaması",
      players: [
        { name: "zSuat", score: 0, color: "#0000ff", index: 0 },
        { name: "Elyysoon", score: 0, color: "#ff0000", index: 1 },
        { name: "Mr. C", score: 0, color: "#ffff00", index: 2 }
      ]
    });
    return document;
  }
});

export const getData = query({
  handler: async (ctx) => {
    const data = await ctx.db.query("Data").order("desc").collect();
    return data;
  }
});

export const updateTitle = mutation({
  args: {
    id: v.id("Data"),
    title: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const data = await ctx.db.patch(args.id, { title: args.title });
    return data;
  }
});

export const updateList = mutation({
  args: {
    id: v.id("Data"),
    list: v.optional(v.array(v.object({ name: v.string(), score: v.number(), color: v.string(), index: v.number() })))
  },
  handler: async (ctx, args) => {
    const data = await ctx.db.patch(args.id, { players: args.list });
    return data;
  }
});
