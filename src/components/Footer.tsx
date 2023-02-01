import React from "react";
import { StarIcon, EyeIcon } from "@heroicons/react/24/outline";
import styles from "./../app/page.module.css";

function Footer() {
  return (
    <div className="bg-black mx-auto p-14 mt-10">
      <div className="flex flex-col md:flex-row mx-auto justify-between max-w-7xl text-white">
        <div className="flex flex-col">
          <div className="mb-3 md:mb-0">
            <span className="font-semibold">Phone USA/CAN:</span> +1(919)
            900-4300
          </div>
          <div className="mb-3 md:mb-0">
            <span className="font-semibold">Phone GBR:</span> 020 3887 3838
          </div>
          <div className="mb-3 md:mb-0">
            <span className="font-semibold">Phone EUR:</span> +44 20 3887 3838
          </div>
          <div className="mb-3 md:mb-0">
            <span className="font-semibold">Email Us</span>
          </div>
          <div className="mb-3 md:mb-0">
            <span className="font-semibold">Weekly Newsletter Sign-Up</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold mb-3 md:mb-0">Contact Us</div>
          <div className="font-semibold mb-3 md:mb-0">FAQs</div>
          <div className="font-semibold mb-3 md:mb-0">Log in</div>
          <div className="font-semibold mb-3 md:mb-0">Collaborate</div>
          <div className="font-semibold mb-3 md:mb-0">
            VBO & Affiliate Resources
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold mb-1">Follow Us</div>
          <div className="flex">
            <div className={`${styles["icon-facebook-footer"]} mr-2`}></div>
            <div className={`${styles["icon-twitter-footer"]} mr-2`}></div>
            <div className={`${styles["icon-linkedin-footer"]} mr-2`}></div>
            <div className={`${styles["icon-pinterest-footer"]} mr-2`}></div>
            <div className={`${styles["icon-instagram-footer"]} mr-2`}></div>
            <div className={`${styles["icon-youtube-footer"]} mr-2`}></div>
          </div>
          <div className="flex mt-2 justify-between">
            <img
              src="/c.png"
              style={{ height: "46px", width: "120px" }}
              className="mr-1"
            />
            <img
              src="/b.png"
              style={{ height: "73px", width: "55px" }}
              className="mx-1"
            />
            <img
              src="/a.gif"
              style={{ height: "46px", width: "120px" }}
              className="ml-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
