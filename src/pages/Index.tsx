
import React from "react";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import OurHistory from "@/components/OurHistory";
import ImportationSection from "@/components/ImportationSection";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <Layout>
      <Banner />
      <OurHistory />
      <ImportationSection />
      <FeaturedProducts />
    </Layout>
  );
};

export default Index;
