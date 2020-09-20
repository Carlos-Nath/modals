(function() {
    var btnModal = document.getElementById('btnModal');
    var modal = document.getElementById('modal');
    var btnClose = document.getElementById('btnClose');
    //
    btnModal.addEventListener('click', function(event) {
        modal.style.display = "block";
    });
    btnClose.addEventListener('click', function(event) {
        modal.style.display = "none";
    });
})();