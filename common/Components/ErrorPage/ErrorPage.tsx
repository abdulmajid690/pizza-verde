import React from "react";

interface ErrorPageProps {
  message: string;
  description: string;
}

const ErrorPage = ({ message, description }: ErrorPageProps) => {
  return (
    <div className="error-page-container flex items-center max-w-[1280px] mx-auto md:px-10 px-5 py-[100px] h-[80vh]">
      <div className="wrapper flex flex-col items-center justify-center bg-primary w-[70%] mx-auto p-5">
        <h2 className="md:text-4xl sm:text-3xl text-2xl text-white capitalize mt-5">
          {message}
        </h2>
        <p className="md:text-base text-sm text-white mt-5 mb-2 capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
