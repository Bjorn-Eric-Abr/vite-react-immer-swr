import { usePokemons } from '@api/usePokemons'
import { useEffect } from 'react'

interface filterItem {
   name: string
   checked: boolean
}

interface results {
   results: filterItem[]
}

export const usePokemonFilter = () => {
   const { isLoading, pokemons } = usePokemons()

   useEffect(() => {
      console.log('isLoading, pokemons::', isLoading, pokemons)
   })

   return {
      isLoading,
   }
}
