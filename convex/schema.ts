import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Data: defineTable({
    title: v.string(),
    players: v.array(v.object({ name: v.string(), score: v.number(), color: v.string(), index: v.number() }))
  })
});
