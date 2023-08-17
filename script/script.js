




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

    const date = new Date(year, month, day);
    const dayNum = weekDays[date.getDay()];
    const dateNum = date.getDate().toString();
    const monthNum = months[date.getMonth()];
    const yearNum = date.getFullYear().toString();
    console.log(date.getDay());
    if (  date.getDay() >= 1 && date.getDay() <= 5 ){
        dato.innerHTML = `${dayNum} ${dateNum} ${monthNum} ${yearNum}. Estatus: laboral` 
    }else{
       dato.innerHTML = `${dayNum} ${dateNum} ${monthNum} ${yearNum}. Estatus: no laboral` 
    }  

};








