"use client";
import Link from "next/link";
import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ShopingCart from "../shopingCart/shopingCart";
import { Button, Drawer, Badge } from "@mui/material";
import Image from "next/image";
import happyLogo from "../../../public/images/happyLogo-svg.svg";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={happyLogo} alt="Flowbite Logo" width={100} height={100} />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HAPPY PLANT
          </span> */}
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto "
          id="navbar-sticky"
        >
          <ul className="flex flex-col !items-stretch h-20 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 gap-4 md:gap-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="p-2">
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:pt-5 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                HOME
              </Link>
            </li>
            <li className="bg-[#289672] p-2">
              <Link
                href="/products"
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:pt-5 md:dark:text-blue-500"
                aria-current="page"
              >
                STORE
              </Link>
            </li>
            <li className="p-2">
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:pt-5 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                ABOUT US
              </Link>
            </li>
            <li className="p-2">
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:pt-5 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#289672] hover:bg-[#289672] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </button>
        </div>
        <Button onClick={toggleDrawer(true)}>
          <Badge
            badgeContent={2}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "#289672",
              },
            }}
          >
            <ShoppingCartRoundedIcon color="action" fontSize="medium" />
          </Badge>
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          <ShopingCart />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
