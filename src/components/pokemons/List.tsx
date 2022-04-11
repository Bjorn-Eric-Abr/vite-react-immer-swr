import { IPokeItem } from 'src/services/usePokemonService'

export const List = ({ pokemons }: { pokemons: IPokeItem[] }) => {
   const filteredPokemons = pokemons.filter((i) => i.checked)

   return (
      <article>
         <ul>
            {filteredPokemons.map((item) => (
               <li key={item.name}>{item.name}</li>
            ))}
         </ul>
      </article>
   )
}
