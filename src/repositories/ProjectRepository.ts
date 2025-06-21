import { Project, CreateProjectDTO, UpdateProjectDTO } from "../models/Project";
import { v4 as uuidv4 } from 'uuid'

let projects: Project[] = [];

/**
 * Repositório responsável pelas operações CRUD com Projetos.
 */

export class ProjectRepository {
    /**
     * Retorna todos os projetos
     */
    async findAll(): Promise<Project[]> {
        return projects;
    }

    /**
     * Encontra um projeto pelo ID
     * @param id O ID do projeto
     */
    async findById(id: string): Promise<Project | undefined>{
        return projects.find(project => project.id === id)
    }

    /**
     * Cria um novo projeto
     * @param data Os dados do novo Projeto
     */
    async create(data: CreateProjectDTO): Promise<Project> {
        const newProject: Project = {
            id: uuidv4(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        projects.push(newProject);
        return newProject;
    }

    /**
     * Atualiza um projeto existente
     * @param id O ID do projeto a ser atualizado
     * @param data Os dados para atualização
     */
    async update(id: string, data: UpdateProjectDTO): Promise<Project | undefined> {
        const projectIndex = projects.findIndex(project => project.id === id);

        if (projectIndex === -1) {
            return undefined;
        }

        const updatedProject = {
            ...projects[projectIndex],
            ...data,
            updatedAt: new Date()
        };

        projects[projectIndex] = updatedProject;
        return updatedProject;
    }

    /**
     * Deleta um projeto.
     * @param id O ID do projeto a ser deletado.
     * @returns true se o projeto foi deletado, false caso contrário.
     */

    async delete(id: string): Promise<boolean> {
        const initialLength = projects.length;
        projects = projects.filter(project => project.id !== id);
        return projects.length < initialLength; //Retorna true se um item foi removido
    }
}