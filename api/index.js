import express from "express"
import employeeRoutes from "./routes/employees.js"
import articleRoutes from "./routes/articles.js"
import experienceRoutes from "./routes/experiences.js"
import serviceRoutes from "./routes/services.js"
import scheduleRoots from "./routes/schedules.js"
import feedbackRoutes from "./routes/feedbacks.js"
import authRoutes from "./routes/auth.js"

const app = express();

app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/schedule', scheduleRoots);
app.use("/api/auth", authRoutes);



app.listen(8800, () => {
    console.log("connected!");
});