# Buscar Noticias - NewsData API

## Descrição 

Permite buscar noticias atualizadas de qualquer lugar do mundo, disponibilizando inclusive as fontes e link para consulta da matéria.

---

## **Como Implementar**

Primeiramente é necessário possuir uma chave da API, para fazer isso crie uma conta no site da NewsData e vá na aba de APIs

Para fazer uma busca simples, envie uma requisição GET seguindo o seguinte padrão:

https://newsdata.io/api/1/latest?apikey={YOUR_API_KEY}&q=pizza

⚠️ **Substitua {YOUR_API_KEY} por sua chave.**

---

### **Parametros**


| Parâmetro | Descrição                                                                                                                                  |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `country` | Filtra as noticias por país                                                                                                                |
| `language` | FIltra as noticias por lingua. Utiliza o padrão de duas letras (pt, en, fr...), podendo ser utilizada mais de uma separando-as por virgula |
| `category` | Filtra por categoria como bussiness, crime, domestic, podendo ser utilizadas mais de uma separando por virgula                             | 

---

## **Exemplo de Uso**

JavaScript
```javascript

fetch(`https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=f&country=br&language=sq&category=business,crime,domestic,education,entertainment`)
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.error(err));

```
## **Responses**

### **200 - Sucesso**
Requisição bem-sucedida, retornando as noticias.

#### Exemplo de Resposta:

```json

{
 "status":"success",
 "totalResults":9,
 "results":[{"article_id":"9386bba08fdaf10702cd75e1e8bba270",
 "title":"O que vai mudar na avaliação da Capes para a pós-graduação?",
 "link":"https://www.estadao.com.br/educacao/o-que-vai-mudar-avaliacao-pos-graduacao-capes-qualis/",
 "keywords":null,
 "creator":null,
 "video_url":null,
 "description":null,
 "content":"ONLY AVAILABLE IN PAID PLANS",
 "pubDate":"2024-11-27 19:02:20",
 "pubDateTZ":"UTC",
 "image_url":"https://www.estadao.com.br/resizer/v2/SECEADVZKBA7VLFDJKSMKQ3TEY.jpeg?auth=8886a39416b66365acd731c10c78c367c59aa7f2201ea3672857220cc4daafb8&height=3648&smart=true&width=4885",
 "source_id":"estadao_br",
 "source_priority":66745,
 "source_name":"Estadao Br",
 "source_url":"https://www.estadao.com.br",
 "source_icon":"https://i.bytvi.com/domain_icons/estadao_br.png",
 "language":"portuguese",
 "country":["brazil"],
 "category":["education"],
 "ai_tag":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
 "sentiment":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
 "sentiment_stats":"ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
 "ai_region":"ONLY AVAILABLE IN CORPORATE PLANS",
 "ai_org":"ONLY AVAILABLE IN CORPORATE PLANS",
 "duplicate":false
}

```

### **200 - Chave Invalida**

#### Exemplo de Resposta:

```json

{
    "status":"error",
    "results":{"message":"The provided API key is not valid.",
    "code":"Unauthorized"}
}

```

### **200 - Parametro incorreto**

#### Exemplo de Resposta:

```json
{
  "status": "success",
  "totalResults": 0,
  "results": [],
  "nextPage": null
}

```

