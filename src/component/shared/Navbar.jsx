

import {  House, PhoneCall, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
      <>
        <div className="flex justify-center items-center bg-linear-to-r from-feeli to-gold py-2 mx-5 rounded-3xl">
          <div className="mr-auto">
            <span className="ml-6">قیمت طلا</span>
          </div>
          <div className="ml-auto gap-5 flex flex-row-reverse  items-center justify-center">
            <Link to="/singin">
              <span className="mr-6"></span>
            </Link>
            <Link to="/contact">
              <span className="mr-6 -pb-5">
                <PhoneCall />
              </span>
            </Link>
            <Link to="/paymentpage">
              <span className="mr-6">
                <ShoppingBag/>
              </span>
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