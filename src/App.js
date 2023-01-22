import s from "./list/list.module.css";
import Input from "./list/input";
import List from "./list/list";
import { useState } from "react";
const App = () => {
  const [value, setValue] = useState("");
  const [content, setContent] = useState([]);
  const onSetValue = (text) => {
    if (text) {
      const newArray = {
        id: Math.random(),
        text: text,
        completed: false,
      };
      setContent([...content, newArray]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSetValue(value);
  };
  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  const removeTask = (id) => {
    setContent([...content.filter((obj) => obj.id !== id)]);
  };
  const toggleContent = (id) => {
    setContent([
      ...content.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : { ...obj }
      ),
    ]);
  };
  const clearAll = () => {
    setContent([]);
  };

  return (
    <div className={s.app}>
      <Input
        count={content.length}
        content={content}
        onSetValue={onSetValue}
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {content.map((obj) => {
        return (
          <List
            obj={obj}
            toggleContent={toggleContent}
            removeTask={removeTask}
            key={obj.id}
          />
        );
      })}
      <div style={{position:'absolute', bottom:'0', display:'flex', alignItems:'center', width:'100%'}}>
        <div style={{ display: "flex", justifyContent: "center", margin:'0 0 30px 40px' }}>
          <span style={{ color: "black" }}>You have recorded {content.length} tasks </span>
        </div>
        <div
        onClick={clearAll}
          className={s.gradient}
          style={{
            height: "30px",
            padding:'5px',
            color: "white",
            width: "100px",
            position: "absolute",
            margin: " 0 40px 30px 0",
            right: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
            fontSize:'20px'
          }}
        >
          <span>Clear all</span>
        </div>
      </div>
    </div>
  );
};

export default App;
