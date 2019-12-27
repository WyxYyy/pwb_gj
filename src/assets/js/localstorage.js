
export function setLocal(name,content) {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  }
  
  export function getLocal(name) {
    if (!name) return
    return window.localStorage.getItem(name)
  }
  
  export function delLocal(name) {
    if (!name) return
    window.localStorage.removeItem(name)
  }
  