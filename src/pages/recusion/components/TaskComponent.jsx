import React, { useState } from "react";

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
    }
  ]);
  const nest = (data, id = "0") =>
    data
      .filter(item => item.parentId === id)
      .map(item => ({ ...item, children: nest(data, item.id) }));

  console.log(nest(people));
  return <h1>Task</h1>;
}
