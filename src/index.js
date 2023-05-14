const endpointMap = {
    "/api/v1/news/article/": "https://gateway.eod-stock-api.site/api/v1/news/article/",
    "/api/v1/news/articles-bounded/": "https://gateway.eod-stock-api.site/api/v1/news/articles-bounded/",
    "/api/v1/news/articles-by-date/": "https://gateway.eod-stock-api.site/api/v1/news/articles-by-date/",
    "/api/v1/news/articles-by-publisher/": "https://gateway.eod-stock-api.site/api/v1/news/articles-by-publisher/",
    "/api/v1/news/articles-by-ticker/": "https://gateway.eod-stock-api.site/api/v1/news/articles-by-ticker/",
    "/api/v1/news/articles-by-page/": "https://gateway.eod-stock-api.site/api/v1/news/articles-by-page/",
  };

export default {
    async fetch(request, env) {
        try {
            
            const { pathname, searchParams } = new URL(request.url);
            
            const apiKey = searchParams.get("api_key");

            if (pathname === "/") {
                // will return the backend https://api.news-api.site
                const response = await fetch(request);
                return response;
            };

            if (pathname.startsWith("/api/v1")){

                    const endpointPath = Object.keys(endpointMap).find((path) => pathname.startsWith(path));
            
                    if (endpointPath) {

                        const endpointUrl = endpointMap[endpointPath];
                            
                        let endpointWithVariable;

                        if (endpointPath === "/api/v1/news/articles-bounded/") {
                            const variableValue = pathname.slice(endpointPath.length).split("/")[0];
                            if (!/^\d+$/.test(variableValue) || variableValue < 1 || variableValue > 99) {
                            return new Response("Invalid upper bound value. Upper bound must be an integer between 1 and 99.", { status: 400 });
                            }
                            endpointWithVariable = endpointUrl + variableValue;
                        } else if (endpointPath === "/api/v1/news/articles-by-date/") {
                            const variableValue = pathname.slice(endpointPath.length).split("/")[0];
                            if (!/^\d{4}-\d{2}-\d{2}$/.test(variableValue)) {
                            return new Response("Invalid date format.", { status: 400 });
                            }
                            endpointWithVariable = endpointUrl + variableValue;
                        } else if (endpointPath === "/api/v1/news/articles-by-publisher/") {
                            const variableValue = pathname.slice(endpointPath.length);
                            endpointWithVariable = endpointUrl + encodeURIComponent(variableValue);
                        } else if (endpointPath === "/api/v1/news/articles-by-ticker/") {
                            const variableValue = pathname.slice(endpointPath.length);
                            if (!/^\w{0,96}$/.test(variableValue)) {
                            return new Response("Invalid stock code format. Stock code must be an alphanumeric field with up to 96 characters.", { status: 400 });
                            }
                            endpointWithVariable = endpointUrl + encodeURIComponent(variableValue);
                        } else if (endpointPath === "/api/v1/news/articles-by-page/") {
                            const variableValue = pathname.slice(endpointPath.length).split("/")[0];
                            if (!/^\d+$/.test(variableValue) || variableValue < 1 || variableValue > 99) {
                            return new Response("Invalid page number. Page number must be an integer between 1 and 99.", { status: 400 });
                            }
                            endpointWithVariable = endpointUrl + variableValue;
                        } else {
                            return new Response("Invalid endpoint.", { status: 404 });
                        }
                            // adding the api_key back to the url
                            const endpointWithApiKey = apiKey ? `${endpointWithVariable}?api_key=${apiKey}` : endpointWithVariable;
                            return fetch(endpointWithApiKey);
                    } else {
                        return new Response("Invalid endpoint.", { status: 404 });
                    }
            }
            
            return new Response("Invalid endpoint.", { status: 404 });

        }catch (e) {
            return new Response(e.stack, { status: 500 });
        }
    }
  };
  