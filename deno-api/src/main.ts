import { Application } from "../deps.ts";
import notFound from "./middlewares/notFound.ts";
import initRouters from "./routers/index.ts";


const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);

const app = new Application();

initRouters(app);
app.use(notFound);

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
