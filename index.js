function load(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/fotomanha.png'
        document.body.style.backgroundColor = " #fde7a9"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/fototarde.png'
        document.body.style.backgroundColor = "#fca870" 
    } else {
        img.src = 'assets/fotonoite.png'
        document.body.style.backgroundColor = "#45575b"
    }
}

