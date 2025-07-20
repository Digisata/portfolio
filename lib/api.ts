// Generic fetch helper
const fetchData = async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000"}/api/${endpoint}`,
    {
      headers: { accept: "application/json" },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
};

// Experience
export interface ExperienceResponse {
  _id: string;
  company: string;
  work_type: string;
  location: string;
  start_date: string;
  end_date: string;
  is_present: boolean;
  position: string;
  description: string[];
  order: number;
  created_at: string;
}

export const getExperiences = (): Promise<ExperienceResponse[]> => {
  return fetchData<ExperienceResponse[]>("experience");
};

// Project
export interface ProjectResponse {
  _id: string;
  name: string;
  description: string;
  link: string;
  photo_link: string;
  order: number;
  stack: string[];
  created_at: string;
}

export const getProjects = (): Promise<ProjectResponse[]> => {
  return fetchData<ProjectResponse[]>("project");
};

export interface SkillResponse {
  _id: string;
  name: string;
  order: number;
  created_at: string;
}

export const getSkills = (): Promise<SkillResponse[]> => {
  return fetchData<SkillResponse[]>("skill");
};

export interface SocialResponse {
  _id: string;
  name: string;
  link: string;
  order: number;
  created_at: string;
}

export const getSocials = (): Promise<SocialResponse[]> => {
  return fetchData<SocialResponse[]>("social");
};

export interface CustomerResponse {
  _id: string;
  name: string;
  email: string;
  phone: string;
  wa_link: string;
  intro: string;
  about: string;
  profile_picture: string;
  created_at: string;
}

export const getCustomerByEmail = (
  email: string,
): Promise<CustomerResponse> => {
  return fetchData<CustomerResponse>(`customer/email/${email}`);
};
