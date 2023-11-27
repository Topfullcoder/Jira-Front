import { Tasks, Task } from "./../Types/Task";

export const TaskList: Task[] = [
  {
    id: 1,
    title: "This is Head Projcet",
    description: "simple project for head",
    acceptanceCriteria: "string",
    storyPoint: 2,
    ticketNumber: "string-1",
    stages: [
      {
        id: 1,
        stage: "TO DO",
      },
    ],
    assignees: [
      {
        id: 1,
        username: "Braian",
      },
      {
        id: 2,
        username: "Light",
      },
    ],
    reporters: [
      {
        id: 2,
        username: "Light",
      },
    ],
    sprint: null,
    priority: "Medium",
    type: "Epic",
    parent: null,
    children: ["aaa", "bbb", "ccc"],
  },
  {
    id: 2,
    title: "This is body project",
    description: "simple projcet for body",
    acceptanceCriteria: "string",
    storyPoint: 1,
    ticketNumber: "string-2",
    stages: [
      {
        id: 1,
        stage: "TO DO",
      },
    ],
    assignees: [
      {
        id: 1,
        username: "Braian",
      },
      {
        id: 2,
        username: "Braian",
      },
    ],
    reporters: [
      {
        id: 2,
        username: "Dany",
      },
    ],
    sprint: null,
    priority: "Medium",
    type: "Epic",
    parent: null,
    children: ["aaa", "bbb", "ccc"],
  },
  {
    id: 3,
    title: "This is a foot project",
    description: "simple project for foot",
    acceptanceCriteria: "string",
    storyPoint: 1,
    ticketNumber: "string-3",
    stages: [
      {
        id: 1,
        stage: "TO DO",
      },
    ],
    assignees: [
      {
        id: 1,
        username: "Braian",
      },
      {
        id: 2,
        username: "Light",
      },
    ],
    reporters: [
      {
        id: 2,
        username: "KB",
      },
    ],
    sprint: null,
    priority: "Medium",
    type: "Epic",
    parent: null,
    children: ["aaa", "bbb", "ccc"],
  },
];

export const ArrColor: string[] = [
  "#fde3cf",
  "#f56a00",
  "#87d068",
  "#1677ff",
  "#00ffcc",
  "#cc3399",
  "#ff9933",
  "#9900ff",
  "#333399",
  "#0099cc",
];
