import { useImmer } from 'use-immer'
export const useImmerState = () => {
   const [lala, updateLala] = useImmer({ title: 'Nope' })

   function rename() {
      updateLala((draft) => {
         draft.title = 'Some other'
      })

      console.log('lala from rename::', lala)
   }

   return {
      lala,
      updateLala,
      rename,
   }
}
