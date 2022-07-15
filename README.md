# GithubExampleApp

Aplicação em Angular de exemplo para a disciplina Programação Funcional 2021.2e.

## Rodando localmente
Passos:
1.  Instale o [Node.js](https://nodejs.org/en/);
2. Instale o Angular CLI via npm: `npm install -g @angular/cli`;
3. Instale as dependências: `npm i`;
4. Gere um token pessoal da API do GitHub e o insira no arquivo `./src/app/shared/github-api.service.ts` na linha 18: `authorization: 'token <GITHUB_TOKEN>'`;

5. Execute o comando: `ng serve`;
6. Vá para `http://localhost:4200/`.

## Links da apresentação e dos exemplos
Apresentação: https://docs.google.com/presentation/d/1zhuUp7knYAspXb3wXxJm6PwkfkLidniVszaBt5ZK_Xo/edit

Exemplos:
- [Data binding e diretivas](https://stackblitz.com/edit/angular-ivy-yy4vo6);