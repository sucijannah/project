function validasi() {
    var nama = document.getElementById("nama").value;
    var jenis = document.getElementById("jenis").value;
    var decs = document.getElementById("decs").value;
    var date = document.getElementById("date").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var email = document.getElementById("email").value;
    var rqst = document.getElementById("rqst").value;
    // var pw = document.getElementById("password").value;
    // var username = document.getElementById("username").value;

    if (jenis !="" && nama !="" && decs !="" && date !="" && rqst !="" && phonenumber !="" && email !="" && email) {
        return true;
    }

    else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}

function login(){
    const pw = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    if(username !== 'a' && pw !== '1'){
        alert('Anda harus mengisi data')
        return
    }
    window.open("./datamontir_adminpage.html")
}

function daftar(){
    window.open("./index.html")
}