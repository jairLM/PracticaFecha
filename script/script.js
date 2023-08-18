weekDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


const inputs = document.querySelectorAll('input'); 
const dato = document.getElementById('fechaCalculada');
const formFecha = document.forms['formFecha'];

formFecha.addEventListener('submit',(e)=>{
    e.preventDefault();

    const date = {
        year: formFecha.elements['year'].value.trim(),
        month: String(formFecha.elements['month'].value.trim()-1),
        day: formFecha.elements['day'].value.trim()
    }
    
    calculateDate(date);        

});

const calculateDate = ({year, month, day }) =>{
    console.log(year, month, day);
    switch (true) {
        case (day == 0 ):
            dato.innerHTML = `
            <p>El día 0 no existe campeon</p>
            <img class="img-size" src="./img/r7sad-2.jpg" alt="siuuuu">
            `
            break;
        case (month == -1 ):
            dato.innerHTML = `
            <p>Te falto el mes campeon</p>
            <img class="img-size" src="./img/r7sad-2.jpg" alt="siuuuu">`
            break;
    
        default:
            const date = new Date(year, month, day);
            const dayNum = weekDays[date.getDay()];
            const dateNum = date.getDate().toString();
            const monthNum = months[date.getMonth()];
            const yearNum = date.getFullYear().toString();
            
            switch ( true ){
                case (date.getDay() >= 1 && date.getDay() <= 5):
                dato.innerHTML = `
                ${dayNum} ${dateNum} ${monthNum} ${yearNum}
                <p class="text-success">Estatus: laboral</p>
                <p>Que sad :(</p>
                <img class="img-size" src="./img/r7dad.jpg" alt="siuuuu"> 
                ` 
                break;
                default:
                dato.innerHTML = `${dayNum} ${dateNum} ${monthNum} ${yearNum}
                <p class="text-danger">Estatus: no laboral</p>
                <p>SIUUUUUU</p>
                <img class="img-size" src="./img/siuuu.png" alt="siuuuu">
                ` 
            }  
            break;
        }
        
        
        
    };


    /* if (  date.getDay() >= 1 && date.getDay() <= 5 ){
        dato.innerHTML = `
        ${dayNum} ${dateNum} ${monthNum} ${yearNum}
        <p class="text-success">Estatus: laboral</p>
        <p>Que sad :(</p>
        <img class="img-size" src="https://images.ecestaticos.com/OCwVjAzyciCGp_AdPxv8yzBskds=/0x0:2272x1678/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffc8%2Ffb2%2Fe7a%2Ffc8fb2e7a82728b7eb6193a0935d6a94.jpg" alt="siuuuu"> 
        ` 
    }else{
    dato.innerHTML = `${dayNum} ${dateNum} ${monthNum} ${yearNum}
        <p class="text-danger">Estatus: no laboral</p>
        <p>SIUUUUUU</p>
        <img class="img-size" src="https://phantom-marca-mx.unidadeditorial.es/d8ff4a51f6aa3c9c6a8d36939afc6514/resize/660/f/webp/mx/assets/multimedia/imagenes/2023/06/05/16859985858899.jpg" alt="siuuuu">
        ` 
    }  
     */







