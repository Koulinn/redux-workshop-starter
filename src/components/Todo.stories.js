import { Provider } from "react-redux";
import store from '../redux/store'
import Todo from "./Todo";

export default {
	title: "components/Todo Item",
	component: Todo,
	decorators: [
		story => (
			<Provider store={store}>
				<div className="todo-container">
					{story()}
				</div>
			</Provider>
		)
	]
}

export const Default = () => <Todo todoData = {
	{id: '123',
	status: 'incomplete',
	text: 'example text'
	}
} />