const btn = document.querySelector('.btn')

const debounce = () => {
    let timeoutId
    return () => {
        console.log(timeoutId)
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            console.log('you clicked me')
        }, 2000);
    }
}

btn.addEventListener('click', debounce())