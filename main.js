function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95bzE/model.json', modelLoaded);
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function draw()
{
  imageClassifier(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);  
}

function gotResult(error, result)
{
    if (error)
    {
        console.error(error);
    }

    else
    {
        console.log(result);
        document.getElementById("result_member_name").innerHtml = result[0].label;
        document.getElementById("result_member_accuracy").innerHtml = result[0].confidence.toFixed(3);
    }
}