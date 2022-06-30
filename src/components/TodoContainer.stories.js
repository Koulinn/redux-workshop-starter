import TodoContainer from "./TodoContainer";
import { Provider } from "react-redux";
import store from '../redux/store'

export default {
	title: 'Todos/Todo Container',
	component: TodoContainer,
	decorators: [
		story => (
			<Provider store={store}>
				{story()}
			</Provider>
		)
	]
}

export const Default = () => <TodoContainer />

