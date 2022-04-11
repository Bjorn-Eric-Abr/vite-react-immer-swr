import usePokemonService from 'src/services/usePokemonService'
import { Filter } from './Filter'
import { List } from './List'
import { Quantity } from './Quantity'

export const Pokemons = () => {
   const {
      isLoading,
      pokemons,
      toggle,
      getQueryParams,
      quantity,
      setQuantity,
   } = usePokemonService()

   if (isLoading) {
      return <pre>Lodading...</pre>
   }

   return (
      <>
         <h2>Showing {pokemons.length} Pokemons</h2>
         <pre>Query params: {JSON.stringify(getQueryParams())}</pre>
         <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
         />
         <Filter
            pokemons={pokemons}
            toggle={toggle}
         />
         <List pokemons={pokemons} />
      </>
   )
}
