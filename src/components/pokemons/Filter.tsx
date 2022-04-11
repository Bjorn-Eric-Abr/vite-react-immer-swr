import { IPokeItem } from 'src/services/usePokemonService'

export const Filter = ({
   pokemons,
   toggle,
}: {
   pokemons: IPokeItem[]
   toggle: (index: number) => void
}) => {
   return (
      <article>
         {pokemons.map((item, index) => (
            <div key={item.name}>
               <input
                  type="checkbox"
                  id={item.name}
                  name={item.name}
                  checked={item.checked}
                  onChange={() => toggle(index)}
               />
               <label htmlFor={item.name}>{item.name}</label>
            </div>
         ))}
      </article>
   )
}
