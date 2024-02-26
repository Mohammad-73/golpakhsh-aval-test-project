"use client";
import React, { useEffect } from "react";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import Swiper from "../components/swiper/swiper";
import Divider from "../components/divider/divider";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { productsList } from "@/lib/features/products/productsThunk";
import Container from "../components/container/container";
import ProductCard from "../components/productCard/productCard";

type Props = {};

const Page = (props: Props) => {
  const dispatch = useAppDispatch();
  const productsData: any = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsList());
  }, []);

  console.log("log>", productsData);

  return (
    <Container classNames="max-w-7xl mx-auto 2xl:max-w-full">
      <Breadcrumb />
      {/* Products */}
      <div className="p-1 flex flex-wrap items-center justify-center gap-6">
        {productsData?.productsList?.products?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Divider title="محصولات پرفروش" />
      <Swiper />
    </Container>
  );
};

export default Page;
