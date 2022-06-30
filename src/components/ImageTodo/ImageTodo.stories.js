import ImageTodo from "./ImageTodo";
import gustav from '../../assets/gustav.jpg'
import kitten from '../../assets/kitten1.jpg'

export default {
	name: 'todos/Image Todo',
	component: ImageTodo
}

export const Hardcoded = () => <ImageTodo image={gustav} text="text" />

const Template = args => <ImageTodo {...args} />

export const Cat = Template.bind({})
Cat.args = {
	image: kitten,
	text: 'Cat'
}



