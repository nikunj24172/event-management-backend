const express = require("express");
const app = express();
app.use(express.json());

const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./databases/connection");
connectDB();
const port = 5000;
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ["http://localhost:5173","https://event-management-frontend-woad.vercel.app"]}));
const routes = require("./routes/EventRoutes");
app.use("/api", routes);


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
