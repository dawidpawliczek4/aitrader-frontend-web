import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, type ThemeDefinition } from "vuetify";
import "vuetify/styles";

const traderTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // TODO: Define color scheme for app
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "traderTheme",
    themes: {
      traderTheme,
    },
  },
  defaults: {
    global: {
      density: "compact",
      ripple: true,
    },
    VBtn: { density: "default" },
  },
});
