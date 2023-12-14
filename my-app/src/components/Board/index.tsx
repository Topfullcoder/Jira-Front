import React, { useState, useEffect } from "react";
import styled from "@xstyled/styled-components";
import {
  DragDropContext,
  Droppable,
  DropResult,
  DragStart,
  DragUpdate,
} from "react-beautiful-dnd";
import { Layout, Input, Typography, Avatar, Tooltip } from "antd";
import {
  SearchOutlined,
  UserAddOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import TicCard from "./../TicketCard";
import { Task } from "./../../Types/Task";
import { ArrColor } from "../../Data";
import { getUserList } from "../../config";
import { getStageList, getTicketList } from "./../../redux/actions/apiActions";
import "./board.css";

const { Content } = Layout;

const Container = styled.div`
  background-color: #fff;
  min-height: 72vh;
  min-width: 100vw;
  display: inline-flex;
`;

interface User {
  id: number;
  username: string;
}

interface Stage {
  id: number;
  stage: string;
}

interface List {
  id: number;
  title: string;
  taskList: Task[];
}

const SprintBoard = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [searchStyle, setSearchStyle] = useState({ width: "100px" });
  const [userlist, setUserlist] = useState<User[]>([]);
  const [stagelist, setStagelist] = useState<Stage[]>([]);
  const [taskList, setTasks] = useState<Task[]>([]);
  const [boardList, setBoardList] = useState<List[]>([]);

  useEffect(() => {
    setUserlist(getUserList());
    const fetchData = async () => {
      let reslist, ticketlist;
      try {
        reslist = await getStageList();
        const ticketlistResponse = await getTicketList();

        if (ticketlistResponse !== undefined) {
          ticketlist = ticketlistResponse.data;
          setTasks(ticketlist);
        } else {
          console.log("getTicketList() returned undefined");
        }
        setStagelist(reslist);
      } catch (err) {
        console.log("Error", err);
      }
      init(reslist, ticketlist);
    };
    fetchData();
  }, []);

  function init(stages: Stage[], tasks: Task[]) {
    let tp_list: List[];
    tp_list = stages.map((stage, idx) => {
      const tp_tasks = tasks.filter((task) => task.stages[0].id === stage.id);
      return {
        id: stage.id,
        title: stage.stage,
        taskList: tp_tasks,
      };
    });
    setBoardList(tp_list);
  }

  const handleFocus = () => {
    setSearchStyle({ width: "150px" });
    setSearchPlaceholder("Search this board");
  };

  const handleBlur = () => {
    setSearchStyle({ width: "100px" });
    setSearchPlaceholder("");
  };

  function onDragStart(result: DragStart) {
    // console.log("onDragStart", result);
  }

  function onDragUpdate(result: DragUpdate) {
    // console.log("onDragUpdate", result);
  }

  function onDragEnd(result: DropResult) {
    const { destination, source, type } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const sourceIndex = parseInt(
      source.droppableId.match(/\d+/)?.[0] || "0",
      10
    );
    const destinationIndex = parseInt(
      destination.droppableId.match(/\d+/)?.[0] || "0",
      10
    );

    setBoardList((prevBoardList) => {
      const newBoardList = Array.from(prevBoardList); // Create a new array
      if (type === "task") {
        const sourceList = { ...newBoardList[sourceIndex] }; // Create a new object
        const [removedTask] = sourceList.taskList.splice(source.index, 1);
        if (sourceIndex === destinationIndex) {
          // Moving within the same list
          sourceList.taskList.splice(destination.index, 0, removedTask);
          newBoardList[sourceIndex] = sourceList;
        } else {
          // Moving to a different list
          const destinationList = { ...newBoardList[destinationIndex] }; // Create a new object
          destinationList.taskList.splice(destination.index, 0, removedTask);
          newBoardList[sourceIndex] = sourceList;
          newBoardList[destinationIndex] = destinationList;
        }
      } else if (type === "list") {
        const [removedList] = newBoardList.splice(source.index, 1);
        newBoardList.splice(destination.index, 0, removedList);
      }
      return newBoardList; // Return the new state
    });
  }

  const listBlocks = boardList.map((list, idx) => (
    <TicCard
      key={`list-${idx}`}
      draggableId={`list-${idx.toString()}`}
      index={idx}
      title={list.title}
      tasks={list.taskList}
    />
  ));

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
        <div className="main_content">
          <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            <Droppable
              droppableId="all-lists"
              type="list"
              direction="horizontal"
            >
              {(provided, snapshot) => (
                <Container ref={provided.innerRef} {...provided.droppableProps}>
                  {listBlocks}
                  {provided.placeholder}
                  <div className="add-lb">Add Button</div>
                  <PlusSquareOutlined />
                  <div className="add-right">Add Right</div>
                </Container>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </Content>
    </>
  );
};

export default SprintBoard;
