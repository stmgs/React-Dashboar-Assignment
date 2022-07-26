import { useState } from "react";
const Checklist = () => {

  const [checked, setChecked] = useState([]);
  const checkList = ["React Website - Web Applications", "3D model - Game Design"
  , "Products Requirement Doc - Portfolio", "Proposal - Ios & Android dev", "View lecture - Cross platform dev"  ];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

//   const checkedItems = checked.length
//     ? checked.reduce((total, item) => {
//         return total + ", " + item;
//       })
//     : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";


    return ( 
        <div className="content-checklist ">
      <div className="checkList"> 
              <h1 className="title"><strong>Assignment Checklist</strong></h1>

        <h1 className="heading">Due Assignments</h1>
        <div className="list-containern subheading">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        {`Items checked are: ${checkedItems}`}
      </div> */}
    </div>
     );
}
 
export default Checklist;