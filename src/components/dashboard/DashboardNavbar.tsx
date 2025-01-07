import { Logo } from "../../assets/logo";
import { LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function DashboardNavbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a
            id="logo"
            onClick={(e) => {
              e.preventDefault();
              handleLogoClick();
            }}
            href="/"
            className="cursor-pointer flex items-center"
          >
            <Logo />
          </a>
          <div className="flex items-center space-x-4">
            {/* <button className="p-2 text-gray-400 hover:text-gray-500">
							<Settings className="h-5 w-5" />
						</button> */}
            <div className="flex items-center space-x-3">
              <img
                className="h-8 w-8 rounded-full"
                src={
                  user?.user_metadata?.avatar_url ||
                  "https://www.gravatar.com/avatar/?d=mp"
                }
                alt="User avatar"
              />
              <button
                onClick={() => signOut()}
                className="p-2 text-gray-400 hover:text-gray-500"
                title="Sign out"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
