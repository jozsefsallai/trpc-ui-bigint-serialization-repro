# trpc-ui-bigint-serialization-repro

```
git clone git@github.com:jozsefsallai/trpc-ui-bigint-serialization-repro.git
cd trpc-ui-bigint-serialization-repro
pnpm i
pnpm run dev
```

Then go to https://localhost:3000/api/panel

```
 ✓ Compiled /api/panel in 1315ms
 ⨯ TypeError: Do not know how to serialize a BigInt
    at JSON.stringify (<anonymous>)
    at GET (src/app/api/panel/route.ts:12:4)
  10 |
  11 |   return new NextResponse(
> 12 |     renderTrpcPanel(appRouter, {
     |    ^
  13 |       url: "/api/trpc", // Default trpc route in nextjs
  14 |       transformer: "superjson", // Enabled by default with create-t3-app
  15 |     }),
 ⨯ TypeError: Do not know how to serialize a BigInt
    at JSON.stringify (<anonymous>)
    at GET (src/app/api/panel/route.ts:12:4)
  10 |
  11 |   return new NextResponse(
> 12 |     renderTrpcPanel(appRouter, {
     |    ^
  13 |       url: "/api/trpc", // Default trpc route in nextjs
  14 |       transformer: "superjson", // Enabled by default with create-t3-app
  15 |     }),
 GET /api/panel 500 in 1720ms
```

Commit introducing the issue: https://github.com/jozsefsallai/trpc-ui-bigint-serialization-repro/commit/b9688ed27f1c6bd7cf51cc700fc54ea44c63b950
