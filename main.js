const getValues = () => {

    let deg1 = document.getElementById("rotateX").value;
    let deg2 = document.getElementById("rotateY").value;
    let deg3 = document.getElementById("rotateZ").value;
    let deg4 = document.getElementById("skewX").value;
    let deg5 = document.getElementById("skewY").value;

    return { deg1, deg2, deg3, deg4, deg5 };
}

const changeValue = () => {

    const { deg1, deg2, deg3, deg4, deg5 } = getValues();
    const image = document.getElementById("image");

    image.style.transform = `
        rotateX(${deg1}deg) rotateY(${deg2}deg) rotateZ(${deg3}deg) skewX(${deg4}deg)
        skewY(${deg5}deg)
    `

}

const findValue = () => {

    const { deg1, deg2, deg3, deg4, deg5 } = getValues();

    let output = document.getElementById("output");
        output.innerHTML = ` transform : 
        rotateX(${deg1}deg) rotateY(${deg2}deg) rotateZ(${deg3}deg) skewX(${deg4}deg)
        skewY(${deg5}deg);
    `
}

const reset = () => {

    document.getElementById("rotateX").value = 0;
    document.getElementById("rotateY").value = 0;
    document.getElementById("rotateZ").value = 0;
    document.getElementById("skewX").value = 0;
    document.getElementById("skewY").value = 0;

    image.style.transform = `
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg)
        skewY(0deg)
    `
}

const copy = () => {

    const text = document.getElementById("output").innerHTML;

    navigator.clipboard.writeText(text).then(function(){
        console.log('Code Copied')
    }, function(err){
        console.log('Could not copy text ', err)
    })
}
