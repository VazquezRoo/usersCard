const nombre = 'cristian vazquez'
 const nombre2 = nombre[0].toUpperCase() + nombre.substring(1)
 const nombre3 = nombre.search(' ')
 const nombre4 = nombre2[nombre3+1].toUpperCase() + nombre.substring(0)


console.log(nombre2)

const nameType = "CristiN jasdanjASASsc";

const Mayus = (e) =>{
    
const nameMayus = e.toLowerCase().split(" ");

for (let i = 0; i < nameMayus.length; i++) {
    nameMayus[i] = nameMayus[i][0].toUpperCase() + nameMayus[i].substring(1);
}
return nameMayus.join(' ')      


}


console.log(Mayus(nameType))