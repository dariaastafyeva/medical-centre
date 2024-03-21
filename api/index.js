import express from "express"
import employeeRoutes from "./routes/employees.js"
import articleRoutes from "./routes/articles.js"
import experienceRoutes from "./routes/experiences.js"

const app = express();

app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/experiences', experienceRoutes);

app.listen(8800, () => {
    console.log("connected!");
});