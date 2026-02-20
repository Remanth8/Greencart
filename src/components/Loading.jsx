import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Loading = () => {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    // Remove %20 manually
    const cleanSearch = location.search.replace("%20", "");

    const query = new URLSearchParams(cleanSearch);
    const nextUrl = query.get("next");

    if (nextUrl) {
      setTimeout(() => {
        navigate("/" + nextUrl);
      }, 2000);
    }

  }, [location.search, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary"></div>
    </div>
  );
};

export default Loading;