import { OrderCart } from "./OrderCart/OrderCart";
import {OrderHeader} from "./OrderHeader/OrderHeader";
import { OrderNotes } from "./OrderNotes/OrderNotes";
import { OrderPayment } from "./OrderPayment/OrderPayment";
import { OrderPickup } from "./OrderPickup/OrderPickup";

export const Order = ({order}) => {
  
    const {
        supplier, 
        id,
        order_entries, 
        subtotal, 
        salestax_rate, 
        total, payment_tax, 
        payment_fees, 
        payment, 
        status, 
        opened_at, 
        fulfillment,
        customer_note
    } = order;

    return (
        <section className="md:w-[608px] w-full h-full rounded shadow bg-white border-gray-200 flex flex-col px-4">
            <OrderHeader data={{
                id, 
                supplier,
                status,
                opened_at
            }}/>
            <OrderCart
                data={{
                    order_entries,
                    subtotal,
                    salestax_rate,
                    total,
                    payment_tax,
                    payment_fees,
                    payment,
                }}
            />
            <OrderPickup
                data={
                    fulfillment
                }
            />
            <OrderPayment
                data={payment}
            />
            <OrderNotes
                data={{customer_note,supplier, id}}
            />
        </section>
    )
}

