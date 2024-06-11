// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import helmet from "helmet";
// import morgan from "morgan";
// import dbConnection from "./dbConfig/index.js";

// import errorMiddleware from "./middleware/errorMiddleware.js";
// import routes from "./routes/index.js";

// dotenv.config();

// const app = express();
// const PORT =  8000;

// dbConnection();

// app.use(helmet());
// app.use(cors());
// // app.use(cors({ origin: true, credentials: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan("dev"));

// app.use(routes);

// app.use(errorMiddleware);

// app.listen(PORT, () => {
//      console.log("Server running of port " + PORT);
// });

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dbConnection from "./dbConfig/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Establish database connection
dbConnection();

// Middleware
app.use(helmet());
app.use(cors()); // You can configure CORS options if needed
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use(routes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
