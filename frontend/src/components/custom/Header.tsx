import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import logo from "../../assets/images/logo1.png";

function Header() {
  const { address } = useAccount();
  console.log(address);
  return (
    <header>
      <div className="container flex flex-row justify-between h-16 p-4">
        <div className="p-50">
          <img src={logo}></img>
        </div>

        <div className="">
          <ConnectKitButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
