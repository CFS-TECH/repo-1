"use client ";
import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const RedirectWhatsApp = ({ phoneNumber = "+919608553167" }) => {
  const formattedPhoneNumber = phoneNumber.replace(/[+\-()]/g, "");

  const encodedMessage = "Hi, I'd like to chat!";
  const url = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed md:bottom-10 md:right-10 bottom-5 right-5 z-[100]   ">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative"
      >
        {/* notification icon animation  */}
        <div className="w-2 h-2 bg-green-400 absolute top-0 right-0 rounded-full animate-ping "></div>
        <div className="w-2 h-2 bg-green-500 z-[80]  absolute top-0 right-0 rounded-full "></div>

        {/* icon of whatsapp  */}
        <div className="w-10 h-10 p-1 shadow-lg bg-white flex items-center justify-center rounded-full ">
          <RiWhatsappFill className="text-4xl text-[#25D366]" />
        </div>
      </Link>
    </div>
  );
};

export default RedirectWhatsApp;
