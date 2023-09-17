let inputPrompt = document.getElementById('inputPrompt')

inputPrompt.addEventListener('keydown',(e)=>{
    let val = inputPrompt.value
    if(e.key=="Enter") {
        console.log(val); 
        inputPrompt.value=""
    }
})

function addMsg(msg){
    let msgContainer = document.getElementById('msgContainer')
    msgContainer.appendChild('')
}