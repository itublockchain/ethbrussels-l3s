import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import logo from '../../assets/logo.png';

function Header() {
  const { address } = useAccount();

  return (
    <header>
      <div className="container flex flex-row justify-between h-16 p-4">
        <div className="flex flex-row space-x-7">
          <div>
            <a href="#" className="w-auto h-auto">
              <img src={logo}></img>
            </a>
          </div>
          
        </div>
        <div className="">
          <ConnectKitButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
