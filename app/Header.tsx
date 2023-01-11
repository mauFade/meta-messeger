import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Image
            src="https://links.papareact.com/jne"
            height={10}
            width={50}
            alt="Logo"
          />

          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
