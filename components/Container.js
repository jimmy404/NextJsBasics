import Head from 'next/head';
import Navigation from './Navigation';

const Container = (props) => (
  <div>
    <Head>
      <title>Next Js Basics</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/superhero/bootstrap.min.css" />
    </Head>
    <Navigation />
    <div>
      {props.children}
    </div>
  </div>
);

export default Container;