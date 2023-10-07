# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

/\* RETOS:

1. Reparar que si se elige más de un operador, se reemplace el anterior
2. Reparar que luego de mostrar el resultado, se permita clickear un operador pero si se clickea un número comience una nueva operación.
3. Que los input se muestren pequeños arriba y el resultado más grande abajo
   \*/

/\*
Para el reto del proyecto 3: manejar los inputs inválidos en la calculadora, propongo lo siguiente:
const calcularResultado = () => {
if (input) {
setInput(evaluate(input));
} else {
alert('Por favor. Indique valores y operaciones correctamente');
}

      try {
        setInput(evaluate(input));
      }
      catch {
        setInput('Error');
      }
    };

La manera anterior está comentada. Yo quise probar con try/catch para que cuando evaluate diera un error, apareciera la palabra error en la pantalla de la calculadora. Me parece que funciona.

\*/

/_
El tema de la calculadora solo un pequeño detalle. Si se meten operadores al principio, por ejemplo _, +, / etc... y luego se pulsa en =, tenemos otro error. ¿La solución? Usar una fn que devuelva false o true si el string INPUT tiene al menos un entero, en caso contrario la cadena solo tendría operadores y entonces podríamos resetear el valor a vacío. Algo así, llamar a este método a la vez que se comprueba que no esté vacío el valor de input:

function hasANumber(inputString) {

    var matches = inputString.match(/(\d+)/);

    if (matches) {
      return true;
    }
    return false;

}

const calculateResult = () => {
if(input && hasANumber(input)) {
setInput( evaluate(input) );
} else {
setInput('');
alert('Please add a value before calculate a result');
}
}

Y para el tema del "evaluate", en caso de que devuelva un error, se podría meter en un bloque try, catch y resetear el input a cero si el valor retornado es una excepción.
\*/
