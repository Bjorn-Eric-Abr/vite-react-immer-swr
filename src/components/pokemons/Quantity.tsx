export const Quantity = ({
   setQuantity,
}: {
   quantity: number
   setQuantity: (q: number) => void
}) => {
   return (
      <select
         id="fruit"
         onChange={(e) => setQuantity(parseInt(e.target.value))}
      >
         <option
            value=""
            selected
         >
            Select a fruit…
         </option>
         <option>5</option>
         <option>10</option>
         <option>300</option>
         <option>500</option>
         <option>1000</option>
      </select>
   )
}
