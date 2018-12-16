const callAllCallbacks = (...fn) => (...args) => fn.forEach(fn => fn && fn(...args));

export default callAllCallbacks;
