import Navbar from "./component/Header/navbar";
import HeroSection  from "./component/Header/herosec";
import Heroimg from "./component/Header/heroming";
import Picks from "./component/Header/pick";
import Sale from "./component/Header/sale";
import Blog from "./component/Header/blog";
import Insta from "./component/Header/insta";

export default function Home() {
  return (<div>
    <Navbar />
    <HeroSection />
    <Heroimg />
    <Picks />
    <Sale />
    <Blog />
    <Insta />
  </div>
  
     
  );
}
