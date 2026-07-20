import { redirect } from "next/navigation";

/** Legacy Part 3 URL → Lesson 3 */
export default function LegacyPart3Redirect() {
  redirect("/writing/ai-explorer-lessons/lesson-3-streaming");
}
