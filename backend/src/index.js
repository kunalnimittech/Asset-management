import "dotenv/config";
import { createServer } from "./app.js";

async function startServer() {
  try {
    const app = createServer();
    const port = process.env.PORT || 3000;


    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });

  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

startServer();
