const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function repeatGreetingsLoop() {
  for (let i = 0; i <= 5; i++) {
    await sleep(1000)
    console.log(`Hello #${i}`)
    }
}
repeatGreetingsLoop()
