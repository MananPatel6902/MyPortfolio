import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "SavourSAGE",
    description: "AI-powered multilingual dietitian app that uses real-time food recognition and health metrics to provide personalized nutritional insights.",
    image: "/Photos/SavourSAGE.png",
    tags: ["AI", "LLM", "Streamlit", "Generative AI", "Healthcare"],
    github: "https://github.com/MananPatel6902/SavourSAGE",
    details: "SavourSAGE is a real-time AI-powered dietitian application capable of recognizing food from images, estimating calories with over 90% accuracy, and delivering multilingual recommendations. Built using Streamlit and LLMs, it integrates health metrics for adaptive feedback and employs advanced image processing and generative AI to personalize user guidance."
  },
  {
    id: 2,
    title: "Virtual Mouse",
    description: "Hands-free virtual mouse controlled by real-time hand gestures using computer vision.",
    image: "/Photos/Virtual mouse.png",
    tags: ["Computer Vision", "OpenCV", "Mediapipe", "Gesture Recognition"],
    github: "https://github.com/MananPatel6902/Virtual-AI-mouse",
    details: "This project implements a virtual mouse using real-time hand gesture detection with Mediapipe and OpenCV. Achieves 95% accuracy in gesture recognition to emulate mouse actions like move, click, drag, and scroll. Built using Python with an emphasis on user-friendly and reliable control mechanisms for accessibility and automation."
  },
  {
    id: 3,
    title: "Netflix Data Analysis",
    description: "Tableau-based dashboard to extract insights from Netflix viewing data for stakeholder decision-making.",
    image: "/Photos/Netflix.png",
    tags: ["Data Analysis", "Visualization", "Tableau", "Python"],
    github: "https://github.com/MananPatel6902/Netflix-data-analysis",
    details: "Analyzed Netflix dataset using Python and Tableau to generate visual dashboards and insights for improving business decisions. Helped identify high-performing content and strategic recommendations for revenue generation. Includes use of filtering, KPI metrics, and visual storytelling for investor engagement."
  },
  {
    id: 4,
    title: "TrashTech",
    description: "CNN-based image classification system for real-time waste detection and sorting.",
    image: "/Photos/TrashTECH.png",
    tags: ["CNN", "TensorFlow", "Image Classification", "Recycling"],
    github: "https://github.com/MananPatel6902/TrashTech",
    details: "TrashTech is a web-integrated AI model that classifies types of trash using a CNN trained on diverse images. Built with TensorFlow and Keras, it features a real-time image upload interface and feedback loop for continuous model improvement. Aimed at supporting smart waste management and sustainability initiatives."
  }
];
