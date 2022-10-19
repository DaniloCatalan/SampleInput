## Escribir un programa en NodeJS que lea el siguiente archivo de texto:

>3 <-- cantidad de elementos del arreglo de costos descrito en las siguientes lineas

>4 <-- elemento arreglo de costos 1

>5 <-- elemento arreglo de costos 2

>6 <-- elemento arreglo de costos 3

>3 <-- cantidad de elementos del arreglo de etiquetas descrito en las siguientes lineas

>'illegal'<-- elemento arreglo de etiquetas 1

>'legal'  <-- elemento arreglo de etiquetas 1

>'legal' <-- elemento arreglo de etiquetas 1

>4 <-- cuenta de laptops diaria


y arroje como resultado el siguiente objeto.

``{
   costs: [4,5,6],
   labels: ['illegal', 'legal', 'legal'],
   dailyCount: 4
}``