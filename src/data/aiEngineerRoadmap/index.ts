import { roadmapTopics } from "./topics-part1";
import { roadmapTopicsPart2 } from "./topics-part2";
import type { RoadmapTopic } from "./types";
import { ROADMAP_HUB_PATH } from "./types";

export const allRoadmapTopics: RoadmapTopic[] = [
  ...roadmapTopics,
  ...roadmapTopicsPart2,
];

export function getRoadmapTopic(slug: string): RoadmapTopic | undefined {
  return allRoadmapTopics.find((t) => t.slug === slug);
}

export function getAdjacentTopics(number: number): {
  prev?: RoadmapTopic;
  next?: RoadmapTopic;
} {
  const idx = allRoadmapTopics.findIndex((t) => t.number === number);
  if (idx < 0) return {};
  return {
    prev: idx > 0 ? allRoadmapTopics[idx - 1] : undefined,
    next:
      idx < allRoadmapTopics.length - 1
        ? allRoadmapTopics[idx + 1]
        : undefined,
  };
}

export function topicPath(slug: string): string {
  return `${ROADMAP_HUB_PATH}/${slug}`;
}

export function topicsInPhase(phaseId: number): RoadmapTopic[] {
  return allRoadmapTopics.filter((t) => t.phase === phaseId);
}
