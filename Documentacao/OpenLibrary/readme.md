# Consultar Livros - Open Library Search

## **Descrição**

Permite consultar multiplos livros com base no titulo fornecido

---

## **Como implementar**

Para fazer uma consulta, envie uma requisição GET no seguinte formato

https://openlibrary.org/search.json?

---

### **Parâmetros**

| Parâmetro      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                         |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `q`            | Onde enviar o titulo que deverá ser pesquisado                                                                                                                                                                                                                                                                                                                                                                                    |
| `fields`       | Para checar a disponibilidade da informação no archive.org, adicione o valor especial *,availability<br/><br/>Exemplo:<br/><br/>https://openlibrary.org/search.json?q=harry%20potter&fields=*,availability&limit=1<br/><br/>Verifica a disponibilidade do primeiro item no campo ia                                                                                                                                               |
| `sort`         | Usado para classificar os resultados por vários critérios, como "novo", "antigo", "aleatório" ou "chave"                                                                                                                                                                                                                                                                                                                          |
| `lang`         | Onde selecionar a linguagem do usuário como um código de idioma de duas letras (ISO 639-1). Isso influencia, mas não exclui os resultados da busca. Por exemplo, definir isso como fr dará preferência/exibirá a edição em francês de uma obra, mas ainda incluirá obras que não possuem edições em francês. Por outro lado, adicionar language:fre à consulta de busca excluirá resultados que não tenham uma edição em francês. |
| `offset/limit` | Use para fazer paginação                                                                                                                                                                                                                                                                                                                                                                                                          |
| `page/limit`   | Use para fazer paginação com limites                                                                                                                                                                                                                                                                                                                                                                                              |


⚠️ Recomenda-se aplicar tratamento de string no que será passado no parâmetro **q** substituindo espaços vazios por **+**

---


## **Exemplo de Uso**

JavaScript
```javascript

fetch(`https://openlibrary.org/search.json?q=the+lord+of+the+rings`)
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.error(err));

```
## **Responses**

### **200 - Sucesso**
Requisição bem-sucedida, retornando os resultados da busca.

#### Exemplo de Resposta:

A resposta vai seguir esse formato

```json
{
  "start": 0,
  "num_found": 629,
  "docs": [
    {...},
    {...},
    ...
    {...}]
}

```

Cada documento dentro da lista docs aparecerá dessa forma:

```json
{
  "cover_i": 258027,
  "has_fulltext": true,
  "edition_count": 120,
  "title": "The Lord of the Rings",
  "author_name": [
    "J. R. R. Tolkien"
  ],
  "first_publish_year": 1954,
  "key": "OL27448W",
  "ia": [
    "returnofking00tolk_1",
    "lordofrings00tolk_1",
    "lordofrings00tolk_0",
  ],
  "author_key": [
    "OL26320A"
  ],
  "public_scan_b": true
}

```

### **200 - Sem o parametro q**
Requisição bem-sucedida, mas sem retornar nenhum livro

#### Exemplo de Resposta:

A resposta vai seguir esse formato

```json
{
  "start": 0,
  "num_found": 629,
  "docs": [
    {...},
    {...},
    ...
    {...}]
}

```