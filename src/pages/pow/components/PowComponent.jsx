import React, { useState, useEffect } from "react";
import { Button } from "antd";

export default function TaskComponent(props) {
  const [pow, setPow] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    // console.log("changer", props);
  });
  const addPow = () => {
    setPow(pow + 1);
  };
  // nested
  const [nested] = useState([
    {
      id: 1,
      children: [
        { id: 2 },
        { id: 3, children: [{ id: 5 }, { id: 6 }] },
        { id: 4 }
      ]
    }
  ]);
  const flatten = data => {
    return data.reduce((acc, value) => {
      acc.push(value);
      if (value.children) {
        acc = acc.concat(flatten(value.children));
        delete value.children;
      }
      return acc;
    }, []);
  };
  const covertTreeToFlat = () => {
    console.log(flatten(nested));
  };
  const [truthy] = useState([]);
  console.log(!!truthy);
  console.log([1, 2, 3] + [4, 5, 6]);
  return (
    <div>
      <Button onClick={covertTreeToFlat}>Button</Button>
    </div>
  );
}
