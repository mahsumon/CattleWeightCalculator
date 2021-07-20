
document.getElementById('result').onclick = function weight() {
    var length = document.getElementById('length').value
    var girth = document.getElementById('girth').value

    var result = Math.round(length * girth * girth / 660)

    document.getElementById('weight').innerHTML = result
}