
<h1 align="center">NLW IA - API</h1> 
  
 <p align="center"> 
   <img  
     src="https://img.shields.io/badge/Typescript-%5E5.0.2-blue" 
     alt="Typescript Ver. 5.0.2"  
   /> 
   <img 
     src="https://img.shields.io/badge/NLWIA-2023-green"  
     alt="NLWIA-2023" 
   /> 
   <img  
     alt="License" 
     src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033" 
   /> 
 </p> 
  
 <div align="center"> 
  
   ![Last commit](https://img.shields.io/github/last-commit/Jonathan-Rios/nlwia-upload-ia-api?color=4DA1CD 'Last commit') &nbsp; 
   ![Repo size](https://img.shields.io/github/repo-size/Jonathan-Rios/nlwia-upload-ia-api?color=4DA1CD 'Repo size') &nbsp; 
   ![Languages](https://img.shields.io/github/languages/count/Jonathan-Rios/nlwia-upload-ia-api?color=4DA1CD 'Languages') &nbsp; 
  
 </div> 
  
 <br> 
  
 <h3 align="center">Imagem prévia da aplicação (WEB + API)</h3> 
  
 <div align="center"> 
   <img src=".github/project-preview.gif?style=flat" alt="Cover" /> 
 </div> 
  
 <br> 
  
 ## 💻 Projeto 
 Aplicação web para criar resumos de shorts do YouTube usando Inteligência Artificial para transcrever o conteúdo do vídeo e gerar resumos de conteúdo. Este projeto foi desenvolvido na trilha Foundations durante a edição de IA da NLW pela **[Rocketseat](https://www.rocketseat.com.br/)** 
 
 
 ## 🧪 Tecnologias 
  
 Esse projeto foi desenvolvido com as seguintes tecnologias: 
  
 - [TypeScript](https://www.typescriptlang.org/) 
 - [Fastify](https://fastify.dev/) 
 - [OpenAI API](https://openai.com/) 
 - [Vercel AI SDK](https://vercel.com/blog/introducing-the-vercel-ai-sdk) 
 - [Prisma](https://www.prisma.io/) 
  
 ## 🚀 Como executar 
 Esse projeto possui a interface web, que é encontrada nesse [repositório](https://github.com/Jonathan-Rios/nlwia-upload-ia-web.git). 
  
 Vai ser necessário também ter uma API Key da [OpenAI](https://openai.com/) com crédito para as requisições,  
 crie um arquivo .env (seguindo o .env.example). 
  
 Clone o projeto e acesse a pasta do mesmo. 
  
 ```bash 
 $ git clone https://github.com/Jonathan-Rios/nlwia-upload-ia-api.git 
  
 $ cd nlwia-upload-ia-api 
 ``` 
  
 Para iniciá-lo, siga os passos abaixo: 
 ```bash 
 # Instalar as dependências 
 $ npm install 
  
 # Iniciar o projeto 
 $ npm run dev 
 ``` 
 - Aparecerá no terminal o link de acesso da aplicação, geralmente na porta http://localhost:5173/. 
  
 ## 📝 License 
  
 Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes. 
  
 <br /> 
  
  
  
 ## 📓 Anotações pessoais 
  
 <h3>Criando o projeto e suas dependências </h3> 
  
 ```bash 
   # Configurando do Zero 
   ➜ npm init -y 
  
   ➜ npm i typescript @types/node tsx -D 
       # [tsx] Permite que "rodemos" na hora o código typescript,  
       # sem precisar de entregar Javascript para o Node (já que ele n entende typescript direto) 
   ➜ npm i fastify 
   ➜ npm i prisma -D 
   ➜ npx prisma init --datasource-provider sqlite 
       # Salvando alterações no Prisma 
         # npx prisma migrate dev  
         # Exemplo de nome: create videos and prompts 
       # Rodando o seed disponibilizado (tem que configurar no package.json o caminho) 
         # npx prisma db seed 
  
   ➜ npm i @fastify/multipart 
     # https://github.com/fastify/fastify-multipart 
  
   ➜ npm i zod 
   ➜ npm i openai 
  
   # Caso a versão do node tenha dificuldades de ler as ENVs, essa lib auxilia. 
   ➜ npm i dotenv -D  
  
   ➜ npm i @fastify/cors 
  
   ➜ npm i ai 
 ```    
 <br /> 
  
  
 --- 
 <br /> 
  
 <a href="https://github.com/mfcstt"> 
  <img src="https://github.com/mfcstt.png" width="100px;" alt="" /> 
  <br /> 
  <sub><b>Maria Fernanda</b></sub></a> 
  
 💠 NeverStopLearning 💠 
  
 [![Linkedin Badge](https://img.shields.io/badge/-mfcstt-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mfcstt)](https://www.linkedin.com/in/mfcstt)  
 [![Gmail Badge](https://img.shields.io/badge/-mahcosta54@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mahcosta54@gmail.com)](mailto:mahcosta54@gmail.com)
