"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import { CustomerResponse, getCustomerByEmail } from "@/lib/api";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicProjects = dynamic(() => import("@/components/Projects"));
const DynamicExperiences = dynamic(() => import("@/components/Experiences"));
const DynamicSkills = dynamic(() => import("@/components/Skills"));
const DynamicSocials = dynamic(() => import("@/components/SocialLinks"));

interface ClearAndLogMessageProps {
  message: string;
  styles: string;
}

const clearAndLogMessage = ({ message, styles }: ClearAndLogMessageProps) => {
  console.clear();
  console.log(`%c${message}`, styles);
};

export default function Home() {
  const defaultProfile: CustomerResponse = {
    _id: "",
    name: "",
    email: "",
    phone: "",
    wa_link: "",
    intro: "",
    about: "",
    profile_picture: "",
    created_at: "",
  };
  const [profile, setProfile] = useState<CustomerResponse>(defaultProfile);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const res = await getCustomerByEmail("hnaufal123@gmail.com");
        setProfile(res);
      } catch (error) {
        console.error("Failed to fetch customer profile:", error);
      }
    };

    fetchCustomerData();

    const customMessage = `
      🚀 Welcome to My Portfolio! 🚀

      Thanks for stopping by. I'm here to bring your ideas to life and create something extraordinary.

      Let's build something amazing together!

      Cheers,
      Jabeed
    `;

    const styles = `
      color: #bada55;
      font-size: 14px;
    `;

    clearAndLogMessage({ message: customMessage, styles });
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro profile={profile!} />
      <DynamicSocials />
      <SectionDivider />
      <About profile={profile!} />
      <DynamicExperiences />
      <DynamicProjects />
      <DynamicSkills />
      <Contact profile={profile!} />
    </main>
  );
}
