document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('contact-form');

    form.addEventListener('submit',function(event){
        event.preventDefault();

        emailjs.sendForm('service_n07ibj8', 'template_tz4ai2h', form)
         .then(()=>{
            alert('Message sent successfully!');
            form.reset();
         }, (error)=>{
            alert('Failed to send message. Please Try Again');
            console.error('EmailJS Error:', error);
         });
    });
});