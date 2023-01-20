import { FC } from 'react';
import './App.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{title}</h1>
    </div>
  );
};

export default App;
