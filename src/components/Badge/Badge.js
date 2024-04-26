



export const Badge = ({status}) => {
    return (
        <div className="rounded-2xl  bg-green-100 px-2.5 ">
            <span className="capitalize text-green-800 font-normal">{status.toLowerCase()}</span>
        </div>
    )
}