import { Link } from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexVertical = "flex flex-col items-center";

  return (
    <nav>
      {isAboveSmallScreens ? (
        <div className="fixed flex w-full bg-primary-50 py-8 text-xl justify-between px-20 z-[200]">
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
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      ) : (
        <div className="fixed flex w-full bg-primary-50 py-8 text-xl justify-between px-10 z-[200]">
          <h3 className="font-bold text-neon-50">{`Marturet.tech`}</h3>
          <button
            className="rounded-full bg-secondary-500 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      )}

      {/*MOBILE MENU MODAL */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div
          className={`fixed right-0 bottom-0 z-[300] w-[300px] h-full bg-primary-100 drop-shadow-xl`}
        >
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className={`${flexVertical} gap-10 text-2xl`}>
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
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
