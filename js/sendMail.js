(function(){
    emailjs.init("UPps8hPXuKX8ybWp2");
})();

function sendEmail() {
    emailjs.send("default_service", "template_t60eazq", {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        from_phone: document.getElementById('from_phone').value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Email sent successfully!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('Failed to send email. Please try again.');
    });
    window.alert("hello!");
}