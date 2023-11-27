interface Stage {
  id: number;
  stage: string;
}

interface User {
  id: number;
  username: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  acceptanceCriteria: string;
  storyPoint: number;
  ticketNumber: string;
  stages: Stage[];
  assignees: User[];
  reporters: User[];
  sprint: null;
  priority: string;
  type: string;
  parent: null;
  children: string[];
}

export interface Tasks {
  tasks: Task[];
}
