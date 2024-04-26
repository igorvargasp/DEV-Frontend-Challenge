import { Badge } from "@/components/Badge/Badge";
import moment from "moment";
export const OrderHeader = ({data}) => {
    return (
        <section className="w-full h-full flex pt-5">
            <div className="w-full h-full flex border-b-2 border-dashed border-gray-200 pb-3">
                <div className="w-2/3 h-full">
                    <h2 className="text-xl font-bold text-Grey800">Order {data.id} · {data.supplier.business_name}</h2>
                    <span>Placed {moment(data.opened_at).format("dddd, MMMM D YYYY")}</span>
                </div>
                <div className="w-1/3  h-full flex  justify-end">
                    <Badge status={data.status}/>
                </div>
            </div>
        </section>
    )
}

