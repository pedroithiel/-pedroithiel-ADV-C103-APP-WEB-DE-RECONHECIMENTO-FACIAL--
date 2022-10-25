Webcam.set({
    width:350,
    height: 300,
    image_format: "png",
    png_quality: 90,
});
Camera = elemento("camera")
Webcam.attach("#camera");


function tela() {
    Webcam.snap(function(data_uri) {
        elemento("CapturaTela").innerHTML = "<img id = 'captura' src ='"+data_uri+"'>"
    })
}

console.log("ml5 version", ml5.version )

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QEl9qZmDl/model.json", modelLoaded)

function modelLoaded() {
console.log("model")
}

function identificador() {
    img = elemento("captura")
    classifier.classify(img,object)
}

function object(error,resultado) {
    if(error) {
        console.log(error)
        alert("tire a foto novamente, algum erro ocorreu.")
    } else{
        var num = resultado[0].confidence
          
          var num2 = num.toFixed(2);
        console.log(resultado);
        elemento("resultObjectName").innerHTML = resultado[0].label;
        elemento("resultObjectAccuracy").innerHTML = num2;
        
    }

}

function elemento(name) {
    return document.getElementById(name);
}
