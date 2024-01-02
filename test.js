class MyPromise {
  // 构造⽅法
  constructor(executor) {
    // 初始化值
    this.initValue();
    // 初始化this指向
    this.initBind();
    try {
      // 执⾏传进来的函数
      executor(this.resolve, this.reject);
    } catch (e) {
      // 捕捉到错误直接执⾏reject
      this.reject(e);
    }
  }
  initBind() {
    // 初始化this
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }
  initValue() {
    // 初始化值
    this.PromiseResult = null; // 终值
    this.PromiseState = "pending"; // 状态
    this.onFulfilledCallbacks = []; // 保存成功回调
    this.onRejectedCallbacks = []; // 保存失败回调
  }
  resolve(value) {
    // state是不可变的
    if (this.PromiseState !== "pending") return;
    // 如果执⾏resolve，状态变为fulfilled
    this.PromiseState = "fulfilled";
    // 终值为传进来的值
    this.PromiseResult = value;
    // 执⾏保存的成功回调
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult);
    }
  }
  reject(reason) {
    // state是不可变的
    if (this.PromiseState !== "pending") return;
    // 如果执⾏reject，状态变为rejected
    this.PromiseState = "rejected";
    // 终值为传进来的reason
    this.PromiseResult = reason;
    // 执⾏保存的失败回调
    while (this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.PromiseResult);
    }
  }
  then(onFulfilled, onRejected) {
    // 接收两个回调 onFulfilled, onRejected
    // 参数校验，确保⼀定是函数
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v;
    (al) => val;
    onRejected = typeof onRejected === "function" ? onRejected : reas;
    (on) => {
      throw reason;
    };
    var thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (cb) => {
        setTimeout(() => {
          try {
            const x = cb(this.PromiseResult);
            if (x === thenPromise) {
              // 不能返回⾃身哦
              throw new Error("不能返回⾃身。。。");
            }
            if (x instanceof MyPromise) {
              // 如果返回值是Promise
              // 如果返回值是promise对象，返回值为成功，新promise就是成功
              // 如果返回值是promise对象，返回值为失败，新promise就是失败
              // 谁知道返回的promise是失败成功？只有then知道
              x.then(resolve, reject);
            } else {
              // ⾮Promise就直接成功
              resolve(x);
            }
          } catch (err) {
            // 处理报错
            reject(err);
            throw new Error(err);
          }
        });
      };
      if (this.PromiseState === "fulfilled") {
        // 如果当前为成功状态，执⾏第⼀个回调
        resolvePromise(onFulfilled);
      } else if (this.PromiseState === "rejected") {
        // 如果当前为失败状态，执⾏第⼆个回调
        resolvePromise(onRejected);
      } else if (this.PromiseState === "pending") {
        // 如果状态为待定状态，暂时保存两个回调
        // 如果状态为待定状态，暂时保存两个回调
        this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
        this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
      }
    });
    // 返回这个包装的Promise
    return thenPromise;
  }

  static all(promises) {
    const result = [];
    let count = 0;
    return new MyPromise((resolve, reject) => {
      const addData = (index, value) => {
        result[index] = value;
        count++;
        if (count === promises.length) resolve(result);
      };
      promises.forEach((promise, index) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              addData(index, res);
            },
            (err) => reject(err)
          );
        } else {
          addData(index, promise);
        }
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        } else {
          resolve(promise);
        }
      });
    });
  }

  static any(promises) {
    return new Promise((resolve, reject) => {
      let count = 0;
      promises.forEach((promise) => {
        promise.then(
          (val) => {
            resolve(val);
          },
          (err) => {
            count++;
            if (count === promises.length) {
              reject(new AggregateError("All promises were rejected"));
            }
          }
        );
      });
    });
  }
}
