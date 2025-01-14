interface LeftSidebarProps {
  product: any;
}
const LeftSidebar = ({ product }: LeftSidebarProps) => {
  return (
    <div className="bg-white shadow rounded m-3 p-10 h-screen">
      <img src={product?.image} width="100px" height="100px" />

      <h1>{product?.title}</h1>
      <div className="text-[#dce1eb]">{product?.subtitle}</div>

      <hr />

      <div className="flex justify-between">
        {product?.tags.map((tag: any) => (
          <div className="border rounded m-1 p-1 text-[#999]">{tag}</div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default LeftSidebar;
