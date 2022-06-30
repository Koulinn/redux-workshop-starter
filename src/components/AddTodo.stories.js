import { Provider } from "react-redux";
import store from '../redux/store'
import AddTodo from "./AddTodo";

export default {
	title: 'todos/Add Todo',
	component: AddTodo,
	decorators: [
		story => (
			<Provider store={store}>
				{story()}
			</Provider>
		)
	]
}

export const Default = () => <AddTodo />