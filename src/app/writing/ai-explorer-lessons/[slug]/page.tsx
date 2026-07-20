import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonArticle } from "@/components/writing/LessonArticle";
import {
  aiExplorerLessons,
  getLesson,
} from "@/data/aiExplorerLessons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return aiExplorerLessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: `Lesson ${lesson.number}: ${lesson.title}`,
    description: lesson.youWillLearnLine,
  };
}

export default async function AiExplorerLessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  return <LessonArticle lesson={lesson} />;
}
