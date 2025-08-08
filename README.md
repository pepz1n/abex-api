# ABEX-API

  * Primeiramente Intalar com o comando:
  * ```
    npm install
    ```
  * Após, Criar um arquivo **.env** no diretorio principal e colocar dentro
  
  * ```
    POSTGRES_HOST=localhost
    POSTGRES_DB=arni-api
    POSTGRES_USERNAME=postgres
    POSTGRES_PASSWORD=unochapeco
    POSTGRES_PORT=5432
    TOKEN_KEY=arni-api
    API_PORT=3333
    API_HOST=http://localhost
    ```
  * Após a criação do arquivo rodar o comando
  * ```
    npm run dev
    ```

## Banco de teste

O arquivo `test_db.sql` cria tabelas de fornecedores (`supplier`) e produtos (`product`) com alguns dados de exemplo para testes.

Para carregar esse banco no PostgreSQL local utilize:

```
psql -U postgres -d arni-api -f test_db.sql
```
    