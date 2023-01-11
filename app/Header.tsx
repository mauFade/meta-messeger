import Image from "next/image";
import Link from "next/link";
import LoggoutButton from "./LoggoutButton";

const Header = () => {
  const session = true;

  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="round-full mx-2 object-contain"
            height={10}
            width={50}
            alt="Profile"
            src="https://links.papareact.com/jne"
          />

          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Mauricio Cardoso</p>
          </div>
        </div>

        <LoggoutButton />
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col space-y-5 items-center">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            height={10}
            width={50}
            alt="Logo"
          />

          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>

        <Link
          href="/auth/signin"
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 rounded transition-colors"
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
