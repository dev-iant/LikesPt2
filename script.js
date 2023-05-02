var likeArray = [9, 12, 9]
var Neil = document.querySelector(".p1")
var Nichole = document.querySelector(".p2")
var Jim = document.querySelector(".p3")
// console.log(Neil)

function NeilAdd() {
    likeArray[0]++
    Neil.innerText = (likeArray[0] + " Like(s)")
    console.log(likeArray[0])
}

function NicholeAdd() {
    likeArray[1]++
    Nichole.innerText = (likeArray[1] + " Like(s)")
    console.log(likeArray[1])
}

function JimAdd() {
    likeArray[2]++
    Jim.innerText = (likeArray[2] + " Like(s)")
    console.log(likeArray[2])
}