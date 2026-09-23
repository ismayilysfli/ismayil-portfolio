import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Guardian-X / AZira",
    subtitle: "AI-powered pest recognition designed for real-world mobile use.",
    description:
      "An end-to-end computer-vision workflow covering dataset preparation, transfer-learning experiments, evaluation, model conversion, and mobile deployment work.",
    highlights: [
      "Prepared and cleaned a 15-class pest image dataset.",
      "Trained and evaluated FastViT-T12 with PyTorch transfer learning.",
      "Converted models through ONNX to TensorFlow Lite and tested deployment tradeoffs.",
    ],
    technologies: [
      "PyTorch",
      "FastViT-T12",
      "OpenCV",
      "Transfer Learning",
      "ONNX",
      "TensorFlow Lite",
    ],
    metrics: [
      { value: "~18K", label: "images" },
      { value: "15", label: "pest classes" },
    ],
    featured: true,
    // Add verified repository or live-demo links here when available:
    // links: [{ label: "Repository", href: "https://..." }],
  },
  {
    title: "FlyRank ML Ranking Experiments",
    subtitle: "Machine-learning ranking experiments on ~30,000 records.",
    description:
      "A measured comparison of a rule-based ranking baseline and Random Forest models, with careful attention to validation quality.",
    highlights: [
      "Performed feature selection and analyzed feature importance.",
      "Checked for target leakage and evaluated generalization.",
      "Used held-out validation and reproducible experiment structure.",
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
    metrics: [{ value: "0.24 → 0.74", label: "Precision@50" }],
    featured: true,
  },
  {
    title: "CourseFlow",
    subtitle:
      "AI coursework planning combining LLM understanding with deterministic scheduling.",
    description:
      "A document-to-plan workflow with page-aware extraction, evidence-backed outputs, task decomposition, workload feasibility checks, shortfall detection, and replanning.",
    highlights: [
      "Associates extracted evidence with filename, page, and source snippet.",
      "Uses structured LLM outputs with retries and fallbacks.",
      "Schedules task dependencies and detects infeasible workloads in deterministic code.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "Gemini / Google GenAI SDK",
      "Structured Outputs",
    ],
    architecture:
      "The LLM interprets and structures messy document content. Deterministic code owns scheduling and dependency logic, where predictable behavior matters more.",
    featured: true,
  },
];

export const moreProjects: Project[] = [
  {
    title: "Azerbaijani Handwritten Character Recognition",
    subtitle: "CNN-based recognition using a custom Azerbaijani character dataset.",
    description:
      "A computer-vision workflow covering preprocessing, model training and evaluation, inference, and a lightweight Flask demonstration interface.",
    highlights: [],
    technologies: ["Python", "CNN", "OpenCV", "Flask"],
  },
  {
    title: "From-Scratch Softmax Regression + Neural Network",
    description:
      "Implemented softmax regression and a one-hidden-layer neural network from scratch using NumPy, including forward passes, loss computation, mini-batching, SGD, Momentum, Adam, validation checkpoints, repeated-seed experiments, and model-capacity experiments.",
    highlights: [],
    technologies: [
      "Python",
      "NumPy",
      "Matplotlib",
      "Softmax Regression",
      "Neural Networks",
      "Optimization",
    ],
  },
];
