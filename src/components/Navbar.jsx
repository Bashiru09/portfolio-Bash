import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from 'lucide-react';




const Navbar = () => {
  return ( 
    <div className="flex justify-between px-2 ">
        <div className="">
            <p>Bashiru.dev</p>
        </div>

    <div className="">
                <DropdownMenu className="border-2"   >
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    <Menu size={16} color="black" strokeWidth={0.75} />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Stack</DropdownMenuLabel>
      <DropdownMenuItem>Projects</DropdownMenuItem>
      <DropdownMenuItem>Journey</DropdownMenuItem>
      <DropdownMenuItem>Contact</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    
  </DropdownMenuContent>
</DropdownMenu>
        </div>

   </div>
  )
}

export default Navbar