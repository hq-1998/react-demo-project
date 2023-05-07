// eslint-disable-next-line @typescript-eslint/no-explicit-any
const retryPromise = (promiseFn: Promise<(...args: unknown[]) => any>, retries = 3) => {
  return new Promise((resolve, reject) => {
    const run = () => {
      promiseFn.then(resolve).catch((error) => {
        if (retries > 0) {
          retries--
          run()
        } else {
          reject(error)
        }
      })
    }

    run()
  })
}

export { retryPromise }
