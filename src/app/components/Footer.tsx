import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="flex footer items-center text-neutral-content justify-center p-4">
      <aside className="items-center grid-flow-col">
        <div className="flex space-x-2 flex-col sm:flex-row items-center text-center">
          <div>2023 - {new Date().getFullYear()}</div>
          <div>
            <b>© Gustavo Cintra </b> - Todos os direitos reservados
          </div>
          <div>
            Powered by{" "}
            <Link href={"https://www.instagram.com/leonardoncintra/"}>
              @leonardoncintra
            </Link>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link href={"#"} className="">
            <FaFacebookF />
          </Link>
          <Link href={"#"} className="">
            <FaYoutube />
          </Link>
          <Link href={"#"} className="">
            <FaInstagram />
          </Link>
        </div>
      </aside>
    </footer>
  );
}
