import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

  
function Header() {

    const {address} = useAccount()

    return (
        <header>
            <div className="flex flex-row justify-between h-16 p-4">
                <div className="flex flex-row space-x-7">
                    <div>İmage</div>
                    {address}
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Ticaret</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Swap</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Sınır</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Göndermek</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>  
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Keşfetmek</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Jeton</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>İşlem</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Nft</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>  
                    <h1>Havuz</h1>
                </div>
                <div className="">
                        <ConnectKitButton />
                </div>
                
            </div>
        </header>
    )
}

export default Header