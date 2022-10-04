import React, { Fragment, useState, useRef, useEffect } from "react";

import TodoDetailList from "../components/TodoDetailList";

const Todolist = (props) => {
  const [mytodolist, setMytodolist] = useState([]);
  //const refTodoContent = useRef(null);
  const [txtTodoContent, setTodoContent] = useState();
  const [txtPlaceholder, setPlaceholder] = useState("Todo");
  const txtTodoContent_onchange = (event) => {
    setTodoContent(event.target.value);
  };
  const txtTodoContent_keypress = (event) => {
    if (event.key === "Enter") {
      add_list();
    }
  };
  // console.log動作
  const btn_consolelog = () => {
    var arr = JSON.parse(localStorage.getItem("mytodolist"));
    console.log(arr);
  };
  // 新增動作
  const add_list = () => {
    const tmpTodoContent = txtTodoContent.trim();
    if (tmpTodoContent) {
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
      setMytodolist((prevList) => {
        const newList = [...prevList];
        newList.unshift({ text: tmpTodoContent, id: uniqueId });
        return newList;
      });
      setTodoContent("");
      setPlaceholder("Todo");
    } else {
      setPlaceholder("Please type something");
    }
    //refTodoContent.current.focus();
  };
  // 删除動作
  const btn_del_click = (itemId) => {
    setMytodolist((prevList) => {
      const newList = prevList.filter((item) => item.id !== itemId);
      return newList;
    });
  };
  //讀取資料
  useEffect(() => {
    const mytodolist = JSON.parse(localStorage.getItem("mytodolist"));
    if (mytodolist) {
      setMytodolist(mytodolist);
      let timel = performance.now();
      console.log(
        "load " + timel.toFixed(2) + "_" + JSON.stringify(mytodolist)
      );
    }
  }, []);

  //儲存資料
  useEffect(() => {
    if (mytodolist.length > 0) {
      localStorage.setItem("mytodolist", JSON.stringify(mytodolist));
      let times = performance.now();
      console.log(
        "save " + times.toFixed(2) + "_" + JSON.stringify(mytodolist)
      );
    }
  }, [mytodolist]);

  return (
    <Fragment>
      <h1 className="text-primary bg-light">
        {props.lang ? "代辦事項" : "Todolist"}
      </h1>
      <hr />
      <div className="col-6 mx-auto">
        <fieldset>
          <div className="mb-3">
            <label htmlFor="txtTodoContent" className="form-label d-flex">
              {props.lang ? "事項" : "My list"}
            </label>
            <input
              type="text"
              className="form-control"
              id="txtTodoContent"
              placeholder={txtPlaceholder}
              value={txtTodoContent}
              onChange={txtTodoContent_onchange}
              onKeyPress={txtTodoContent_keypress}
              //ref={refTodoContent}
            />
          </div>
          <button className="btn btn-primary btn-lg" onClick={add_list}>
            {props.lang ? "新增" : "Add"}
          </button>
          <button className="btn btn-primary btn-lg" onClick={btn_consolelog}>
            Log
          </button>
          <hr className="px-3" />
          {mytodolist.map((item) => (
            <TodoDetailList
              key={item.id}
              id={item.id}
              text={item.text}
              onDelete={btn_del_click}
            ></TodoDetailList>
          ))}
        </fieldset>
      </div>
    </Fragment>
  );
};

export default Todolist;
