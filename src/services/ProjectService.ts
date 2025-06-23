import { CreateProjectDTO, Project, UpdateProjectDTO } from "../models/Project";
import { ProjectRepository } from "../repositories/ProjectRepository";

/**
 * Serviço responsável pela lógica de negócio de Projetos.
 * Ele orquestra as operações, utilizando o repositório.
 */
export class ProjectService {
    private projectRepository: ProjectRepository;

    constructor(projectRepository: ProjectRepository) {
        this.projectRepository = projectRepository;
    }

        /**
     * Obtém todos os projetos. Pode adicionar lógica de paginação, filtros aqui.
     */
    async getAllProjects(): Promise<Project[]> {
        return this.projectRepository.findAll();
    }

    /**
     * Cria um novo projeto, aplicando validações ou lógicas de negócio;
     * @param projectData Os dados do novo projeto.
     */

    async createProject(projectData: CreateProjectDTO): Promise<Project> {
        //Garantir que o nome não está vazio
        if (!projectData.name || projectData.name.trim() === '') {
            throw new Error('Project name cannot be empty')
        }

        return this.projectRepository.create(projectData)
    }

    /**
     * Atualiza um projeto existente
     * @param id O id do projeto a ser atualizado
     * @param projectData Os dados para atualização
     */

    async updateProject(id: string, projectData: UpdateProjectDTO): Promise<Project | undefined> {
        const existingProject = await this.projectRepository.findById(id);
        if (!existingProject) {
            return undefined;
        }

        return this.projectRepository.update(id, projectData);
    }

    /**
     * Deleta um projeto, com possíveis verificações de negócio
     * @param id O id do projeto a ser deletado
     */

    async deleteProject(id: string): Promise<boolean> {
        const existingProject = this.projectRepository.findById(id);

        if (!existingProject) {
            return false;
        }

        return this.projectRepository.delete(id);
    }
}

