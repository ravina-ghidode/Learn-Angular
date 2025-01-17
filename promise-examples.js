//Basic Promise Examples

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise Resolved Successfully");
  } else {
    reject("Promise rejected");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//Chaining promise

const promiseChain = new Promise((resolve, reject) => resolve(5));
promiseChain
  .then((n) => {
    console.log(n);
    return n * 2;
  })
  .then((n) => {
    console.log(n);
    return n + 10;
  })
  .then((n) => {
    console.log(n);
    return n - 10;
  });

//   Using async/await with Promises

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Successfully");
    }, 1000);
  });
}

async function load() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
load();

// Promise with finally

const testPromise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    success ? resolve("Done") : reject("Failure");
  }, 2000);
});
testPromise
  .then((result) => console.log("result", result))
  .catch((error) => console.log("Error", error))
  .finally(() => console.log("Always Executes"));
