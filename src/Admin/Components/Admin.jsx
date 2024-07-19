import React from "react";
import { Link } from "react-router-dom";
import nft1 from "./img/nfts/NftBanner1.png";
import routes from "./routes.js";
import { SidebarLinks } from "./Links";

const Admin = () => {
  return (
    <div
      className={`hidden sm:flex duration-175 linear fixed z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:bg-navy-800 dark:text-white`}
    >
      <span className="absolute top-4 right-4 block cursor-pointer xl:hidden">
        {/* <HiX /> */}
      </span>

      <div className="mx-[56px] mt-[50px] flex items-center">
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Horizon <span className="font-medium">FREE</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}
      <ul className="mb-auto pt-1">
        <SidebarLinks routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        {/* <SidebarCard /> */}
      </div>
      {/* Nav item end */}
    </div>
  );
};

export default Admin;

        // <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
        //   <div className="ml-[6px]">
        //     <div className="h-6 w-[224px] pt-1">
        //       <a
        //         className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
        //         href=" "
        //       >
        //         Pages
        //         <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
        //           {" "}
        //           /{" "}
        //         </span>
        //       </a>
        //       <Link
        //         className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
        //         to="#"
        //       >
        //       </Link>
        //     </div>
        //     <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
        //       <Link
        //         to="#"
        //         className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
        //       >
        //       </Link>
        //     </p>
        //   </div>
    
        //   <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        //     <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
        //       <p className="pl-3 pr-2 text-xl">
        //         {/* <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" /> */}
        //       </p>
        //       <input
        //         type="text"
        //         placeholder="Search..."
        //         class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
        //       />
        //     </div>
        //     <span
        //       className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
        //     >
              {/* <FiAlignJustify className="h-5 w-5" /> */}
            // </span>
            {/* start Notification */}
            {/* <Dropdown
              button={
                <p className="cursor-pointer">
                  <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
                </p>
              }
              animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
              children={
                <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-bold text-navy-700 dark:text-white">
                      Notification
                    </p>
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      Mark all read
                    </p>
                  </div>
    
                  <button className="flex w-full items-center">
                    <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                      <BsArrowBarUp />
                    </div>
                    <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                      <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                        New Update: Horizon UI Dashboard PRO
                      </p>
                      <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                        A new update for your downloaded item is available!
                      </p>
                    </div>
                  </button>
    
                  <button className="flex w-full items-center">
                    <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                      <BsArrowBarUp />
                    </div>
                    <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                      <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                        New Update: Horizon UI Dashboard PRO
                      </p>
                      <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                        A new update for your downloaded item is available!
                      </p>
                    </div>
                  </button>
                </div>
              }
              classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
            /> */}
            {/* start Horizon PRO */}
            {/* <Dropdown
              button={
                <p className="cursor-pointer">
                  <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
                </p>
              }
              children={
                <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                  <div
                    style={{
                      backgroundImage: `url(${navbarimage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="mb-2 aspect-video w-full rounded-lg"
                  />
                  <a
                    target="blank"
                    href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                    className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  >
                    Buy Horizon UI PRO
                  </a>
                  <a
                    target="blank"
                    href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                    className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
                  >
                    See Documentation
                  </a>
                  <a
                    target="blank"
                    href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                    className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
                  >
                    Try Horizon Free
                  </a>
                </div>
              }
              classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
              animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
            /> */}
            {/* <div
              className="cursor-pointer text-gray-600"
              onClick={() => {
                if (darkmode) {
                  document.body.classList.remove("dark");
                  setDarkmode(false);
                } else {
                  document.body.classList.add("dark");
                  setDarkmode(true);
                }
              }}
            > */}
              {/* {darkmode ? (
                <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
              ) : (
                <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
              )}
            </div> */}
            {/* Profile & Dropdown */}
            {/* <Dropdown
              button={
                <img
                  className="h-10 w-10 rounded-full"
                  src={avatar}
                  alt="Elon Musk"
                />
              }
              children={
                <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        👋 Hey, Adela
                      </p>{" "}
                    </div>
                  </div>
                  <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />
    
                  <div className="flex flex-col p-4">
                    <a
                      href=" "
                      className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                    >
                      Profile Settings
                    </a>
                    <a
                      href=" "
                      className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                    >
                      Newsletter Settings
                    </a>
                    <a
                      href=" "
                      className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in"
                    >
                      Log Out
                    </a>
                  </div>
                </div>
              }
              classNames={"py-2 top-8 -left-[180px] w-max"}
            />*/}
    //       </div>
    //       <div
    //   className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
    //   style={{ backgroundImage: `url(${nft1})` }}
    // >
    //   <div className="w-full">
    //     <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
    //       Discover, collect, and sell extraordinary NFTs
    //     </h4>
    //     <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
    //       Enter in this creative world. Discover now the latest NFTs or start
    //       creating your own!
    //     </p>

    //     <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
    //       <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
    //         Discover now
    //       </button>
    //       <button
    //         href=" "
    //         className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2"
    //       >
    //         Watch Video
    //       </button>
    //     </div>
    //   </div>
    // </div>
          
    //     </nav>
