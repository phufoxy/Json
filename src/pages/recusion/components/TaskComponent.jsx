import React, { useState } from "react";
import { isEmpty } from "lodash";

export default function TaskComponent() {
  const [people] = useState([
    {
      id: "12",
      parentId: "0",
      text: "Man",
      level: "1",
      children: null
    },
    {
      id: "6",
      parentId: "12",
      text: "Boy",
      level: "2",
      children: null
    },
    {
      id: "33",
      parentId: "6",
      text: "Boy 1",
      level: "3",
      children: null
    },
    {
      id: "34",
      parentId: "33",
      text: "Boy 4",
      level: "4",
      children: null
    },
    {
      id: "36",
      parentId: "34",
      text: "Boy 4",
      level: "5",
      children: null
    },
    {
      id: "7",
      parentId: "12",
      text: "Other",
      level: "2",
      children: null
    },
    {
      id: "9",
      parentId: "0",
      text: "Woman",
      level: "1",
      children: null
    },
    {
      id: "11",
      parentId: "9",
      text: "Girl",
      level: "2",
      children: null
    },
    {
      id: "13",
      parentId: "0",
      text: "Girl",
      level: "1",
      children: null
    }
  ]);
  const nest = (data, id = "0") => {
    return data
      .filter(item => item.parentId === id)
      .map(item => ({ ...item, children: nest(data, item.id) }));
  };
  const nestPath = (data, path = "0") =>
    data.map((item, index) => ({
      ...item,
      path: item.parentId === "0" ? `${index}` : `${path}-${index}`,
      children: nestPath(
        item.children,
        item.parentId === "0" ? `${index}` : `${path}-${index}`
      )
    }));
  console.log(nestPath(nest(people)));

  return <h1>Task</h1>;
}
