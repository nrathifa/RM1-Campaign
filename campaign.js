    function validateForm() {
        var name = document.getElementById("name").value;
        var staffNo = document.getElementById("staffNo").value;
        var contact = document.getElementById("contactno").value;
        var email = document.getElementById("email").value;
        var amount = document.getElementById("amount").value;

        if (name === "" || staffNo === "" || contactno === "" || email === "" || amount === "" || isNaN(amount) || amount <= 0) {
            alert("Please fill out the form correctly.");
            return false;
        }


        return true;
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    var kulliyyah = document.getElementById('kulliyyah');