import TempChart from "./TempChart";

const GraphDisplay = ({ sales }: any) => {
  const getRetailSales = () => {
    return sales?.map((s: any) => {
      return s.retailSales;
    });
  };

  const getWeekEnding = () => {
    return sales?.map((s: any) => {
      return s.weekEnding;
    });
  };

  return (
    <div className="bg-white shadow rounded m-3 p-10">
      <h1>Retail Sales</h1>
      {/* <p>sales: {JSON.stringify(sales)}</p> */}
      {/* .retailSales */}

      {/* {sales.map((s: any) => (
        <p>{s.retailSales}</p>
      ))} */}

      <div className="flex flex-col bg-red-500--">
        <div className="flex flex-col bg-red-500-- my-10">
          <TempChart
            retailSales={getRetailSales()}
            weekEnding={getWeekEnding()}
          />
        </div>

        <div className="flex flex-col bg-gray-100 h-[1px]"></div>

        <div className="flex flex-col-- bg-red-500-- justify-between mt-5">
          <div className="text-[#ccc]">JAN</div>
          <div className="text-[#ccc]">FEB</div>
          <div className="text-[#ccc]">MAR</div>

          <div className="text-[#ccc]">APR</div>
          <div className="text-[#ccc]">MAY</div>
          <div className="text-[#ccc]">JUN</div>
          <div className="text-[#ccc]">JUL</div>
          <div className="text-[#ccc]">AUG</div>
          <div className="text-[#ccc]">SEP</div>
          <div className="text-[#ccc]">OCT</div>
          <div className="text-[#ccc]">NOV</div>
          <div className="text-[#ccc]">DEC</div>
        </div>
      </div>
    </div>
  );
};

export default GraphDisplay;
