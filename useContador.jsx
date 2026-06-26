// Esta es una función de solo lógica, que no renderiza HTML,
// usando Custom Hooks para poder reutilizarlo.

import { useState} from "react";

export function useContador (valorInicial=0) {
    const [cont, setCont] = useState(valorInicial);

    const aumentar = () => setCont(cont + 1);
    const disminuir = () => setCont(cont - 1);
    const resetear = () => setCont (0);

  // Acá devolvemos el número actual y las funciones para que las usen otros componentes
    return { cont, aumentar, disminuir, resetear };
}
