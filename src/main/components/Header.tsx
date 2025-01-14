import stacklineLogo from "/stackline_logo.svg";

const Header = () => {
  return (
    <div className="bg-blue-800 text-white p-5">
      <img src={stacklineLogo} alt="Logo" width="100px" />
    </div>
  );
};

export default Header;
