export type Importance = "high" | "medium" | "low";

export type Similarity = {
  claim: string;
  importance: Importance;
};

export type Difference = {
  entityA: string;
  entityB: string;
  importance: Importance;
};

export type ComparisonEntry = {
  entities: [string, string];
  period: string;
  similarities: Similarity[];
  differences: Difference[];
};

export type ComparisonDatabase = Record<string, ComparisonEntry>;
