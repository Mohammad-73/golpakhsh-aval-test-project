import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Button, ButtonGroup } from "@mui/material";

type Props = {};

const ShopingCart = (props: Props) => {
  return (
    <div className="p-4 directionRtl">
      <h1 className="text-xl font-medium">لیست خرید</h1>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="mr-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">Throwback Hip Bag</a>
                    </h3>
                    <p className="mr-4">$90.00</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Salmon</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <ButtonGroup
                    variant="outlined"
                    color="inherit"
                    aria-label="Basic button group"
                    size="small"
                    style={{ direction: "ltr" }}
                  >
                    <Button>
                      <RemoveCircleRoundedIcon />
                    </Button>
                    <Button>1</Button>
                    <Button>
                      <AddCircleRoundedIcon />
                    </Button>
                  </ButtonGroup>

                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <DeleteRoundedIcon color="error" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                  alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="mr-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">Medium Stuff Satchel</a>
                    </h3>
                    <p className="mr-4">$32.00</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Blue</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <ButtonGroup
                    variant="outlined"
                    color="inherit"
                    aria-label="Basic button group"
                    size="small"
                    style={{ direction: "ltr" }}
                  >
                    <Button>
                      <RemoveCircleRoundedIcon />
                    </Button>
                    <Button>1</Button>
                    <Button>
                      <AddCircleRoundedIcon />
                    </Button>
                  </ButtonGroup>

                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <DeleteRoundedIcon color="error" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
