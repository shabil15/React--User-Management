import express, { urlencoded } from "express";
import doteenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import conectDb from "./confiq/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

doteenv.config();

conectDb();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use("/api/admin", adminRouter);

app.get("/", (req, res) => res.send("Server is redy"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
