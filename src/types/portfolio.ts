export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  features: string[];
  role: string;
  duration: string;
  status: "Completed" | "In Progress" | "Maintained";
};

export type Experiment = {
  title: string;
  description: string;
  focus: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};
