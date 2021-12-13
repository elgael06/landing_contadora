
import { bind } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"

const [textChange$, setText] = createSignal<number>();
const [useText, text$] = bind(textChange$, 0);

const contadorSignal = {setText,useText};
export default contadorSignal;