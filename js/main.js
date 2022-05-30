//CICLO FOR
alert('Queremos saber cuantas paginas sueles leer en un libro EN NÚMERO')

let minimoPaginas = parseInt(prompt('Número minimo de páginas que lees en un libro'));

let maximoPaginas = parseInt(prompt('Número máximo de páginas que lees en un libro'));

let total = (maximoPaginas - minimoPaginas) + 1;


console.log('Puedes leer un total de ' + total + ' páginas hasta un total de ' + minimoPaginas + ' páginas ' + maximoPaginas);

for(let i = minimoPaginas; i <= maximoPaginas ; i++) {

    let minimoPaginas = i ;

    console.log('Puede leer un minimo de ' + minimoPaginas++ + ' páginas');

}

//CICLO WHILE
alert('¿Que día de la semana te gusta leer?');

let diaDeSemana = prompt('Ingresa que dia de la semana puedes leer');


while(diaDeSemana != 'ESC') {
    switch (diaDeSemana.toUpperCase()) {
        case 'LUNES':

            alert('Si me quisiste un lunes, por favor, no me olvides un viernes. Manuel Ignacio');
            
            break;

        case 'MARTES':

            alert('Los martes son ideales para que sucedan las mejores cosas, mantente despierto, este tambien es un dia importante.');
            
            break;

        case 'MIERCOLES':

            alert('¿Miercoles? Que buena idea comenzar a mitad de semana');
            
            break;
        
        case 'JUEVES':

            alert('Nos gustan los jueves pero te quiero todos los días de la semana en el café de media tarde, en el desayuno, en los poemas y en cada momento.');
            
            break;
        
        case 'VIERNES':

            alert('¡Qué bien! Si, viernes de leer ¡Café y un viernes de lectura!');
            
            break;
        
        case 'SABADO':

            alert('Un café, un parque, grama y un buen libro ¡Qué lindo plan de sábado!');
            
            break;

        case 'DOMINGO':

            alert('¿Así se toma energia? ¡Nos encanta un libro de Domingo!');
            
            break;

        default:
            alert("Los dias de la semana estan en Español, Ejemplo: Lunes, martes...")

    }

    diaDeSemana = prompt('Ingresa que dia de la semana puedes leer')
}