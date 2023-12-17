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
  "#fde3cf", // a
  "#1971EB", // b
  "#87d068", //c
  "#DE350B", //d
  "#00ffcc", //e
  "#cc3399", //f
  "#ff9933", //g
  "#9900ff", //h
  "#333399", //i
  "#0099cc", //j
  "#87D068", //k
  "#FF991F", //l
  "#009900", //m
  "#6666ff", //n
  "#00cc99", //o
  "#669900", //p
  "#9999ff", //q
  "#5243AA", //r
  "#ffff33", //s
  "#0099cc", //t
  "#00ffff", //u
  "#cc00cc", //v
  "#00875A", //w
  "#3333cc", //x
  "#666633", //y
  "#993366", //z
  "#990099",
  "#ccff99",
];
