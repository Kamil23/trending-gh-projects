import type { NextPage } from 'next'
import Head from 'next/head'
import List from '../src/containers/List'
import Filters from '../src/containers/Filters'
import styles from '../styles/Home.module.css'
import { useQuery } from "react-query";
import { fetchList } from '../src/APIs/ListAPI'

const Home: NextPage = () => {

  const params = {};

  const { isSuccess, data, isLoading, isError } = useQuery(
    ["author"], () => fetchList(params)
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="render-message">Loading...</div>;
    }
    if (isError) {
      return <div className="render-message">Something went wrong</div>;
    }
    if (isSuccess) {
      return <List data={data} />;
    }
    return <></>;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Trends</title>
        <meta name="description" content="Github trending repos created with NextJS framework" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Trending repos on <a href="https://github.com">Github</a>
        </h1>

        <div className={styles.wrapper}>
          <Filters />
          {renderResult()}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://cieplicki.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Kamil Cieplicki
        </a>
      </footer>
    </div>
  )
}

export default Home
