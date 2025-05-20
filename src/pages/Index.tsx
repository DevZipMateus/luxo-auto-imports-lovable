
import React from "react";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import OurHistory from "@/components/OurHistory";
import ImportationSection from "@/components/ImportationSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandCarousel from "@/components/BrandCarousel";

const Index = () => {
  return (
    <Layout>
      <Banner />
      <OurHistory />
      <ImportationSection />
      <FeaturedProducts />
      <BrandCarousel />
    </Layout>
  );
};

export default Index;
