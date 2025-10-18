import { topSellingProducts } from "./constants";

export const TopSellingProducts = () => {
  return (
    <div className="rounded-3xl bg-[#f7f9fb] py-6 px-3 ">
      <h3 className="text-lg font-semibold text-[#0F172A] px-6">Top Selling Products</h3>

      <div className=" overflow-hidden">
        <table className="w-full table-fixed border-collapse text-sm">
          <thead className="text-left font-thin text-sm text-neutral-400 border-b border-neutral-300">
            <tr>
              <th className="px-6 py-4 text-sm font-normal ">Name</th>
              <th className="px-6 py-4 text-sm font-normal ">Price</th>
              <th className="px-6 py-4 text-sm font-normal ">Quantity</th>
              <th className="px-6 py-4 text-sm font-normal ">Amount</th>
            </tr>
          </thead>
          <tbody className=" text-sm text-[#1C1F2E]">
            {topSellingProducts.map((product) => (
              <tr key={product.name} className="">
                <td className="px-6 py-3 text-sm text-[#1C1F2E] font-normal">
                  {product.name}
                </td>
                <td className="px-6 py-3 text-sm text-black font-normal">{product.price}</td>
                <td className="px-6 py-3 text-sm text-black font-normal">{product.quantity}</td>
                <td className="px-6 py-3 text-sm text-black font-normal">
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

