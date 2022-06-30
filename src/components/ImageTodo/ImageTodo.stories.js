import ImageTodo from "./ImageTodo";
import dog from "../../assets/gustav.jpg";
import cat from "../../assets/kitten1.jpg";

// Default export

export default {
  title: "todos/ImageTodo",
  component: ImageTodo,
  // decorators: [

  // ]
};

export const Template = (args) => <ImageTodo {...args} />;

export const Dog = Template.bind({});
Dog.args = {
  text: `This is a dog`,
  image: dog,
};
