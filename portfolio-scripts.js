function callModal(modalId, imageId, modalContentId, modalCaptionId, closeId) {
    var modal = document.getElementById(modalId);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(imageId);
    var modalImg = document.getElementById(modalContentId);
    var captionText = document.getElementById(modalCaptionId);
    //img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    //}

    // Get the <span> element that closes the modal
    var span = document.getElementById(closeId);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";

    }
}