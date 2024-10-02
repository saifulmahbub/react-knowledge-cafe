import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 m-4 border-b-2 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Knowledge-Cafe</h1>
      <img src={profile}></img>
    </div>
  );
};
export default Header;
