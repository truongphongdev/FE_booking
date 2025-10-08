import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Feedback from "../../components/Feedback/Feedback.jsx"; 

const FeedbackPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center bg-blue-50 py-10c ">
        <Feedback/>
      </main>
      <Footer />
    </>
  );
};

export default FeedbackPage;
