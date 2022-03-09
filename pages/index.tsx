import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import List from '../src/containers/List'
import Filters from '../src/containers/Filters'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from '../src/redux/store';
import { IRootState } from '../src/redux/types';
import { getProgrammingLanguages, getRepositoriesList } from '../src/redux/slices/filters'
import EmptyData from '../src/components/EmptyData'

const Home: NextPage = () => {

  const { 
    repositoriesList,
    filteredList,
    languagesList, 
    loading, 
    error,
    time, 
    programmingLang } = useSelector((state: IRootState) => state.filters);

  const dispatch = useDispatch();

  const renderResult = () => {
    if (loading) {
      return <div className="render-message">Loading...</div>;
    }
    if (filteredList?.length > 0) {
      return <List data={filteredList} />;
    }
    if (repositoriesList?.length > 0) {
      return <List data={repositoriesList} />;
    }
    if (repositoriesList?.length === 0) {
      return <EmptyData />;
    }
    if (error) {
      return <div className="render-message">Something went wrong</div>;
    }
    return <></>;
  };

  // called once
  useEffect(() => {
    dispatch(getProgrammingLanguages());
  }, [dispatch]);
  
  // called when filters changed
  useEffect(() => {
    dispatch(getRepositoriesList(programmingLang?.urlParam as string, time))
  }, [dispatch, time, programmingLang]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Trends</title>
        <meta name="description" content="Github trending repos created with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Trending repos on <a href="https://github.com">Github</a>
        </h1>

        <div className={styles.wrapper}>
          <Filters 
            selectedTime={time}
            selectedLang={programmingLang}
            languagesList={languagesList} />
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
