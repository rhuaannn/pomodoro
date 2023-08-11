import state from "./state.js";
import * as els from "./elements.js";
import { reset } from "./actions.js";
export function countDown() {
  if (!state.isRunning) {
    return;
  }
   let minutes = Number(els.minutes.textContent)
   let seconds = Number(els.seconds.textContent)

  seconds--
   if(seconds < 0){
    seconds = 59
    minutes--
   }
   if(minutes < 0){
    reset()
    return
   }
updateDisplay(minutes, seconds)

  setTimeout(() => {
    countDown();
  }, 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  els.minutes.textContent = String(minutes).padStart(2, "0");
  els.seconds.textContent = String(seconds).padStart(2, "0");
}
