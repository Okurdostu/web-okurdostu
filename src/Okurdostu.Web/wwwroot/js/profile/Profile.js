﻿var Form = $("#profile-form");

Form.submit(function (e) {
    e.preventDefault();
    var _Fullname = $("input[name='FullName']").val();
    var _Biography = $("textarea[name='Biography']").val();

    if (_Fullname < 5) {
        Toast.fire()
        {
            Toast.fire({
                icon: 'warning',
                html: '<span class="font-weight-bold text-black-50 ml-1">Ad ve soyad için en az 5 karakter girmelisin</span>'
            });
        }
    }
    else if (_Fullname > 50)
    {
        Toast.fire()
        {
            Toast.fire({
                icon: 'warning',
                html: '<span class="font-weight-bold text-black-50 ml-1">Ad ve soyad: Çok uzun, en fazla 50 karakter</span>'
            });
        }
    }
    else {
        $.post("/api/account/profile", { FullName: _Fullname, Biography: _Biography })
            .done(function (result) {
                if (result.status === true) {
                    Toast.fire({
                        icon: 'success',
                        html: '<span class="font-weight-bold text-black-50 ml-1">' + result.message + '</span>'
                    });
                    setInterval(function () {
                        location.reload();
                    }, 2000);
                }
                else {
                    Toast.fire({
                        icon: 'warning',
                        html: '<span class="font-weight-bold text-black-50 ml-1">' + result.message + '</span>'
                    });
                }
            });
    }
});
