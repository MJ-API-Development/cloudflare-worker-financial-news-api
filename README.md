
# News API

This is a RESTful API for retrieving news articles from various publishers based on different criteria such as date, publisher name, and stock ticker. The API is built on top of the [EOD Stock API](https://eod-stock-api.site/) and requires an API key for authentication.

## API Endpoints

The API supports the following endpoints:

### `/api/v1/news/article/`

Retrieves a single news article based on its ID.

**Method:** `GET`

**URL Parameters:**

- `id`: ID of the news article to retrieve.

### `/api/v1/news/articles-bounded/{upper_bound}`

Retrieves a list of news articles within a certain range of IDs.

**Method:** `GET`

**URL Parameters:**

- `upper_bound`: Upper bound of the ID range. Must be an integer between 1 and 99.

### `/api/v1/news/articles-by-date/{date}`

Retrieves a list of news articles published on a specific date.

**Method:** `GET`

**URL Parameters:**

- `date`: Date of the articles to retrieve, in the format `YYYY-MM-DD`.

### `/api/v1/news/articles-by-publisher/{publisher}`

Retrieves a list of news articles published by a specific publisher.

**Method:** `GET`

**URL Parameters:**

- `publisher`: Name of the publisher to retrieve articles for. Spaces should be encoded as `%20`.

### `/api/v1/news/articles-by-ticker/{stock_code}`

Retrieves a list of news articles related to a specific stock.

**Method:** `GET`

**URL Parameters:**

- `stock_code`: Stock code of the stock to retrieve articles for. Must be an alphanumeric string with up to 96 characters.

### `/api/v1/news/articles-by-page/{page}`

Retrieves a list of news articles from a specific page.

**Method:** `GET`

**URL Parameters:**

- `page`: Page number of the articles to retrieve. Must be an integer between 1 and 99.

## Authentication

To use the API, you will need to obtain an API key from the [EOD Stock API](https://eod-stock-api.site/). Once you have obtained an API key, you can include it in your requests by adding the `api_key` query parameter to the request URL, like this:
``

### Retrieve news articles upto a certain number of articles

```
GET /api/v1/news/articles-bounded/10?api_key=YOUR_API_KEY
```

### Retrieve news articles published on a specific date

```
GET /api/v1/news/articles-by-date/2022-01-01?api_key=YOUR_API_KEY
```

### Retrieve news articles published by a specific publisher

```
GET /api/v1/news/articles-by-publisher/New%20York%20Times?api_key=YOUR_API_KEY
```

### Retrieve news articles related to a specific stock

```
GET /api/v1/news/articles-by-ticker/AAPL?api_key=YOUR_API_KEY
```

### Retrieve news articles by page getting ten articles per page

```
GET /api/v1/news/articles-by-page/2?api_key=YOUR_API_KEY
```