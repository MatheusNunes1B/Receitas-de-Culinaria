# Projeto: Receitas de Culinária

Este projeto é uma API REST em Node.js que permite criar, listar,
atualizar e excluir receitas usando Supabase como banco de dados.\
Você poderá testar todas as rotas utilizando o **Thunder Client**.

------------------------------------------------------------------------

## 1. Baixar os arquivos do projeto

Clone o repositório do GitHub ou baixe o ZIP e extraia:

``` bash
git clone <URL_DO_SEU_REPO>
cd "Receitas de Culinária"
```

------------------------------------------------------------------------

## 2. Executar os pré-requisitos no terminal

Certifique-se de ter o Node.js instalado. Depois, instale as
dependências:

``` bash
npm install
```

------------------------------------------------------------------------

## 3. Configurar o Supabase

1.  Crie um projeto no Supabase.
2.  Em **Project Settings → API**, copie:

-   `SUPABASE_URL`
-   `anon public key`

3.  Crie o arquivo `.env` na raiz do projeto com o conteúdo:

```{=html}
<!-- -->
```
    SUPABASE_URL=https://seu-projeto.supabase.co
    SUPABASE_ANON_KEY=sua-chave-anon-publica
    PORT=3000

4.  Crie a tabela `receitas` no SQL Editor:

``` sql
create table public.receitas (
  id bigint generated always as identity primary key,
  titulo text not null,
  ingredientes text not null,
  tempo_minutos integer not null,
  nivel_dificuldade text not null
);
```

5.  Inserir alguns exemplos (opcional):

``` sql
insert into public.receitas (titulo, ingredientes, tempo_minutos, nivel_dificuldade)
values
('Bolo de Cenoura', 'Cenoura, farinha, açúcar, ovos', 40, 'Fácil'),
('Panqueca de Carne', 'Carne moída, massa de panqueca, molho de tomate', 25, 'Médio'),
('Lasanha Bolonhesa', 'Massa de lasanha, carne, queijo, molho', 60, 'Difícil'),
('Suco Detox', 'Limão, couve, gengibre, maçã', 5, 'Fácil');
```

------------------------------------------------------------------------

## 4. Executar o servidor

No terminal, dentro da pasta do projeto:

``` bash
node server.js
```

Deve aparecer:

    API rodando na porta 3000

------------------------------------------------------------------------

## 5. Instalar a extensão Thunder Client

1.  Abra o VSCode.
2.  Vá em **Extensions → Thunder Client**.
3.  Instale a extensão para testar requisições HTTP.

------------------------------------------------------------------------

## 6. Testar o CRUD no Thunder Client

### 🔹 6.1 GET -- Listar todas as receitas

Método: **GET**\
URL: `http://localhost:3000/api/receitas`

------------------------------------------------------------------------

### 🔹 6.2 GET -- Buscar receita por ID

Método: **GET**\
URL: `http://localhost:3000/api/receitas/1`

------------------------------------------------------------------------

### 🔹 6.3 POST -- Criar nova receita

Método: **POST**\
URL: `http://localhost:3000/api/receitas`

Body (JSON):

``` json
{
  "titulo": "Mousse de Maracujá",
  "ingredientes": "Maracujá, leite condensado, creme de leite",
  "tempo_minutos": 20,
  "nivel_dificuldade": "Fácil"
}
```

------------------------------------------------------------------------

### 🔹 6.4 PUT -- Atualizar uma receita

Método: **PUT**\
URL: `http://localhost:3000/api/receitas/1`

Body (JSON):

``` json
{
  "titulo": "Bolo de Cenoura com Cobertura",
  "ingredientes": "Cenoura, farinha, açúcar, ovos, chocolate",
  "tempo_minutos": 50,
  "nivel_dificuldade": "Médio"
}
```

------------------------------------------------------------------------

### 🔹 6.5 DELETE -- Remover uma receita

Método: **DELETE**\
URL: `http://localhost:3000/api/receitas/1`

Resposta esperada:

``` json
{
  "message": "Receita excluída com sucesso"
}
```

------------------------------------------------------------------------
