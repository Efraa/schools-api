# Schools API 🚀

This is the core of the Schools application, built with TypeScript and served by docker.

### API Docs
---

[Schools API](https://documenter.getpostman.com/view/7831505/S1Zw6VCU?version=latest)

### Development and running the API Server
---

1. clone
2. move to ``` cd schools-api ```
3. copy ``` development.env ``` to ``` .env ```
4. run ``` yarn && docker-compose up --build ```

### Production

3. copy ``` prod.env ``` to ``` .env ```

### Running workers

The workers must be launched in a process other than the API server,
once the API is running it can execute the workers in a terminal.

**Open a terminal**

run ``` docker exec SCHOOLS_API yarn worker ```

Note: SCHOOLS_API is the name of the container.

### Ready
---

**API SERVER**

``` localhost:2302/api/v1 ```

**SOCKET SERVER**

``` localhost:2302 ```