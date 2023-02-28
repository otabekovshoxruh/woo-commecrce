import style from "../../style";
import { Navbar } from '../'


export default function Header() {
  return (
    <header className="w-full z-auto">
      <div >
        <div className={`${style.boxWidth} `}>
          <Navbar />
        </div>
      </div>     
    </header>
  );
}



//  bg-gradient-to-b from-[#e6f0ff] to-[#ffffff]