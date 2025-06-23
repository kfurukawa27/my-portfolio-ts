import express from 'express';
import { ProjectController } from './controllers/ProjectController';

const app = express();
const port = 3000;

//Middleware para parsear JSON no corpo das requisições
app.use(express.json());

//Instancia o controlador
const projectController = new ProjectController();

// Rotas para Projetos
app.get('/projects', projectController.getAllProjects);
app.get('/projects/:id', projectController.getProjectById);
app.post('/projects', projectController.createProject);
app.put('/projects/:id', projectController.updateProject);
app.delete('/projects/:id', projectController.deleteProject);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

