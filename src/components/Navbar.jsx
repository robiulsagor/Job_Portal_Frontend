import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut, User } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const user = false;

  return (
    <div>
      <div className="h-[60px] max-w-7xl mx-auto flex items-center justify-between">
        {/* left side */}
        <Link to="/" className="text-3xl font-bold">
          Job<span className="text-orange-800">Portal</span>
        </Link>

        {/* right side */}
        <div className="flex items-center gap-12">
          <ul className="flex items-center space-x-5 font-medium text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/">Browse</Link>
            </li>
          </ul>

          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className=" ">
                  <div className="flex gap-3 items-start mb-5">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h2 className="font-semibold">Robiul Islam Sagar</h2>
                      <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/"
                    className="flex w-full items-center gap-5 mb-2 py-1.5 hover:bg-slate-200 transition rounded"
                  >
                    <User className="w-7 h-7" />
                    <span>View Profile</span>
                  </Link>

                  <Link
                    to="/"
                    className="flex w-full items-center gap-5 py-1.5 hover:bg-slate-200 transition rounded"
                  >
                    <LogOut className="w-7 h-7" />
                    <span>Logout</span>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="space-x-2">
              <Link to="/login">
                <Button variant="">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
