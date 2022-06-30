import React from "react";
import { Provider } from "react-redux";
import store from '../redux/store'
import App from "../App";

export default {
	title: 'todos/Add and view todos',
	component: App,
	decorators: [
		story => (
			<Provider store={store}>
				{story()}
			</Provider>
		)
	]
}

export const Default = () => <App />
