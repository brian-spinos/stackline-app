import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import GraphDisplay from "./GraphDisplay";
import TableDisplay from "./TableDisplay";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  /*increment, decrement, setValue,*/ fetchData,
} from "../store/mainSlice";
import type { AppDispatch } from "../store/store";
// import { SeachState } from "../store/storeInterfaces";

interface ProductState {
  product: any;
}

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: ProductState) => state.product.results[0]?.data[0]
  );

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex bg-red-100-- h-screen bg-[#f3f5f7]">
        <div className="bg-green-100-- flex-[1] mt-10">
          <LeftSidebar product={product} />
        </div>
        <div className="bg-blue-100-- flex-[4] mt-10">
          <div className="bg-blue-500-- flex-[3]">
            <div className="bg-pink-500-- -ml-3">
              <GraphDisplay sales={product?.sales} />
            </div>
            <div className="bg-pink-300-- -ml-3 pt-10">
              <TableDisplay />
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Value: {value}</h1> */}
      {/* <button onClick={() => dispatch(increment())}>Increment</button> */}
      {/* <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      {/* <button onClick={() => dispatch(setValue(10))}>Set to 10</button> */}
    </>
  );
};

export default Dashboard;
