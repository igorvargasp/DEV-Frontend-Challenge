import { Order } from "../components/Order/Order";

export default async function Home() {
    const data = await fetch('https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/');
    const order = await data.json()

  return (
    <main className="flex min-h-screen flex-col items-center bg-Grey200">
      <div className="md:w-[608px] w-full py-5 px-2 flex">
      <h4 className="text-Grey500">{`<`} Back to orders</h4>
      </div>
      <Order order={order}/>
    </main>
  );
}
