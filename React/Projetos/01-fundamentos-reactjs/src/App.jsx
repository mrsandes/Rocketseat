import { Header } from './components/header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem earum quam in modi eveniet laudantium iusto blanditiis explicabo, quisquam doloremque atque similique inventore laboriosam perspiciatis, velit, fugit ut possimus aspernatur!"
      />

      <Post 
        author="Fulano" 
        content="Novo post"
      />  

      <Header />
    </div>    
  )
}
