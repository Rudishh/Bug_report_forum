import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon text-xs sm:text-sm md:text-base lg:text-lg" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon text-xs sm:text-sm md:text-base lg:text-lg" />
        </Link>
        <a href="https://discord.rudish.dev/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/discord logo.png" 
            alt="Discord Logo" 
            width={24} // Adjust the width and height as needed
            height={24}
            className="w-4 h-3 sm:w-5 sm:h-5 md:w-6 md:h-5 lg:w-6 lg:h-4.5"
          />
        </a>
        <a href="https://github.com/Rudishh/Bug_report_forum" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/git.svg" 
            alt="Github Logo"  
            width={24} // Adjust the width and height as needed
            height={24}
            className="w-4 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-5"
          />
        </a>
      </div>

      <div className="flex items-center justify-center">
        <p className="lg:text-3xl md:text-xl text-xs">BUG REPORT FORUM</p>
      </div>

      <div className="flex items-center">
        <p className="text-default-text md:text-xl text-xs">contactme@rudish.dev</p>
      </div>
    </nav>
  );
}

export default Nav;
