import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Layout, Input, Typography, Avatar, Tooltip } from "antd";
import { SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import TicCard from "./../TicketCard";
import TicCardDrop from "./../TicketCardDrop";
import { Task, Tasks } from "./../../Types/Task";
import { TaskList, ArrColor } from "../../Data";
import { getUserList } from "../../config";
import { getStageList, getTicketList } from "./../../redux/actions/apiActions";
import Column from "../Column";
import "./board.css";

const { Content } = Layout;

interface User {
  id: number;
  username: string;
}

interface Stage {
  id: number;
  stage: string;
}

const SprintBoard = () => {
  let initialState = [
    {
      groupName: "Todo",
      tasks: [
        { id: "1", title: "Test-1" },
        { id: "2", title: "Test-2" },
      ],
    },
    {
      groupName: "Progress",
      tasks: [
        { id: "3", title: "Test-3" },
        { id: "4", title: "Test-4" },
      ],
    },
    {
      groupName: "Test",
      tasks: [
        { id: "3", title: "Test-5" },
        { id: "4", title: "Test-6" },
      ],
    },
    {
      groupName: "Done",
      tasks: [
        { id: "3", title: "Test-7" },
        { id: "4", title: "Test-8" },
      ],
    },
  ];

  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [searchStyle, setSearchStyle] = useState({ width: "100px" });
  const [userlist, setUserlist] = useState<User[]>([]);
  const [stagelist, setStagelist] = useState<Stage[]>([]);
  const [taskList, setTasks] = useState(initialState);

  useEffect(() => {
    setUserlist(getUserList());
    const fetchData = async () => {
      let reslist, ticketlist;
      try {
        reslist = await getStageList();
        ticketlist = await getTicketList();
        setStagelist(reslist);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchData();
  }, []);

  const handleFocus = () => {
    setSearchStyle({ width: "150px" });
    setSearchPlaceholder("Search this board");
  };

  const handleBlur = () => {
    setSearchStyle({ width: "100px" });
    setSearchPlaceholder("");
  };

  function onDragEnd(result: any) {
    const { draggableId, source, destination } = result;

    if (!destination) {
      return; // If the item was dropped outside of any droppable, do nothing
    }

    const sourceGroupIndex = taskList.findIndex(
      (column) => column.groupName === source.droppableId
    );
    const destinationGroupIndex = taskList.findIndex(
      (column) => column.groupName === destination.droppableId
    );

    const sourceGroup = taskList[sourceGroupIndex];
    const destinationGroup = taskList[destinationGroupIndex];

    const movingTask = sourceGroup.tasks.find((t) => t.id === draggableId);

    if (!movingTask) {
      return; // If movingTask is undefined, do nothing
    }
    const newSourceGroupTasks = [...sourceGroup.tasks];
    newSourceGroupTasks.splice(source.index, 1);

    const newDestinationGroupTasks = [...destinationGroup.tasks];
    newDestinationGroupTasks.splice(destination.index, 0, movingTask);

    const newTaskList = [...taskList];
    newTaskList[sourceGroupIndex] = {
      ...sourceGroup,
      tasks: newSourceGroupTasks,
    };
    newTaskList[destinationGroupIndex] = {
      ...destinationGroup,
      tasks: newDestinationGroupTasks,
    };

    setTasks(newTaskList);
  }

  return (
    <>
      <div className="app-left-header">
        <div className="header-title">
          <Typography.Title level={4} style={{ margin: 0 }}>
            LIG Sprint
          </Typography.Title>
        </div>
        <div className="app-search">
          <Input
            suffix={<SearchOutlined />}
            placeholder={searchPlaceholder}
            style={searchStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Avatar.Group>
            {userlist.map((user, idx) => (
              <Tooltip key={idx} title={user.username} placement="bottom">
                <Avatar style={{ background: ArrColor[idx] }}>
                  {user.username[0]}
                </Avatar>
              </Tooltip>
            ))}
            <Tooltip title="Add people" placement="bottom">
              <Avatar icon={<UserAddOutlined />} />
            </Tooltip>
          </Avatar.Group>
        </div>
      </div>
      <Content style={{ padding: "0 50px" }}>
        <div className="app-top-between" />
        <div className="app-board">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="wrapper">
              <Column
                className="column"
                droppableId="Todo"
                list={taskList[0].tasks}
                type="TASK"
              />
              <Column
                className="column"
                droppableId="Progress"
                list={taskList[1].tasks}
                type="TASK"
              />
              <Column
                className="column"
                droppableId="Test"
                list={taskList[2].tasks}
                type="TASK"
              />
              <Column
                className="column"
                droppableId="Done"
                list={taskList[3].tasks}
                type="TASK"
              />
            </div>
          </DragDropContext>
        </div>
      </Content>
    </>
  );
};

export default SprintBoard;
