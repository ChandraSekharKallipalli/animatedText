var string = "Hello I'm Chandra Sekhar Kallipalli and i'm From Sullurupeta, currently i'm working for phenom, I Love Developing Websites and Algorithms.";
var str = string.split("");
var el = document.getElementById('str');
var running; 

(function animate() {
    if (str.length > 0) {
        el.innerHTML += str.shift();
        running = setTimeout(animate, 100);
    } else {
        setTimeout(function () {
            el.innerHTML = "";
            str = string.split("");
            running = setTimeout(animate, 100);
        }, 4000);
    }
})();

console.log(str);
