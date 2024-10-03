# Natureza 365

Bem-vindo ao Natureza365. Esta é uma plataforma dedicada à preservação da natureza, permitindo aos usuários explorar, cadastrar e compartilhar informações sobre áreas naturais, trilhas, parques ecológicos, reservas ambientais e outros locais de interesse para amantes da natureza.


## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Usuários e locais](#usuários-e-locais)
- [Estrutura das Páginas](#estrutura-das-páginas)
- [Aprendizados](#aprendizados)
- [Possíveis Melhorias](#possíveis-melhorias)
- [Screenshots](#screenshots)
- [Histórico GITFLOW](#histórico-gitflow)
- [Video explicativo](#video-explicativo)


## Sobre o Projeto

**Natureza365** foi desenvolvido com o objetivo de incentivar a preservação ambiental por meio de uma plataforma colaborativa onde os usuários podem cadastrar locais de preservação da natureza e explorar os já existentes. A aplicação facilita o compartilhamento de informações sobre áreas preservadas e permite que os usuários contribuam para a conscientização e preservação desses locais.


## Funcionalidades

- **Cadastro de Usuários**: Permite que novos usuários se cadastrem na plataforma. O cadastro inclui informações como nome, sexo, CPF (único para cada usuário), data de nascimento, e-mail, senha e endereço.
- **Login**: Sistema de autenticação para que os usuários acessem suas contas.
- **Cadastro de Áreas de Preservação**: Usuários cadastrados podem adicionar novos locais de preservação, incluindo nome, descrição, endereço, e coordenadas geográficas.
- **Listagem de Locais**: Exibição de todos os locais cadastrados, com opção de visualizar detalhes, editar ou excluir os registros.
- **Dashboard**: Exibição de um resumo dos usuários e locais cadastrados, além de uma visão geral dos dados da plataforma.
- **Mapas e markers**: Exibição de um mapa na página home com todos os locais identificados com markers próprios que ao serem clicados exibem o nome e a descrição do local. Exibição também de um mapa único quando a página de um local específico é visualizado.
- **Responsividade**: Todas as páginas do sistema são responsivas e se adapatam aos diferentes tamanhos de tela.


## Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando as seguintes tecnologias e bibliotecas:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router Dom**: Para roteamento entre as páginas da aplicação.
- **React Hook Form**: Para gerenciamento de formulários.
- **Leaflet** e **React Leaflet**: Para renderização de mapas e localização de locais cadastrados.
- **Bootstrap**: Framework CSS para estilização responsiva.
- **JSON Server**: Simulação de uma API REST para persistência de dados durante o desenvolvimento.
- **Vite**: Ferramenta de build e servidor de desenvolvimento.
- **ESLint**: Ferramenta para análise de código estático e garantia de boas práticas.


## Instalação e Execução

Para rodar o **Natureza365** em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM instalado em sua máquina

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/FuturoDEV-Nature/M3P-FrontEnd-Squad3.git

2. Instale as dependências:
   ```bash
   npm install

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev 

4. Inicie o JSON Server para a simulação da API:
   ```bash
   npm run server

5. Acesse a aplicação em **http://localhost:5173**


## Usuários e locais

Ao acessar a aplicação pela primeira vez o servidor vai iniciar com usuários e locais já salvos para facilicar a visualização da aplicação em funcionamento. Caso não deseje criar um novo usuário os seguintes usuários e senhas podem ser utilizados para efetuar o login:

**email**: usuario01@email.com
**senha**: usuario01

**email**: usuario02@email.com
**senha**: usuario02

**email**: usuario03@email.com
**senha**: usuario03

**email**: usuario04@email.com
**senha**: usuario04

**email**: usuario05@email.com
**senha**: usuario05


## Estrutura das páginas

### Login

- Página para autenticação dos usuários
- Opções de login e redirecionamento para cadastro.

### Cadastro

- Página para cadastro dos usuários
- Opções de retorno ao login e redirecionamento automático ao cadastrar com sucesso.

### Dashboard / Home

- Exibe uma visão geral dos usuários e locais cadastrados.
- Inclui cards com contagens de usuários ativos e locais cadastrados.
- Exibe mapa com markers de todos os locais cadastrados no sistema.

### Cadastro da Área de Preservação

- Formulário para adicionar áreas de preservação
- Uso da API de CEP para preencher dados de endereço automaticamente.

### Listagem de áreas de preservação

- Lista todos os locais cadastrados com opções de editar, visualizar e excluir.

### Edição de um local

- Formulário já preenchido com os dados do local com possibilidade alteração de informações.


## Aprendizados

A construção da aplicação colocou em prática e aprimorou os conhecimentos em programação como:

- **Versionamento de código e uso do Github**
- **Utilização de Tags e Elementos semânticos de HTML**
- **Habilidade em CSS** como a utilização de seletores, estilos, layouts e flexbox
- **JavaScript**: Variáveis, Tipos de dados, Operadores, Manipulação do DOM, Estrutura de Controle de Fluxo, Funções, Eventos, JSON, LocalStorage, Interval, Timeout, Operadores Rest e Spread, Módulos, Arrow Functions, Funções de Arrays, Funções Assíncronas e Fetch.
- **React**: Renderização de componentes, Props, Proptypes, Hooks, Eventos, Renderização de listas, React Router, Formulários, Prop Drilling, Composition, Estilos (Material UI e Boostrap), Developer Tools.
- **Skills**: Organização, criação de documentação e apresentação de solução.


## Possíveis Melhorias

Trata-se de uma primeira versão do aplicativo e muitas mellhorias ainda podem ser impletamentas como a criação de uma página para exibição dos dados do usuário, assim como a possibilidade de alterar os dados e também deletar o usuário caso ele deseje.

Poderia ser implementada também pequenas melhorias de convivência para o usuário como uma mensagem de bem vindo e a identificação do usuário dentro da aplicação com seu nome e email.

A aplicação poderia ter também um sistema de busca para que o usuário possa selecionar alguma área do mapa onde teria mais interesse em conhecer locais de preservação.


## Screenshots

![App Screenshot Login](https://res.cloudinary.com/dfbwfvctj/image/upload/v1723924567/01_qckzmw.png)
![App Screenshot Cadastro](https://res.cloudinary.com/dfbwfvctj/image/upload/v1723924567/02_kofbn7.png)
![App Screenshot Dashboard](https://res.cloudinary.com/dfbwfvctj/image/upload/v1723924567/03_smimlt.png)
![App Screenshot Mapa e Responsividade](https://res.cloudinary.com/dfbwfvctj/image/upload/v1723924567/04_of3zzy.png)
![App Screenshot Lista Responsiva](https://res.cloudinary.com/dfbwfvctj/image/upload/v1723924567/05_p7lbtv.png)


## Histórico Gitflow

![Screenshot Histórico de Commits e Merges](https://res.cloudinary.com/dfbwfvctj/image/upload/v1723988929/GIT_FLOW_ilbalo.png)

## Video explicativo

Abaixo segue o link para o video explicativo da aplicação:

https://drive.google.com/file/d/1lNz3z3286HH-w2hELqn9pFtOUt1e5uKz/view?usp=sharing