import { Application } from "../deps.ts";
import notFound from "./middlewares/notFound.ts";

const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);

const app = new Application();

app.use(notFound);

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
