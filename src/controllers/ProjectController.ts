import {Request, Response} from 'express';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { ProjectService } from '../services/ProjectService';

const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);

/**
 * Controlador para lidar com as requisições HTTP de Projetos.
 */

export class ProjectController {

    async getAllProjects(req: Request, res: Response): Promise<void> {
        
        try {
            const projects = await projectService.getAllProjects();
            res.status(200).json(projects);
        } catch (error: unknown) {
             if (error instanceof Error) { // Type guard to check if it's an Error instance
                res.status(500).json({ message: error.message });
            } else {
                // Handle cases where the error might not be an Error object
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }           
    }

    async getProjectById(req: Request, res: Response): Promise<void> {

        try {
            const { id } = req.params;
            const project = await projectService.getProjectById(id);

            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: "Project not found"});
            }

        } catch (error: unknown) {
             if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }        
    }

    async createProject(req: Request, res: Response): Promise<void> {
        try {
            const newProject = await projectService.createProject(req.body);
            res.status(201).json(newProject);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Error creating project'});
            }
        }
    }

    async updateProject(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updatedProject = await projectService.updateProject(id, req.body);

            if (updatedProject) {
                res.status(200).json(updatedProject)
            } else {
                res.status(404).json({ message: 'Project not found or could not be updated'});
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message})
            } else {
                res.status(500).json({ message: 'Error Updating Project.'})
            }
        }
    }

    async deleteProject(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleted = await projectService.deleteProject(id);
            if (deleted) {
                res.status(200).json(deleted)
            } else {
                res.status(404).json({ message: 'Project not found or could not be deleted'})
            }
        } catch (error: unknown) {
            if(error instanceof Error) {
                res.status(500).json({ message: error.message})
            }
        }
    }
}
