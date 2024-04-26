import moment from "moment"


export const OrderPayment = ({data}) => {
    return (
        <section className="w-full h-full flex-col pb-5">
            <div className="w-full h-full flex items-center">
                <span className="sm:w-[24%] w-[35%] text-Grey800">Payment · {data.payment_strategy_name}</span>
                <hr className="border-b"/>
            </div>
            <div className="flex flex-col  w-full h-full py-3 gap-2 ">
                <div className="w-full flex justify-between">
                <span>Card</span>
                <span className="text-Grey800">Visa **** 3245</span>
            </div>
            <div className="w-full flex justify-between">
                <span>Payment Due</span>
                <span className="text-Grey800">{moment(data.due_date).format("dddd, MMMM DD, YYYY")}</span>
            </div>
            </div>
            <div className="w-full flex flex-col">
                <span>Payment Structions</span>
                <p className="text-Grey800">Your order will be charged upon final weighing of your products. If you wish to update your card on file you can do so from the “Saved Cards” section of your account settings</p>
            </div>
        </section>
    )
    
}