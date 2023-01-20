function horas() {
     const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

     const semanas = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

     var txthoras = document.getElementById('horastxt')
     var txtminutos = document.getElementById('minutostxt')
     var txtsegundos = document.getElementById('segundostxt')
     var data_extenso = document.getElementById('data-extenso')
     var h1_font = document.getElementById('font')
     var icon_clock_color = document.getElementById('icon-clock-id')
     var detail_x_white_left = document.getElementById('detail-x')
     var detail_x_white_right = document.getElementById('detail-x-right')
     var detail_dots_1 = document.getElementById('detail-dots')
     var detail_dots_2 = document.getElementById('detail-dots2')
     var legenda = document.getElementById('legenda')
     var legenda1 = document.getElementById('legenda1')
     var legenda2 = document.getElementById('legenda2')
     var lista = document.getElementById('lista')
     var calendar = document.getElementById('icon-calendar')
     var data = new Date()
     var horas = data.getHours()
     var minutos = data.getMinutes()
     var segundos = data.getSeconds()
     var diaSem = data.getDay()
     var dia = data.getDate()
     var mes = data.getMonth()
     var ano = data.getFullYear()
     
     txtsegundos.innerHTML = `${segundos}`
     txtminutos.innerHTML = `${minutos}`
     txthoras.innerHTML = `${horas}`
     
     if (horas >= 0 && horas <= 9) {
          txthoras.innerHTML = 0 + `${horas}`
     }

     if (minutos >= 0 && minutos <= 9) {
          txtminutos.innerHTML = 0 + `${minutos}`
     }

     if (segundos >= 0 && segundos <= 9) {
          txtsegundos.innerHTML = 0 + `${segundos}`
     }

     if (horas >= 0 && horas <= 5) {
          document.body.style.backgroundImage = "URL(../imgs/back-madrugada.svg)"
          legenda.classList.add("legenda")
          legenda1.classList.add("legenda")
          legenda2.classList.add("legenda")
          h1_font.classList.add("h1-font-white")
          txtsegundos.style.color = "#FBFBFB"
          txtsegundos.style.backgroundColor = "#4D4C4C"
          txtminutos.style.backgroundColor = "#4D4C4C"
          txtminutos.style.color = "#FBFBFB"
          txthoras.style.backgroundColor = "#4D4C4C"
          txthoras.style.color = "#FBFBFB"
          lista.classList.add("lista")
          data_extenso.style.color = "#FBFBFB"
          calendar.classList.add("icon-calendar-white")
          icon_clock_color.classList.add("icon-clock-white")
          detail_x_white_left.classList.add("detail-x-white")
          detail_dots_1.classList.add("detail-dots-white")
          detail_dots_2.classList.add("detail-dots-white")
          detail_x_white_right.classList.add("detail-x-white")
          document.getElementById('bg-dinamico').setAttribute('src', '../imgs/madrugada.png');
     }

     if (horas >= 6 && horas <= 12) {
          document.body.style.backgroundImage = "URL(../imgs/back-manha.svg)"
          legenda.style.color = "#FBFBFB"
          legenda.style.backgroundColor = "#4D4C4C"
          legenda1.style.color = "#FBFBFB"
          legenda1.style.backgroundColor = "#4D4C4C"
          legenda2.style.color = "#FBFBFB"
          legenda2.style.backgroundColor = "#4D4C4C"
          h1_font.classList.add("h1-font-black")
          txtsegundos.style.color = "#4D4C4C"
          txtsegundos.style.backgroundColor = "#FBFBFB"
          txtminutos.style.backgroundColor = "#FBFBFB"
          txtminutos.style.color = "#4D4C4C"
          txthoras.style.backgroundColor = "#FBFBFB"
          txthoras.style.color = "#4D4C4C"
          lista.style.backgroundColor = "#FBFBFB"
          data_extenso.style.color = "#4D4C4C"
          document.getElementById('bg-dinamico').setAttribute('src', '../imgs/manha.png');
     }

     if (horas >= 13 && horas <= 18) {
          document.body.style.backgroundImage = "URL(../imgs/back-tarde.svg)"
          legenda.style.color = "#FBFBFB"
          legenda.style.backgroundColor = "#4D4C4C"
          legenda1.style.color = "#FBFBFB"
          legenda1.style.backgroundColor = "#4D4C4C"
          legenda2.style.color = "#FBFBFB"
          legenda2.style.backgroundColor = "#4D4C4C"
          h1_font.classList.add("h1-font-black")
          txtsegundos.style.color = "#4D4C4C"
          txtsegundos.style.backgroundColor = "#FBFBFB"
          txtminutos.style.backgroundColor = "#FBFBFB"
          txtminutos.style.color = "#4D4C4C"
          txthoras.style.backgroundColor = "#FBFBFB"
          txthoras.style.color = "#4D4C4C"
          lista.style.backgroundColor = "#FBFBFB"
          data_extenso.style.color = "#4D4C4C"
          document.getElementById('bg-dinamico').setAttribute('src', '../imgs/tarde.png');
     }

     if (horas >= 19 && horas <= 23) {
          document.body.style.backgroundImage = "URL(../imgs/back-noite.svg)"
          legenda.classList.add("legenda")
          legenda1.classList.add("legenda")
          legenda2.classList.add("legenda")
          h1_font.classList.add("h1-font-white")
          txtsegundos.style.color = "#FBFBFB"
          txtsegundos.style.backgroundColor = "#4D4C4C"
          txtminutos.style.backgroundColor = "#4D4C4C"
          txtminutos.style.color = "#FBFBFB"
          txthoras.style.backgroundColor = "#4D4C4C"
          txthoras.style.color = "#FBFBFB"
          lista.classList.add("lista")
          data_extenso.style.color = "#FBFBFB"
          calendar.classList.add("icon-calendar-white")
          icon_clock_color.classList.add("icon-clock-white")
          detail_x_white_left.classList.add("detail-x-white")
          detail_dots_1.classList.add("detail-dots-white")
          detail_dots_2.classList.add("detail-dots-white")
          detail_x_white_right.classList.add("detail-x-white")
          document.getElementById('bg-dinamico').setAttribute('src', '../imgs/noite.png');
     }

     switch (diaSem) {
          case 0:
               data_extenso.innerHTML = (dia + " de " + meses[(mes)] + " de " + ano)
               break
          case 1:
               data_extenso.innerHTML = (dia + " de " + meses[(mes)] + " de " + ano)
               break
          case 2:
               data_extenso.innerHTML = (dia + " de " + meses[(mes)] + " de " + ano)
               break
          case 3:
               data_extenso.innerHTML = (dia + " de " + meses[(mes)] + " de " + ano)
               break
          case 4:
               data_extenso.innerHTML = (dia + " de " + meses[(mes)] + " de " + ano)
               break
          case 5:
               data_extenso.innerHTML = (dia + " de " + meses[(mes)] + " de " + ano)
               break
          case 6:
               data_extenso.innerHTML = (dia + " de " + meses[(mes)] + " de " + ano)
               break
          default:
               data_extenso.innerHTML ='[Erro] Dia inválido!'
               break
     }
     setTimeout('horas()',500)
}