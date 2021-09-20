const enviar = document.getElementById("submit");
        
        function validarContraseña()
        {   
            var formularioContrasenia,expresiones;
             formularioContrasenia = document.getElementById("inputContraseña").value;
             //al menos un dígito, al menos una minúscula y al menos una mayúscula
             expresiones= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{0,6}$/;
            if(!!formularioContrasenia.length>6 && !!expresiones.test(formularioContrasenia))
            {
                alert("Tu contraseña tiene que tener al menos 6 caracteres,al menos un dígito, al menos una minúscula y al menos una mayúscula");
                return false;
            }
        }
        enviar.addEventListener("click",validarContraseña())
        {
        
        }



