const navigation = document.getElementById('navigation')
const content = document.getElementById('content')
let prevScrollSize = window.scrollY

window.onscroll = function(){
    let currentScrollSize = window.scrollY
    if (prevScrollSize > currentScrollSize){
        navigation.style.top = 0
    }else{
        navigation.style.top = '-60px'
    }
    prevScrollSize = currentScrollSize
}