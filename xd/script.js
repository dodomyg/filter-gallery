(function(){
    const button=document.querySelectorAll('#press')
    const storeImg=document.querySelectorAll('.gallary-item')

    button.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter

            storeImg.forEach((item)=>{
                if(filter==='all'){
                    item.style.display='block'
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display="block"
                    }else{
                        item.style.display="none"
                    }
                }
            })



        })
    })
})();



