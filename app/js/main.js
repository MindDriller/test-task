$(document).ready(function () {
    //Password minimum characters
    $('input').keyup(function () {
        var _self   = $(this),
            pass    = _self.val();

        if (pass.length < 6) {
            _self.css({'border-color': 'red'});
        } else {
            _self.css({'border-color': 'green'});
        }
    });
})