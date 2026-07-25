import Navbar from "../component/shared/Navbar";

export default function HomePage() {
    return (
      <>
        <div className=" pt-6">
          <Navbar />

          <div className="bg-[url('public/pexels-karola-g-6276048.jpg')] bg-no-repeat bg-center bg-cover h-screen mx-6 rounded-2xl"></div>
        </div>
      </>
    );
}