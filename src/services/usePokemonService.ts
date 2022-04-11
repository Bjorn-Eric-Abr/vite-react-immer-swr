import { useEffect, useState } from 'react'
import { usePokemons } from '@api/usePokemons'
import { useImmer } from 'use-immer'

export interface IPokeItem {
   name: string
   url: string
   checked?: boolean
}

export const usePokemonService = () => {
   const [quantity, setQuantity] = useState(2)
   const { pokemons, isLoading, isError } = usePokemons(quantity)
   console.log('quantity::', quantity)
   const [state, updateState] = useImmer<IPokeItem[]>([])

   const setInitialState = (stateToInit: IPokeItem[]) => {
      const mapped = stateToInit.map((item) => {
         return {
            checked: false,
            ...item,
         }
      })
      updateState(() => mapped)
   }

   const toggle = (index: number) => {
      updateState((draft) => {
         draft[index].checked = !state[index].checked
      })
   }

   const getQueryParams = () => {
      const names = state
         ?.filter((i) => i.checked)
         .map((i) => i.name)
         .join(',')
      return `?filtered=${names}`
   }

   // Handle first load
   useEffect(() => {
      if (state.length !== quantity) {
         setInitialState(pokemons || [])
      }
   }, [pokemons])

   return {
      pokemons: state,
      isLoading,
      isError,
      toggle,
      getQueryParams,
      quantity,
      setQuantity,
   }
}

export default usePokemonService
