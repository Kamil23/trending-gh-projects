## Github Trends Next JS app

### Simple list with global filters and sorting by stars
#### Stack: NextJS, RTK, styled-components, Typescript, Jest

First, you need backend from [https://github.com/huchenme/github-trending-api](https://github.com/huchenme/github-trending-api)
Run it on Docker
```bash
$ docker build -t github-trending-api .
$ docker run -d --rm -p 8000:8888 github-trending-api:latest
````

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More about NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
