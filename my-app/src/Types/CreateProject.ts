export type IdPair = {
  id: number;
};

export interface CreatePro {
  title: string;
  description: string;
  acceptanceCriteria: string;
  storyPoint: number;
  stages: IdPair[];
  assignees: IdPair[];
  reporters: IdPair[];
  sprint: null;
  priority: string;
  type: string;
  parent: null;
  childern?: null;
}
