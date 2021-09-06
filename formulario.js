let estado_mexico=['CDMX','Toluca','Guadalajara'];
let estado_argentina=['Buenos Aires','Cordoba','Santa FE'];
let estado_chile=['Barcelona','Cataluña','Murcia'];

var todasProvincias = [
[],
estado_mexico,
estado_argentina,
estado_chile,
];

function cambia_provincia(){ 
 
   var pais 
   pais = document.formu.pais[document.formu.pais.selectedIndex].value 
  
   if (pais != 0) { 
     
      mis_provincias=todasProvincias[pais]
   
      num_provincias = mis_provincias.length 
    
      document.formu.estado.length = num_provincias 
  
      for(i=0;i<num_provincias;i++){ 
         document.formu.estado.options[i].value=mis_provincias[i] 
         document.formu.estado.options[i].text=mis_provincias[i] 
      }	
      
   }else{ 
    
      document.formu.estado.length = 1 
     
      document.formu.estado.options[0].value = "-" 
      document.formu.estado.options[0].text = "-" 
   } 

   document.formu.estado.options[0].selected = true 
}

let habilitarBoton=()=>{
    let nombre=document.getElementById('nombre');
    let edad=document.getElementById('edad');
    let direccion=document.getElementById('direccion');
    let boton=document.getElementById('botonEnviar');

    if(nombre.value==="" || edad.value=="" || direccion.value==""){
        boton.disabled=true;
    
    }else{
        boton.disabled=false;
    }

}
habilitarBoton();
    