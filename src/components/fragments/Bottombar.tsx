import { bottombarLinks } from "@/constants";
import NavigationLinks from "../Elements/NavigationLinks";

export default function Bottombar() {
  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        <NavigationLinks
          links={bottombarLinks}
          linkClassName='bottombar_link hover:bg-dark-2'
          pClassName='text-subtle-medium text-light-1 max-sm:hidden'
        />
      </div>
    </section>
  );
}
