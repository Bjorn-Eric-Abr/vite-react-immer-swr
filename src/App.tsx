import '@picocss/pico'

import { Logo } from '@components/Logo'
import { Pokemons } from '@components/pokemons/Pokemons'

function App() {
   return (
      <div className="App container">
         <nav>
            <ul>
               <li>
                  <Logo />
               </li>
            </ul>
            <ul>
               <li>
                  <a href="#">Link</a>
               </li>
               <li>
                  <a href="#">Link</a>
               </li>
               <li>
                  <a
                     href="#"
                     role="button"
                  >
                     Button
                  </a>
               </li>
            </ul>
         </nav>
         <header>Hello.</header>
         <main
            style={{
               display: 'grid',
               gridTemplateColumns: '1fr 1fr',
               gridGap: '1em',
            }}
         ></main>

         <Pokemons />
      </div>
   )
}

export default App
