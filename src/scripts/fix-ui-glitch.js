// Handling visual glitches due to web-component load

;(() => {
    document.body.style.opacity = '0'
    window.addEventListener('WebComponentsReady', function () {
        document.body.style.opacity = '1'
    })
})()
