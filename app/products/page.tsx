"use client";
import React, { useEffect } from "react";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import Swiper from "../components/swiper/swiper";
import Divider from "../components/divider/divider";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { productsList } from "@/lib/features/products/productsThunk";
import Container from "../components/container/container";
import ProductCard from "../components/productCard/productCard";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import SortIcon from "@mui/icons-material/Sort";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import mobileHero from "../../public/images/mobileHero.png";
import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  const dispatch = useAppDispatch();
  const productsData: any = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsList());
  }, []);

  return (
    <Container classNames="max-w-7xl mx-auto 2xl:max-w-full pt-4 md:pt-24">
      <Image
        className="block md:hidden w-full"
        src={mobileHero}
        alt="Welcome to Happy Plant"
        width={50}
        height={50}
        unoptimized
      />
      <div className="flex justify-evenly md:justify-between items-center pb-4 max-w-7xl mx-auto">
        <Breadcrumb />
        <span className="absolute top-80 md:static flex items-center gap-2 w-full md:w-auto px-4">
          <TextField
            className="w-full md:w-auto"
            size="small"
            id="outlined-search"
            label="Search..."
            type="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <AutoAwesomeMosaicIcon />
          <SortIcon />
        </span>
      </div>
      {/* Products */}
      <div className="p-1 flex flex-wrap items-center justify-center gap-6">
        {productsData?.productsList?.products?.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            textColor={product.textColor}
            bgColor={product.bgColor}
          />
        ))}
      </div>
      <Divider title="swiper" />
      <Swiper />
    </Container>
  );
};

export default Page;
