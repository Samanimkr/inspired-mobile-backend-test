import mongoose from "mongoose";
import app from "./app";

const PORT: string | number = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}/`));


const mongoConnectionStr: string = "mongodb://localhost/mydb";

mongoose.connect(mongoConnectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const db = mongoose.connection;

// Get notification of connection errors
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Database connected"));