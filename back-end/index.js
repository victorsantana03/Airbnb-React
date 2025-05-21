import "dotenv/config";
import { app } from "./server.js";
import { fileURLToPath } from "url";
import { dirname } from "node:path";

export const _filename = fileURLToPath(import.meta.url);
export const _dirname = dirname(_filename);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`App na porta ${PORT}`);
});
