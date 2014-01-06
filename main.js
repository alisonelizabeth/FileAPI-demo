$(document).ready(function(){      
    $("#file").change(function(){
        readURL(this);
    });
});
// end of document ready

function readURL(input) {
    if (input.files && input.files[0]) {
    	console.log(input.files)
        console.log(input.files[0])
    	// files represents FileList 
    	
        var reader = new FileReader();
        console.log(reader)
        // FileReader provides methods to read File

        reader.onload = function(e) {
            $('#image-preview').attr('src', e.target.result);
            console.log(e.target.result)
        }
        // When the load finishes, the reader's onload event is fired
        // Result attribute is used to access file data

        reader.readAsDataURL(input.files[0]);
        // FileReader has four options for reading a file
        // One of which is FileReader.readAsDataURL(File)
        // Contains data URL for file
        // *this is set up to only preview one image
    }
}   

// Resources:
// http://www.w3.org/TR/file-upload/
// http://www.html5rocks.com/en/tutorials/file/dndfiles/ 
// http://www.onlywebpro.com/2012/01/24/create-thumbnail-preview-of-images-using-html5-api/