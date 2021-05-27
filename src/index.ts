import express from "express";
import swaggerUi from 'swagger-ui-express'
import swagger from './swagger.json'

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use('/api', swaggerUi.serve, swaggerUi.setup(swagger));

app.use("/users", usersRoutes);

export { app };
