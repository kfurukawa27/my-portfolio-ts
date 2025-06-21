import { Project } from "../models/Project";
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
}

