import React from "react";

import { Route, Routes, Link } from "react-router-dom";

const PageAbout = () => {
  return (
    <div>
      <PageAboutLayout />
      <Routes>
        <Route path="komavideo" element={<KamaVideo />} />
      </Routes>
    </div>
  );
};

function PageAboutLayout() {
  return (
    <div>
      <h1>關於</h1>
      <Link to="komavideo">詳細</Link>
      <hr />
    </div>
  );
}

const KamaVideo = () => {
  return <h2 className="text-success">看小马技术视频學的</h2>;
};

export default PageAbout;
