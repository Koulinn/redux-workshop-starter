import { Provider } from "react-redux";
import store from "../src/redux/store";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

//Wrap the story in a provider so that the store is available to all components

export const decorators = [
  (story) => <Provider store={store}>{story()}</Provider>,
];
