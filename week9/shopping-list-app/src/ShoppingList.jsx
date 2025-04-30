


function ShoppingList({ shoppingList, removeItem, budget, togglePurchased })  {


   const totalSpent = shoppingList.reduce((acc, item) => acc + Number(item.cost), 0);

   const remainingBudget = budget - totalSpent;


   return (


       <>

           {<h2>Remaining Budget: ${remainingBudget.toFixed(2)}</h2>}

           {shoppingList.map((val, index) => (

               <div
    

                   className={val.purchased ? 'card flex-apart green' : 'card flex-apart'}

                   key={index}

               >

                   <span>
                   <input
                     type="checkbox"
                     checked={val.purchased}
                    onChange={() => togglePurchased(val.name)}
                            />
                    {val.name} - ${Number(val.cost).toFixed(2)}


                   </span>

                   <span>

                       <button className='btn' onClick={removeItem} value={val.name}>x</button>

                   </span>

               </div>

           ))}

       </>

   );

}


export default ShoppingList;

