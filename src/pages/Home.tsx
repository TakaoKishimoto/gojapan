import { FC } from 'react';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const Home: FC = () => {
  return <h1>{title}</h1>;
};

export default Home;
