const paragItem = document.querySelectorAll('.card_info_item_title')
const btnItem = document.querySelectorAll('.card_info_item_icon')
const itemInfo = document.querySelectorAll('.card_info_item_parag')
const itemTitle = document.querySelectorAll('.card_info_item_title')

// Recorrido por el array de 5 items
paragItem.forEach((item, index) => { // Recorremos array y rescatamos su índice
    // Evento que escucha el elemento item que ha recibido un click
    item.addEventListener('click', function () {
        // variables
        let valor = index
        let todos = [0, 1, 2, 3, 4]
        // Recorrido por cada item del array
        todos.forEach(elemento => {
            // En caso de que algún ítem tenga aplicada la clase que lo muestra, la removemos
            if (valor != elemento) {
                btnItem[elemento].classList.remove('rotate')
                itemInfo[elemento].classList.remove('show_info')
                itemTitle[elemento].classList.remove('bolder')
                // Acá al ítem que recibió el click, se le añadirá la clase para que se muestre
                // Para eso se utiliza el ínidce del ítem clickeado, el cual ha sido renombrado
                // en la variable "valor"
            } else {
                btnItem[valor].classList.add('rotate')
                itemInfo[valor].classList.add('show_info')
                itemTitle[valor].classList.add('bolder')
            }
        })
    })
})