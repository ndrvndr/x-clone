import Footer from "./Footer";
import SearchBox from "./SearchBox";
import SubscribeBox from "./SubscribeBox";
import SuggestedUserBox from "./SuggestedUserBox";

export default function RightSidebar() {
  return (
    <section className='custom-scrollbar rightsidebar'>
      <SearchBox />
      <SubscribeBox />
      {/* <TrendingBox /> */}
      <SuggestedUserBox />
      <Footer />
    </section>
  );
}
