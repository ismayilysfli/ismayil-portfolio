import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    organization: "Guardian-X",
    role: "Co-Founder / AI/ML Engineering",
    dates: "Aug 2025 — Present",
    location: "Baku, Azerbaijan · Hybrid",
    context: "Student startup",
    summary:
      "Working on AZira, an AI-powered pest detection application built for practical mobile use.",
    highlights: [
      "Prepared and cleaned a dataset of approximately 18,000 pest images across 15 classes.",
      "Used transfer learning with FastViT-T12 in PyTorch and OpenCV-based data workflows.",
      "Evaluated model behavior and generalization, then built a PyTorch → ONNX → TensorFlow Lite deployment pipeline.",
      "Investigated float16 conversion and retained the more reliable float32 model when conversion reduced reliability.",
      "Worked toward mobile model deployment and application integration.",
    ],
    technologies: ["PyTorch", "FastViT-T12", "OpenCV", "ONNX", "TensorFlow Lite"],
    featured: true,
  },
  {
    organization: "FlyRank AI",
    role: "Machine Learning Intern",
    dates: "Jul 2026 — Present",
    location: "Remote · Project-based / self-paced",
    summary:
      "Running reproducible ranking experiments on approximately 30,000 records and evaluating results with held-out validation.",
    highlights: [
      "Compared a rule-based ranking baseline with Random Forest models.",
      "Improved Precision@50 from 0.24 to 0.74 in the evaluated experiments.",
      "Worked on feature selection, feature importance, and target leakage analysis.",
      "Examined generalization and validation methodology with reproducible scikit-learn experiments.",
    ],
    technologies: ["Python", "scikit-learn", "Random Forest", "Pandas"],
    featured: true,
  },
  {
    organization: "Intern Intelligence",
    role: "C/C++ Developer Intern",
    dates: "Feb 2025 — Mar 2025",
    summary:
      "Built systems-programming exercises with an emphasis on correctness, concurrency, and testing.",
    highlights: [
      "Developed an advanced mathematics functions library and a multithreaded scheduler.",
      "Worked with algorithms, data structures, debugging, multithreading, CMake, and testing.",
    ],
    technologies: ["C", "C++", "CMake", "Multithreading", "Testing"],
  },
];
