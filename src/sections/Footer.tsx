import logo from '@/assets/logo.webp'
import Image from 'next/image';


export const Footer = () => {
  return (
   <footer>
    <div className="container">
      <Image src={logo} height={40} alt="logo"  />
      <nav>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
        </nav>
        hello

    </div>
   </footer>
  );
};
