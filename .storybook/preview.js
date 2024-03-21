import { withVuetify } from "./withVuetify.decorator";
import { setup } from "@storybook/vue3";
import vuetify from "../src/plugins/vuetify";
import '@mdi/font/css/materialdesignicons.css';

setup((app) => {
  app.use(vuetify)
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    sort: "requiredFirst",
  },
  docs: {
    inlineStories: false,
  },
};

export const decorators = [withVuetify];