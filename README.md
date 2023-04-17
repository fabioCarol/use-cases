## O que fizemos

Criamos uma nova app next js com TS

```sh
 npx create-next-app@latest --typescript      

```

Instalamos o ORM prisma

```sh
npm install prisma --save-dev                
```

Iniciamos um projeto prisma com um banco de dados me arquivo SQLITE

```sh
npx prisma init --datasource-provider sqlite 
```

Executamos várias migrações.

### inserçāo de casos de uso
Fizemmos um formulário de inserçāo de casos de uso src/pages/use-cases/add/index.tsx

* HTML Forms
* Form data
* Restful
* Formulários em JSON

A gente fez uma rota para receber os dados e inserir no banco de dados (src/pages/api/use-cases/index.ts)

### Visualizações

Lista de casos de uso recente

src/pages/index.tsx

* getServerSideProps

Visualização de caso de uso especifico com a [referência de projeto](https://www.prisma.io/docs/concepts/components/prisma-schema/relations#relations-in-the-prisma-client) (src/pages/use-cases/[id].tsx)

* [dynamic-routes](https://nextjs.org/docs/routing/dynamic-routes)


## ORM 
Porque estamos usando um ORM nós fazemos migraçōes de arquivos à cada mudança no **esquema** do banco de dados

## Rest
Conceito de arquitetura para gerenciamento de dados via HTTP