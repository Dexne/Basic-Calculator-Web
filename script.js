// Declaración de constantes para manejar la pantalla y los botones
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// ciclo para identificar los botones
buttons.forEach(( item ) => {
    // cases
    item.onclick = () => {
        if( item.id=="clear" ){// boton clear
            display.innerText="";
        }else if(item.id=="backspace"){// boton borrar
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1)
        }else if(display.innerText != "" && item.id=="equal"){// boton igual
            display.innerText=eval(display.innerText);
        }else if(display.innerText=="" && item.id=="equal"){// borrar el contenido pasando 2 segundos
            display.innerText="Null";
            setTimeout(() => (display.innerText=""),2000);
        }else{// presionar botones
            display.innerText += item.id;
        }
    }
})

// cambiar el tema
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

// comenzar con tema oscuro
let isDark = true;
themeToggleBtn.onclick = () =>{
    // afectar toda la calculadora
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}