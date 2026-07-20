import { redirect } from "next/navigation";

/** Legacy Part 1 URL → Lesson 1 */
export default function LegacyPart1Redirect() {
  redirect("/writing/ai-explorer-lessons/lesson-1-talk-to-an-llm");
}
