const heading = document.querySelector('.heading')
console.log(heading)

const listItems = document.querySelectorAll('.list-item')
console.log(listItems)

const getElement = (selector,isList) => {
    if(isList){
        const el = [...document.querySelectorAll(selector)];
        if(el.length < 1) {
            throw new Error(`Please double check selector : ${selector}`)
        }
        return el
    }
    const el = document.querySelector(selector)
    if(el) return el
    throw new Error(`Please double check selector : ${selector}`)
}

console.log(getElement('.heading'))