let hideValidationMessage = function() {
        let forEach = Array.prototype.forEach;
        let spans = document.querySelectorAll('span[data-rule]');
        forEach.call(spans, function(span){
                    span.setAttribute('class','hide');
        });
        document.getElementById('change-email-form').checkValidity(); 

    };
    let showMessage = function() {
            let shows = this.nextElementSibling.querySelectorAll('span[data-rule]');
            forEach.call(shows, function(show) {
                show.classList.remove('hide');
            })
        }

    let inputs = document.querySelectorAll('input');
    let forEach = Array.prototype.forEach;
    forEach.call(inputs, function(input) {
        input.onfocus = showMessage;
        input.addEventListener('blur', hideValidationMessage);
        input.addEventListener('invalid', validateMessage);  
    });

    function validateMessage(e) {
        if(!e.currentTarget.validity.valid){
            let spans = e.currentTarget.nextElementSibling.querySelectorAll('span[data-rule]');
            forEach.call(spans, function(span) {
                let validationMessage = span.getAttribute('data-rule');
                if(e.currentTarget.validity[validationMessage]) {
                    let showMessages = e.currentTarget.nextElementSibling.
                    querySelectorAll('[data-rule=' + validationMessage + ']');
                    forEach.call(showMessages, function(showMessage) {
                        showMessage.classList.remove('hide');
                    })
                }
            });
            e.preventDefault();
        }   
    }
