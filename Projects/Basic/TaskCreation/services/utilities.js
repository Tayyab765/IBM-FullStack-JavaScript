

export const tab_deactivator = () =>{
     document.querySelectorAll('.tab_menu').forEach(prev=>{
            prev.classList.remove('active_tab')
        })
}