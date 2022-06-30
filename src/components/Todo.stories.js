import React from "react";
import Todo from "./Todo";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../App.css";

export default {
  title: "todos/Todo",
  component: Todo,
  // things extra like providers
  //   decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <Todo {...args} />;

export const Default = Template.bind({});
// args should represent the props
Default.args = {
  todoData: {
    id: 1,
    text: "Here is a todo",
    status: "incomplete",
  },
};
