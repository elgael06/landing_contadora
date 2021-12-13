
import { bind } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"

const [themeChange$, setTheme ] = createSignal<string>();
const [useTheme, theme$] = bind(themeChange$,'is-link');

const themeSignal = {setTheme,useTheme};

export default themeSignal;
