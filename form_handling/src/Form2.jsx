import { useState } from "react";

const Form2 = () => {
  let [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
    add: "",
    course: "",
    gender: "",
  });

  let [subjects, setSubjects] = useState([]);

  let { userName, userEmail, userPass, add, course, gender } = user;

  let handleChange = (e) => {
    let { name, value } = e.target;

    setUser({ ...user, [name]: value }); //! important
  };

  let handleCheckBox = (e) => {
    let { checked, value } = e.target;

    if (checked) {
      setSubjects([...subjects, value]);
    } else {
      setSubjects(subjects.filter((sub) => sub !== value));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userName, userEmail, userPass, add, course, gender });

    setUser({
      userName: "",
      userEmail: "",
      userPass: "",
      add: "",
      course: "",
      gender: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">user name</label>
          <input
            type="text"
            name="userName"
            id=""
            value={userName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">user email</label>
          <input
            type="text"
            name="userEmail"
            id=""
            value={userEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">user password</label>
          <input
            type="text"
            name="userPass"
            id=""
            value={userPass}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">enter your address</label> <br />
          <textarea
            name="add"
            id=""
            value={add}
            onChange={handleChange}
          ></textarea>
        </div>

        {/*   how to handle select  */}

        <div className="form-group">
          <label htmlFor="">Select Course</label>

          <select name="course" id="" onChange={handleChange} value={course}>
            <option>java fullstack</option>
            <option>python fullstack</option>
            <option>MERN fullstack</option>
          </select>
        </div>

        {/*  how to handle radio  */}

        <div className="form-group">
          <label htmlFor="">Select Gender</label>
          <input
            type="radio"
            name="gender"
            id=""
            value="male"
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            id=""
            value="female"
            onChange={handleChange}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            id=""
            value="other"
            onChange={handleChange}
          />{" "}
          Others
        </div>

        {/* handle checkbox */}

        <div className="form-group">
          <label htmlFor="">Select Subjects</label>
          <input
            type="checkbox"
            name="sub1"
            id=""
            value="java"
            onChange={handleCheckBox}
            checked={subjects.includes("java")}
          />
          java
          <input
            type="checkbox"
            name="sub2"
            id=""
            value="python"
            onChange={handleCheckBox}
            checked={subjects.includes("python")}
          />
          python
          <input
            type="checkbox"
            name="sub3"
            id=""
            value="javascript"
            onChange={handleCheckBox}
            checked={subjects.includes("javascript")}
          />
          javascript
        </div>
        <div className="form-group">
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
