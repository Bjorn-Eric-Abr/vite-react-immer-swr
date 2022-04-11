import useSWR from 'swr'

interface IPokeResp {
   results: {
      name: string
      url: string
   }[]
}

function handleErrors(response: Response) {
   if (!response.ok) {
      throw Error(response.statusText)
   }

   return response
}

const fetcher = (url: string) =>
   fetch(url)
      .then((res) => handleErrors(res))
      .then((res) => res.json())

export const usePokemons = (quantity?: number) => {
   const { data, error } = useSWR<IPokeResp>(
      () => `https://pokeapi.co/api/v2/pokemon?limit=${quantity}`,
      fetcher,
   )

   return {
      pokemons: data?.results,
      isLoading: !error && !data,
      isError: error,
   }
}
