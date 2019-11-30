import React, { useState } from "react";
import { Table, Row, Col, Divider, Tag } from "antd";
import GridLayout from "../../../common/GridLayout";

function TableComponent() {
  const [data] = useState([
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ]);
  const header = () => [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Divider type="vertical" />
        </span>
      )
    }
  ];
  const [fakeData] = useState(6);
  const factorial = x => {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
  };
  console.log("factori sum", factorial(fakeData));

  // sum reduces
  const sum = array => {
    return array.reduce(
      (sum, num, index, array) => sum + num.x + index + array[index].x,
      0
    );
  };
  const [arrayNum] = useState([
    {
      x: 1
    },
    {
      x: 2
    }
  ]);
  console.log("sum", sum(arrayNum));
  // array multi to flat
  const [arrayFlat] = useState([
    [0, 1],
    [2, 3],
    [3, 4]
  ]);
  const covertArrayToFlat = array => {
    return array.reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );
  };
  console.log(covertArrayToFlat(arrayFlat));
  const [objectFlat] = useState([
    {
      id: 1,
      name: "cats",
      array: [
        {
          id: 2,
          name: "tom"
        }
      ]
    },
    {
      id: 2,
      name: "cats",
      array: [
        {
          id: 3,
          name: "tom"
        }
      ]
    }
  ]);
  const covertObjectToFlat = array => {
    return array
      .map(item => item.array.map(child => ({ ...child, idParent: item.id })))
      .reduce((totalArray, current) => totalArray.concat(current), []);
  };
  console.log(covertObjectToFlat(objectFlat));
  // flatten
  const [nested] = useState([
    {
      id: 1,
      name: "person"
    },
    {
      id: 2,
      name: "person 2"
    },
    {
      id: 3,
      name: "person 3"
    },
    {
      id: 4,
      name: "person 4"
    },
    {
      id: 5,
      name: "person 5"
    },
    {
      id: 6,
      name: "person 6",
      child: [
        {
          id: 14,
          name: "children 1",
          child: [
            {
              id: 32,
              name: " abc",
              child: [
                {
                  id: 32,
                  name: " abc"
                }
              ]
            }
          ]
        }
      ]
    }
  ]);
  const flatten = data => {
    const array = Array.isArray(data) ? data : [data];
    return array
      .map(item => {
        if (item.child) {
          item.child = item.child.map(itemChil => ({
            ...itemChil,
            chaId: item.id
          }));
        }
        return item;
      })
      .reduce((total, value) => {
        total.push(value);
        if (value.child) total = total.concat(flatten(value.child));
        delete value.child;
        return total;
      }, []);
  };
  console.log(flatten(nested));
  return (
    <div>
      <Row type="flex" justify="center">
        <Col {...GridLayout.full}>
          <Table pagination={false} columns={header()} dataSource={data} />
        </Col>
      </Row>
    </div>
  );
}

export default TableComponent;
