function buttonLoad_Click(button){
    button.textContent = "Скачивается.....";

    setTimeout(()=>{
        button.textContent = "Установлено";
        button.disabled = true;
    },2000);
}