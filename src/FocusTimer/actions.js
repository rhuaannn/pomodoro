import state from "./state.js";
import * as timer from "./timer.js";
import * as els from "./elements.js";
import { updateDisplay } from "./timer.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countDown()
}

export function reset(){
    state.isRunning =  false;
    document.documentElement.classList.remove("running");
    timer.updateDisplay()
}
export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle("music-on");
}
export function set() {
  els.minutes.setAttribute("contenteditable", true);
  els.minutes.focus()
  els.minutes.textContent = "";
  els.seconds.textContent = "";
  els.minutes.onkeypress = (e) =>/\d/.test(e.key)

  els.minutes.addEventListener("blur", (e) =>{
    let time = e.currentTarget.textContent
    time = time > 60 ? 60: time
    state.minutes = time
    state.seconds = 0
    updateDisplay()
    els.minutes.removeAttribute("contenteditable")
    
  })
  
}
