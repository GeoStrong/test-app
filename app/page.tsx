import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
