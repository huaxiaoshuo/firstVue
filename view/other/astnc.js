//主线程直接执行
console.log('1');
//丢到宏事件队列中
setTimeout(function() {
  console.log('2');
  process.nextTick(function() {
    console.log('3');
  })
  new Promise(function(resolve) {
    console.log('4');
    resolve();
  }).then(function() {
    console.log('5')
  })
})
//微事件1
process.nextTick(function() {
  console.log('6');
})
//主线程直接执行
new Promise(function(resolve) {
  console.log('7');
  resolve();
}).then(function() {
  //微事件2
  console.log('8')
})
//丢到宏事件队列中
setTimeout(function() {
  console.log('9');
  process.nextTick(function() {
    console.log('10');
  })
  new Promise(function(resolve) {
    console.log('11');
    resolve();
  }).then(function() {
    console.log('12')
  })
})
  /*
  * 执行顺序  主线程    主线程微任务      执行完成后异步宏任务添加到主线程执行异步宏任务    宏任务执行完成执行宏任务内的微任务
  *
  * 1
    7
    6
    8
    2
    4
    9
    11
    3
    10
    5
    12
  * */
  async function FF () {
    console.log('then0')
    await console.log("then1")
    await console.log("then2")
    return 3
  }
FF().then(e => {console.log('return' + e)})
