import { House } from "lucide";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
      <>
        <div className="flex justify-center items-center  bg-amber-100 py-2 mx-5 rounded-3xl">
          <div className="mr-auto">
            <span className="ml-6">قیمت طلا</span>
          </div>
          <div className="ml-auto gap-5">
            <Link to="/singin">
              <span className="mr-6">ثبت نام</span>
            </Link>
            <Link to="/contact">
              <span className="mr-6">ارتباط با ما </span>
            </Link>
            <Link to="/paymentpage">
              <span className="mr-6">سبد خرید</span>
            </Link>
            <Link to="/">
              <span className="mr-6">
                <House />
              </span>
            </Link>
          </div>
        </div>
      </>
    );
}