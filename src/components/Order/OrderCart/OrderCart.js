import React from "react"


export const OrderCart = ({data}) => {
 
    
    const processedOrders = data.order_entries.reduce((acc, current) => {
        const existingEntry = acc.find(entry => {
           const name = entry.product_name.split(".")[0].split("")[1];
           const currentName = current.product_name.split(".")[0].split("")[1];
            if(name === currentName){         
                entry.product_name = entry.product_name.replaceAll(/[0-9]/g, '');
                
                return true
            }
        });
        if (existingEntry) {
          existingEntry.unit_quantity += current.unit_quantity;
          existingEntry.total_price += current.price;
        } else {
          acc.push({
            ...current,
            unit_quantity: current.unit_quantity,
            total_price: current.price,
          });
        }
        return acc;
      }, []);
      
    return (
        <section className="w-full h-full flex">
            <div  className="w-full flex-col h-full">
                {processedOrders.map((cart) => (
                    <div key={cart.id} className="w-full flex h-full py-2 border-b">
                        <div className="w-1/2 flex flex-col h-full gap-2">
                            <span className="text-base text-Grey800">{cart.product_name.split(".")[0]} x{cart.unit_quantity}</span>
                            <span>${cart.price} / {cart.track_type}</span>
                        </div>
                        <div className="w-1/2 flex flex-col items-end gap-1">
                            <span className="underline text-Green600">view</span>
                            <span className="text-Grey800 font-medium">${cart.total_price}</span>
                        </div>
                    </div>
            
                ))} 
                <div className="flex flex-col  w-full items-end justify-end h-full py-3 gap-2">
                    <div className="md:w-1/2 w-full flex justify-between">
                        <span>Subtotal</span>
                        <span className=" text-Grey800">${data.subtotal}</span>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-between">
                        <span>Delivery Fee</span>
                        <span className=" text-Grey800">${data.payment_fees}</span>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-between border-b pb-2">
                        <span>Tax</span>
                        <span className=" text-Grey800">${data.payment_tax}</span>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-between">
                        <span className="text-lg font-bold text-Grey800">Total</span>
                        <span className=" text-Grey800">$30.50</span>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-between">
                        <span>Payment Status</span>
                        <span className="capitalize text-Grey800">{data.payment.status.toLowerCase()}</span>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-center items-center">
                        <button className="text-base border w-full py-2 text-Grey800">View invoice</button>
                    </div>
                </div>
            </div> 
        </section>
    )
} 