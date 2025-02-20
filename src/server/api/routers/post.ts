import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

// Mocked DB
interface Post {
  id: number;
  name: string;
  claps: bigint;
}
const posts: Post[] = [
  {
    id: 1,
    name: "Hello World",
    claps: 0n,
  },
];

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        claps: z.bigint().default(0n),
      }),
    )
    .mutation(async ({ input }) => {
      const post: Post = {
        id: posts.length + 1,
        name: input.name,
        claps: input.claps,
      };
      posts.push(post);
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return posts.at(-1) ?? null;
  }),
});
