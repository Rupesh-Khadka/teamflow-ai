import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogoutLink,
  PortalLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { CreditCard, LogOut, UserIcon } from "lucide-react";

const user = {
  image:
    "https://img.favpng.com/12/22/15/person-icon-png-favpng-3qfAUXKk4BC2zas4D2cC3HkKb.jpg",
  give_name: "Rupesh",
};

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-12 rounded-xl lg:rounded-lg transition-all duration-200 bg-background/50 border-border/50 hover:bg-accent hover:text-accent-foreground"
        >
          <Avatar>
            <AvatarImage
              src={user.image}
              alt="User Image"
              className="object-cover"
            />
            <AvatarFallback>
              {user.give_name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="right"
        sideOffset={9}
        className="w-[200px]"
      >
        <DropdownMenuLabel className="font-normal flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar className="relative size-8 rounded-lg">
            <AvatarImage
              src={user.image}
              alt="User Image"
              className="object-cover"
            />
            <AvatarFallback>
              {user.give_name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <p className="truncate font-medium">{user.give_name}</p>
            <p className="text-muted-foreground truncate text-xs">
              rynx000@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-2 py-1">
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <PortalLink>
              <UserIcon /> Account
            </PortalLink>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <PortalLink>
              <CreditCard /> Billing
            </PortalLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink className="flex items-center gap-2">
            <LogOut /> Logout
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
