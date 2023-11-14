import { Link } from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  return (
    <nav className="flex w-full bg-primary-50 py-8 text-xl justify-between px-20">
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Resume"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Contact Me"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </nav>
  );
};

export default Navbar;
