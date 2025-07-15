"use client";

import { SocialResponse, getSocials } from "@/lib/api";
import { useEffect, useState } from "react";
import {
    FaGithub,
    FaGlobe,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

export default function SocialLinks() {
  const [socialLinks, setSocialLinks] = useState<SocialResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const socialsRes = await getSocials();
        setSocialLinks(socialsRes.sort((a, b) => a.order - b.order));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const renderIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("linkedin")) return <FaLinkedin size={22} />;
    if (lower.includes("github")) return <FaGithub size={22} />;
    if (lower.includes("twitter")) return <FaTwitter size={22} />;
    if (lower.includes("instagram")) return <FaInstagram size={22} />;
    return <FaGlobe size={22} />;
  };

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-6">
      {socialLinks.map((link) => (
        <a
          key={link._id}
          href={link.link}
          target="_blank"
          className="bg-transparent w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition-all  opacity-80 hover:opacity-100 hover:scale-105 duration-300"
        >
          {renderIcon(link.name)}
        </a>
      ))}
    </div>
  );
}
