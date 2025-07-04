import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, type ThemeDefinition } from "vuetify";
import "vuetify/styles";

const traderTheme: ThemeDefinition = {
  dark: true,
  colors: {
    /* Core brand */
    primary: "#00c853",        // vivid “P&L green”
    "on-primary": "#ffffff",

    /* Neutrals */
    background: "#000000",
    surface: "#121212",
    "on-surface": "#E0E0E0",

    /* Accents & statuses */
    secondary: "#1B5E20",      // deep forest accent
    info: "#26C6DA",           // cyan for data/info
    success: "#2E7D32",        // dark green confirm
    warning: "#F9A825",        // gold/yellow alerts
    error:   "#D32F2F",        // red errors
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "traderTheme",
    themes: { traderTheme },
  },
  defaults: {
    global: { density: "compact", ripple: true },
    VBtn:    { density: "default" },
  },
});
