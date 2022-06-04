//counter
let count = 0;

//stopwatch


//counter
const counter = document.querySelector(".count");
const btn = document.querySelectorAll(".btn");


//stopwatch
const btn2 = document.querySelectorAll(".btn2"); // buttons
const timer = document.querySelector(".time")
let seconds = 0;
let interval = null; 
let hrs, mins, secs;

//counter
btn.forEach((i)=> {
  i.addEventListener('click', (e) => {
    const style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      count--;
    } else if (style.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    counter.textContent = count;
    console.log(count);

    if (count<0) {
      counter.style.color = "blue";
    } else if (count > 0) {
      counter.style.color = "green";
    } else {
      counter.style.color = "black";
    }
  })

})



//update
timerFunc = () => {
  seconds++;
  //format our time
  hrs = addZeros(Math.floor(seconds / 3600));
  mins = addZeros(Math.floor((seconds-(hrs*3600)) / 60));
  secs = addZeros(seconds % 60); 

  time = `${hrs}:${mins}:${secs}`;
  timer.textContent = time;
}


start = () => {
  if (interval) {
    return
  }

  interval = setInterval(timerFunc, 1000) // 1sec
}

stop = () => {
  clearInterval(interval);
  interval = null;
}






addZeros = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}





btn2.forEach((i)=> {
  i.addEventListener('click', (e) => {
    const style = e.currentTarget.classList;
      if (style.contains('start')) {
        start();
      // timerFunc();
    } else if (style.contains('stop')) {
      stop()
    } else {
      stop()
      time = "00:00:00"
     seconds = 0;
    timer.textContent = time;
    }

   
    

  })

})
