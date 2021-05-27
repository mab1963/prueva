function copyr(self){
    let original= self.innerHTML
    self.innerHTML =`<button>Copied!</button>`
    setTimeout(function(){
        self.innerHTML=original
    },2000)
}
function open_menu(){
    document.getElementById("menu").classList.add("open")
}
function close_menu(){
    document.getElementById("menu").classList.remove("open")
}
