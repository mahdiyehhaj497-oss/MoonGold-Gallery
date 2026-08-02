import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";
import ShowSwiper from "../component/swiper/Showswiper";



export default function HomePage() {
    return (
      <>
        <div>
          <Navbar />

          <div className="bg-[url('public/pexels-pham-ngoc-anh-170983008-28146843.jpg')] bg-no-repeat bg-center bg-cover h-screen pt-16 mx-5 rounded-2xl">
            <div className="flex justify-center items-center">
              <h1 className="font-semibold  text-lg pt-10">
                درخشیدن به سبک ماه
              </h1>
            </div>
          </div>

          <div>
            <ShowSwiper />
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </>
    );
}