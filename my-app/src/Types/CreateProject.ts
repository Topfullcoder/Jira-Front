import { number } from "yargs";

export interface CreatePro {
  title: string;
  description: string;
  acceptanceCriteria: string;
  storyPoint: number;
  stages: [
    {
      id: number;
    }
  ];
  assignees: [
    {
      id: number;
    }
  ];
  reporters: [
    {
      id: number;
    }
  ];
  sprint: null;
  priority: string;
  type: string;
  parent: null;
  childern?: null;
}
