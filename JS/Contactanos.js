function validation1()
                    {
                    var form = document.getElementById("form1");
                    var email = document.getElementById("email1").value;
                    var text = document.getElementById("text1");
                    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
                    
                    if (email.match(pattern))
                    {
                        form1.classList.add("valid");
                        form.classList.remove("invalid");
                        text1.innerHTML = "";
                    }
                    else
                    {
                        form1.classList.remove("valid");
                        form1.classList.add("invalid");
                        text1.innerHTML = "Por favor ingresá un Email válido";
                        text1.style.color = "#ff4500";
                    }
        
                    if (email1 == "")
                    {
                        form1.classList.remove("valid");
                        form1.classList.remove("invalid");
                        text1.innerHTML = "";
                    }
        
                    }

                    function validation2()
                    {
                    var form = document.getElementById("form2");
                    var email = document.getElementById("email2").value;
                    var text = document.getElementById("text2");
                    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
                    
                    if (email.match(pattern))
                    {
                        form2.classList.add("valid");
                        form2.classList.remove("invalid");
                        text2.innerHTML = "";
                    }
                    else
                    {
                        form2.classList.remove("valid");
                        form2.classList.add("invalid");
                        text2.innerHTML = "Por favor ingresá un Email válido";
                        text2.style.color = "#ff4500";
                    }
        
                    if (email == "")
                    {
                        form.classList.remove("valid");
                        form.classList.remove("invalid");
                        text.innerHTML = "";
                    }
        
                    }
