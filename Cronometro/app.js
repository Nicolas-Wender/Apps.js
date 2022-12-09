const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const restartButton = document.querySelector('.restart')
const cronometro = document.querySelector('.cronometro')

pauseButton.disabled = true
restartButton.disabled = true

let second = 0,
  minute = 0,
  hours = 0

const renderCronometro = (second, minute, hours) => {
  const secondValue = second < 10 ? '0' + second : second
  const minuteValue = minute < 10 ? '0' + minute : minute
  const hoursValue = hours < 10 ? '0' + hours : hours

  cronometro.innerHTML = hoursValue + ':' + minuteValue + ':' + secondValue
}

const startTime = () => {
  interval = setInterval(() => {
    second++
    if (second > 60) {
      second = 0
      minute++
    }
    if (minute > 60) {
      minute = 0
      hours++
    }
    renderCronometro(second, minute, hours)
  }, 100)
}

const start = () => {
  startButton.disabled = true
  startTime()
  pauseButton.disabled = false
  restartButton.disabled = false
}

const pause = () => {
  clearInterval(interval)
  startButton.disabled = false
  pauseButton.disabled = true
  restartButton.disabled = false
}

const restart = () =>{
  clearInterval(interval)
  startButton.disabled = false
  pauseButton.disabled = true
  restartButton.disabled = true

  second = 0
  minute = 0
  hours = 0
  renderCronometro(second, minute, hours)
}