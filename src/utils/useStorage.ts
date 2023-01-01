function useWindow() {
  if (typeof window === 'undefined')
    return null
  return window
}

function useStorage<T>(key: string): T
function useStorage<T>(key: string, value: T): T
function useStorage<T>(key: string, value?: T) {
  const _w = useWindow()
  if (!_w)
    return
  if (arguments.length === 2 && typeof value !== 'undefined') {
    _w.localStorage.setItem(key, JSON.stringify(value))
    return value
  }
  else {
    const cache = _w.localStorage.getItem(key)
    if (cache !== null)
      return JSON.parse(cache)
  }
}

export {
  useWindow,
  useStorage,
}
