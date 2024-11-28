# Consultar CEP - ViaCEP

## **Descrição**

A API ViaCEP permite consultar informações relacionadas a um CEP fornecido. Ao realizar a requisição, você receberá dados como logradouro, complemento, bairro, cidade, estado, região e DDD.

---

## **Como Implementar**

Para fazer a consulta, envie uma requisição GET seguindo o seguinte padrão:

https://viacep.com.br/ws/{CEP}/json/

---

### **Parametros**

- {CEP} deve ser um valor numerico de **exatamente 8 digitos**, representando o CEP.
- **Sem espaços ou traços**.

| Exemplo            | Correto/Errado      | Descrição                     |
|---------------------|---------------------|--------------------------------|
| `12345678`          | ✅ Correto          | CEP no formato válido          |
| `123456789`         | ❌ Errado           | Mais de 8 dígitos             |
| `12345-678`         | ❌ Errado           | Contém traço                  |

⚠️ **Recomenda-se validar o CEP na aplicação cliente antes de enviá-lo à API para evitar erros.**

---

## **Exemplo de Uso**

JavaScript
```javascript

fetch(`https://viacep.com.br/ws/01001000/json/`)
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.error(err));

```
## **Responses**

### **200 - Sucesso**
Requisição bem-sucedida, retornando os dados do CEP.

#### Exemplo de Resposta:

```json
{
 "cep": "01001-000",
 "logradouro": "Praça da Sé",
 "complemento": "lado ímpar",
 "unidade": "",
 "bairro": "Sé",
 "localidade": "São Paulo",
 "uf": "SP",
 "estado": "São Paulo",
 "regiao": "Sudeste",
 "ibge": "3550308",
 "gia": "1004",
 "ddd": "11",
 "siafi": "7107"
}

```

### **200 - CEP NÃO ENCONTRADO**

```json

{
  "erro": "true"
}
 
```

### **400 - ERRO**
```json
{
  "message": "Bad Request"
}
```