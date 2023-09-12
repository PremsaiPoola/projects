const panelled_div=document.querySelectorAll('.panel');
panelled_div.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActive()
        panel.classList.add('active')
    })
})
function removeActive() {
    panelled_div.forEach(panel => {
        panel.classList.remove('active')
    })
}