function _(e) {
    return document.getElementById(e)
}

function submitForm() {
    _("formBtn").disabled = !0, _("formStatus").innerHTML = "please wait ...";
    var e = new FormData;
    e.append("n", _("n").value), e.append("e", _("e").value), e.append("s", _("s").value), e.append("m", _("m").value);
    var n = new XMLHttpRequest;
    n.open("POST", "mail.php"), n.onreadystatechange = function () {
        4 == n.readyState && 200 == n.status && ("success" == n.responseText ? _("formStatus").innerHTML = "<h2>Thanks " + _("n").value + ", your message has been sent.</h2>" : (_("formStatus").innerHTML = n.responseText, _("formBtn").disabled = !1))
    }, n.send(e)
}