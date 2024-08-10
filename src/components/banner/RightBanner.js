import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[300px] lgl:h-[352px] z-10 bg-cyan-500 shadow-2xl box-shadow: 0 20px 90px 20px rgb(.20 0 0 / 0.35); shadow-lg shadow-cyan-500/50"
        style={{ marginBottom: '100px', borderRadius: '150px' }}
        src={bannerImg}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner