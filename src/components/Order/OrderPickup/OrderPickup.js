


export const OrderPickup = ({data}) => {
    return (
        <section className="w-full h-full flex-col pb-5">
            <div className="w-full h-full flex items-center">
                <span className="sm:w-[40%] w-[65%] text-Grey800">Pickup · Toronto Central</span>
                <hr className="border-b"/>
            </div>
            <div className="flex flex-col  w-full h-full py-3 gap-2 ">
                <div className="w-full flex justify-between">
                    <span>Pickup Date</span>
                <span className="text-Grey800">Monday, October 16, 2023</span>
            </div>
            <div className="w-full flex justify-between">
                <span>Pickup Timeslot</span>
                <span className="text-Grey800">12:30am</span>
            </div>
            </div>
            <div className="w-full flex flex-col">
                <span>Pickup Address</span>
                <span className="text-Grey800">{data.fulfillment_address} <span className="text-Green600 underline">Map</span></span>
            </div>
        </section>
    )
}