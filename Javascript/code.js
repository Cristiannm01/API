
var url = "https://picsum.photos/500/500";
var imagenOriginal
var nameDownload = 'image.jpg'
var color = ""
function getImage() {

    fetch(url).then(resp => resp.blob())
        .then(blob => {
            url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = url
            a.download = nameDownload
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
        })
        .catch(() => alert('error'))

    imagenOriginal = document.getElementById('imagen')
}

function aplicarFiltro(filter) {
    imagenOriginal = document.getElementById("imagen")
    var imagenFiltro = document.getElementById("canvasFiltro")
    filter = LenaJS[filter]
    LenaJS.filterImage(imagenFiltro, filter, imagenOriginal)
}
