import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "color-lblue": "#0880AE",
                "color-dblue": "#026f99",
                "color-lightbg": "#eef4ff"
            }
        }
    },
    plugins: []
})