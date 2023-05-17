
# Business & Financial News API

This is a RESTful API for retrieving news articles from various publishers based on different criteria such as date, publisher name, and stock ticker. The API is built on top of the [EOD Stock API](https://eod-stock-api.site/) and requires an API key for authentication.


## BASE URL

    https://api.news-api.site



Sure! Here are the documentation and explanations for each API endpoint in the provided code:

## API Endpoints

### 1. `/api/v1/news/article/`

- Description: Fetches a specific news article.
- Endpoint URL: `https://api.news-api.site/api/v1/news/article/`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.

### 2. `/api/v1/news/articles-bounded/`

- Description: Fetches a list of news articles within a specified range.
- Endpoint URL: `https://api.news-api.site/api/v1/news/articles-bounded/{upperBound}`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.
- URL Parameters:
  - `upperBound` (required): An integer between 1 and 99 representing the upper bound for the articles.

### 3. `/api/v1/news/articles-by-date/`

- Description: Fetches a list of news articles by a specific date.
- Endpoint URL: `https://api.news-api.site/api/v1/news/articles-by-date/{date}`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.
- URL Parameters:
  - `date` (required): The date in the format `YYYY-MM-DD`.

### 4. `/api/v1/news/articles-by-publisher/`

- Description: Fetches a list of news articles by a specific publisher.
- Endpoint URL: `https://api.news-api.site/api/v1/news/articles-by-publisher/{publisher}`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.
- URL Parameters:
  - `publisher` (required): The name of the publisher.

### 5. `/api/v1/news/articles-by-ticker/`

- Description: Fetches a list of news articles by a specific stock ticker.
- Endpoint URL: `https://api.news-api.site/api/v1/news/articles-by-ticker/{ticker}`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.
- URL Parameters:
  - `ticker` (required): The stock ticker code (alphanumeric field with up to 96 characters).

### 6. `/api/v1/news/articles-by-page/`

- Description: Fetches a list of news articles by page number.
- Endpoint URL: `https://api.news-api.site/api/v1/news/articles-by-page/{pageNumber}`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.
- URL Parameters:
  - `pageNumber` (required): An integer between 1 and 99 representing the page number.

### 7. `/api/v1/news/articles-by-company/`

- Description: Fetches a list of news articles by a specific company.
- Endpoint URL: `https://api.news-api.site/api/v1/news/articles-by-company/`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.

### 8. `/api/v1/news/articles-by-exchange/`

- Description: Fetches a list of news articles by a specific exchange and page number.
- Endpoint URL: `https://api.news-api.site/api/v1/news/articles-by-exchange/{exchange}/{page}`
- Method: GET
- Query Parameters:
  - `api_key` (required): Your API key.
- URL Parameters:
  - `exchange` (required): The exchange code (a letter between 1 and 8 characters).
  - `page`