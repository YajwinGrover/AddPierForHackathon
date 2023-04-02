document.getElementById('pic').addEventListener('change', function(e){
    var fileInput = document.getElementById('pic')
    var file = fileInput.files[0]
    var imageType = '/image.*/';

    if(file && file['type'].split('/')[0] == 'image'){
        var a = document.createElement('a')
        var imageDisplay = document.getElementById('show-image')
        var image = new Image()
        imageDisplay.innerHTML = "";
        url = URL.createObjectURL(file)
        image.src = url
        image.style.maxWidth = '70%';
        image.style.maxHeight = '70%';
        image.id = 'img-holder'
        imageDisplay.appendChild(image)
        a.href = url
        a.download = "image.jpg"
        
        a.style.display = 'none';
        document.body.appendChild(a)
        
        // a.click()
        setTimeout(function(){ window.URL.revokeObjectURL(url); }, 3000);
    }
    else{
        alert("FILE TYPE NOT SUPPORTED!!!!!!!!!!")
    }
});

function clickMe(event){
    var name = document.getElementById('name').value
    var long = document.getElementById('long').value
    var lat = document.getElementById('lat').value
    var fishes = document.getElementById('fishes').value
    

    const file = new Blob([name + "/" + long + "/" + lat + "/" + fishes + "/" + "image.jpg"], { type: 'text/plain' });
    var a = document.createElement('a')
    url = URL.createObjectURL(file)
    
    a.href = url
    a.download = "data.txt"
    
    a.style.display = 'none';
    document.body.appendChild(a)
    
    a.click()
    const reader = new FileReader();
    var b = document.createElement('a')
    img = URL.createObjectURL(document.getElementById('pic').files[0])
    b.href = img
    b.download = 'image.jpg'
    b.style.display = 'none'
    document.body.appendChild(b)
    b.click();

    setTimeout(function(){ window.URL.revokeObjectURL(url); window.URL.revokeObjectURL(img);}, 3000);
}


