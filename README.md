# Descrição do Projeto

Este é o backend de uma API para gerenciar os projetos do meu portfólio pessoal. Desenvolvido com TypeScript, Node.js e Express, ele oferece uma interface CRUD (Create, Read, Update, Delete) completa para adicionar, visualizar, editar e remover informações sobre meus projetos de desenvolvimento.

A arquitetura do projeto segue princípios de separação de preocupações, utilizando camadas de Model, Repository, Service e Controller, o que o torna escalável, manutenível e fácil de testar.

## Funcionalidades
* Criação de Projetos: Adicione novos projetos ao seu portfólio com detalhes como nome, descrição, tecnologias, URLs de GitHub e demonstração.
* Listagem de Projetos: Obtenha uma lista completa de todos os projetos cadastrados.
* Detalhes do Projeto: Consulte informações detalhadas de um projeto específico pelo seu ID.
* Atualização de Projetos: Modifique os dados de projetos existentes.
* Exclusão de Projetos: Remova projetos do seu portfólio.

## Tecnologias Utilizadas
* TypeScript: Superconjunto tipado de JavaScript, para código mais robusto e escalável.
* Node.js: Ambiente de execução JavaScript no lado do servidor.
* Express.js: Framework web rápido e minimalista para Node.js.
* uuid: Biblioteca para geração de IDs únicos (UUIDs).
* ts-node: Executa arquivos TypeScript diretamente sem a necessidade de compilação prévia (ótimo para desenvolvimento).
* nodemon: Monitora o código e reinicia o servidor automaticamente em caso de mudanças (para agilizar o desenvolvimento).
