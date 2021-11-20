class StreetWorkout{
    constructor(nombre,apellido,cc,cuidad,dirrecion,genero){
        this._nombre = nombre;
        this._apellido = apellido;
        this._cc = cc;
        this._cuidad = cuidad;
        this._dirrecion = dirrecion;
        this._genero = genero;
    }

    DatosPersonas(){
        let n = prompt('ingrese cuantas personas se van a inscribir en el torneo ');
        n = parseInt(n);
        let personas = [];

        for(let i=0;i<n;i++){
            let per = new StreetWorkout();
            per.nombre = prompt("ingrese el nombre de la persona");
            per.apellido = prompt("ingrese tu apellido");
            per.cc = parseInt(prompt("ingrese tu identificacion"));
            per.cuidad = prompt("ingrese la cuidad");
            per.dirrecion = prompt("ingrese tu dirrecion");
            per.genero = prompt('ingrese tu genero')
            personas.push(per);
        }
        console.log(personas);
        return personas;
    }
}
class Torneo extends StreetWorkout{

    //Imformacion del torneo 
    Torneo(){
        console.log('Dia del torneo: 27/11/21');
        console.log('Cuidad del torneo: Popayan');
        console.log('dirrecion del toreno: Arboleda');
        console.log('hora del torneo: 8 am ');
    }

    Inscripcion(){
        console.log('ingrese que categoria: amateur, avanzado, experto');
        let cat = 'amateur';
        let cat2 = 'avanzado';
        let cat3 = 'experto';
        let per = prompt('ingrese la categoria');
        if(per == cat){
            let Datos = new Torneo 
            Datos.DatosPersonas();
            console.log('Estas inscripto a la categoria amateur: '+this._nombre);

        }else if (per == cat2){
            let Datos = new Torneo
            Datos.DatosPersonas();

            console.log('Estas inscripto a la categoria avanzado: '+this._nombre);

        }else if (per == cat3){
            let Datos = new Torneo 
            Datos.DatosPersonas();
            console.log('Estas inscripto a la categoria experto: '+this._nombre);

        }else{
            console.log('Vuelve a ingresar la categoria');
        }
    }

    Categoria(){

    }
}
let Datos = new Torneo;
Datos.Torneo();
Datos.Inscripcion();