
/**
 * Interface que define a estrutura de um Projeto
 */
export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    githubUrl?: string; // Opcional
    liveUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Interface para a criação de um novo Projeto (sem o ID e datas iniciais)
 */

export interface CreateProjectDTO {
    name: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

/**
 * Interface para a atualização de um Projeto (todos os campos são opcionais)
 */

export interface UpdateProjectDTO {
    name?: string;
    description?: string;
    technologies?: string[];
    githubUrl?: string;
    liveUrl?: string;
}
