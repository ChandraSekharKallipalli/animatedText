var string = "Hello I'm Chandra Sekhar Kallipalli From Sullurupeta, I Love Developing Websites and Algorithms.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
    if (str.length > 0){
        el.innerHTML += str.shift()
    }else {
        clearInterval(running)
        el.innerHTML = ""
        str = string.split("")
    }

var running = setTimeout(animate, 100);
})();
console.log(str)
