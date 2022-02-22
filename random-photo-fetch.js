
let randomImage = document.querySelector('.random-image');  //this grabs our '.random-image' tag and saves it to variable 'randomImage
console.log("randomImage:", randomImage);

fetch('https://source.unsplash.com/random')                 //FETCH will go GET request to the random endpoint of Unsplash API
.then(function(response) {                                  //FETCH starts PROMISE; 'then()' will return that promise in the form of RESPONSE
    if (!response.ok) {                                     //To be safe, we check to see if RESPONSE is 'ok'.  if not, will return error.
        console.log(response);
        return new Error(response);                         //ERROR will CATCH anything weird or incorrect that could break our application.
    }
    console.log("Response:", response);
    return response.blob();                                 //Using '.blob()' instead of 'response.json()'.  
})                                                          //BLOB: an image or file-like object that isn't necessarily in JavaScript-native format.
.then(function(photoBlob) {
    console.log("My Blob:", photoBlob)
    var objectURL = URL.createObjectURL(photoBlob);         //URL is created to represent Blob object. Can now use that URL for our object to use '<img>'.
    console.log("Object URL:", objectURL);                  
    randomImage.src = objectURL;                            //Now have 'objectURL' variable. Can now set 'src' of our 'randomImage' to be our new URL.

    console.log("randomImage.src:", randomImage.src);
})
.catch(function(err) {                                      //This is the CATCH for any errors.
    console.log(err); 
});
