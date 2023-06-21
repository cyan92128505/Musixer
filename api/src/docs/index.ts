import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import fs from "fs-extra";
import path from "path";

export async function ApiDocs(app: Express) {
  const swaggerFile = await fs.readJSON(
    path.join(process.cwd(), "swagger-output.json")
  );

  app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
}
