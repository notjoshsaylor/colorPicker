let color 
let choosenColor
let schemeMode 
let colorCombo = []

document.getElementById("colorSquare").addEventListener("input", function(a){
    a.preventDefault()
    color = this.value
    choosenColor = color.slice(1)
})

document.getElementById("scheme").addEventListener("input", schemeFunct)

function schemeFunct(a){
    a.preventDefault()
    schemeMode = a.target.value
}

document.getElementById("colorBtn").addEventListener("click", function(a){
    a.preventDefault()
    colorCombo = []

    fetch(`https://www.thecolorapi.com/scheme?hex=${choosenColor}&mode=${schemeMode}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.colors.length; i++){
                colorCombo.push(data.colors[i].hex.value)
            }

            let html = ""
            for(let i = 0; i < colorCombo.length; i++){
                html += `
                    <div class="container">
                    <div class="color" style="background-color: ${colorCombo[i]}">${colorCombo[i]}</div>
                    </div>
                    `
            }
            document.getElementById("displayColor").innerHTML = html
        })
})