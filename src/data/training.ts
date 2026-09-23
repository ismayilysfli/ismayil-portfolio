export type TrainingItem = {
  title: string;
  provider?: string;
  status?: "Ongoing" | "Completed";
};

export const trainingItems: TrainingItem[] = [
  {
    title: "AI Engineering Program",
    provider: "AI Academy",
    status: "Ongoing",
  },
  {
    title: "Math4AI Track",
    provider: "AI Academy",
    status: "Completed",
  },
  {
    title: "Claude with the Anthropic API",
    provider: "Anthropic Academy",
  },
  {
    title: "Java & Back-End Web Development",
    provider: "Code Star",
  },
  {
    title: "Mendix Rapid Developer Certification",
  },
];
