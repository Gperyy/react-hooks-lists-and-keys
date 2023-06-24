import React from "react";


function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];


  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Allan", lastName: "Johnson" },
  ];

  const userHeadings = users.map((user) => {
    return <h1 key = { user.id } > { user.firstName } < /h1>;
  });
  return ( <
          div >
        <
            h1 > Top 5 CSS Colors < /h1> <
          ol > { /* display the array of <li> elements here! */ } { userHeadings } <
        /ol> < /
          div >
  );
}

export default ColorList;