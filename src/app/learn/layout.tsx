import { allRoadmapTopics } from "@/data/aiEngineerRoadmap";
import { LearningProvider } from "@/components/learn/LearningProvider";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LearningProvider totalTopics={allRoadmapTopics.length}>
      {children}
    </LearningProvider>
  );
}
