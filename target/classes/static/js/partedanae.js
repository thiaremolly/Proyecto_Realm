// Obtener las cajas de información
var cajaDocente = document.getElementById("cajaInformacionDocente");
var cajaEstudiante = document.getElementById("cajaInformacionEstudiante");

// Lista de docentes
var profesores = [
	{
		nombre: "Felipe Covarrubias",
		edad: 30,
		asignatura: "Artes Visuales",
		email: "felipecv@gmail.com",
		cumple: "15 de agosto",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Óscar Alcayaga",
		edad: 35,
		asignatura: "Ciencias Naturales",
		email: "oscaralcayaga87@gmail.com",
		cumple: "23 de septiembre",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Miguel Padilla",
		edad: 39,
		asignatura: "Educación Física",
		email: "miguelpadilla1@hotmail.com",
		cumple: "14 de octubre",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Jaime Villanueva",
		edad: 27,
		asignatura: "Filosofía",
		email: "jvillanueva@hotmail.com",
		cumple: "29 de junio",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Magdalena Lemus",
		edad: 44,
		asignatura: "Historia y Geografía",
		email: "magdal@outlook.com",
		cumple: "7 de enero",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Ligia Astorga",
		edad: 46,
		asignatura: "Inglés",
		email: "lig_as@outlook.com",
		cumple: "11 de marzo",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Teresa Inostroza",
		edad: 50,
		asignatura: "Lenguaje y Comunicación",
		email: "teresa_ib@gmail.com",
		cumple: "2 de agosto",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Cynthia Rubio",
		edad: 52,
		asignatura: "Matemáticas",
		email: "cynthiarubio@gmail.com",
		cumple: "26 de junio",
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Diego Linarez",
		edad: 28,
		asignatura: "Música",
		email: "diegolina@gmail.com",
		cumple: "8 de julio",
		imagen: "img/usuariouniversal.jpg"
	},
	// Agregar más docentes aquí
];

// Lista de estudiantes
var estudiantes = [
	{
		nombre: "Ana Bailey",
		edad: 16,
		email: "ana.bailey@gmail.com",
		cumple: "3 de abril",
		numlista: 1,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Ben Carter",
		edad: 16,
		email: "ben.carter@gmail.com",
		cumple: "18 de mayo",
		numlista: 2,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Chloe Davis",
		edad: 16,
		email: "chloe.davis@gmail.com",
		cumple: "9 de junio",
		numlista: 3,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Daniel Evans",
		edad: 17,
		email: "daniel.evans@gmail.com",
		cumple: "21 de julio",
		numlista: 4,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Emily Foster",
		edad: 16,
		email: "emily.foster@gmail.com",
		cumple: "14 de agosto",
		numlista: 5,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Gabriel Green",
		edad: 17,
		email: "gabriel.green@gmail.com",
		cumple: "27 de septiembre",
		numlista: 6,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Hannah Hall",
		edad: 16,
		email: "hannah.hall@gmail.com",
		cumple: "8 de octubre",
		numlista: 7,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Isabella Johnson",
		edad: 17,
		email: "isa.johnson@gmail.com",
		cumple: "19 de noviembre",
		numlista: 8,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Jack King",
		edad: 16,
		email: "jack.king@gmail.com",
		cumple: "2 de diciembre",
		numlista: 9,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Lily Lewis",
		edad: 17,
		email: "lily.lewis@gmail.com",
		cumple: "13 de enero",
		numlista: 10,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Mia Martinez",
		edad: 17,
		email: "mia.martinez@gmail.com",
		cumple: "24 de febrero",
		numlista: 11,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Noah Miller",
		edad: 16,
		email: "noah.miller@gmail.com",
		cumple: "7 de marzo",
		numlista: 12,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Olivia Nelson",
		edad: 16,
		email: "olivianel@gmail.com",
		cumple: "18 de abril",
		numlista: 13,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Parker Owens",
		edad: 16,
		email: "park.owen@gmail.com",
		cumple: "29 de mayo",
		numlista: 14,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Quinn Parker",
		edad: 17,
		email: "quinn.parker@gmail.com",
		cumple: "10 de junio",
		numlista: 15,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Riley Phillips",
		edad: 16,
		email: "riley.phillips@gmail.com",
		cumple: "21 de julio",
		numlista: 16,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Sophia Robinson",
		edad: 17,
		email: "sophia.r@gmail.com",
		cumple: "2 de agosto",
		numlista: 17,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Tyler Smith",
		edad: 16,
		email: "tyler.smith@gmail.com",
		cumple: "13 de septiembre",
		numlista: 18,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Uma Taylor",
		edad: 16,
		email: "uma.taylor@gmail.com",
		cumple: "30 de octubre",
		numlista: 19,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Victoria Turner",
		edad: 17,
		email: "vic.turner@gmail.com",
		cumple: "5 de noviembre",
		numlista: 20,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "William Walker",
		edad: 16,
		email: "will.walk@gmail.com",
		cumple: "16 de diciembre",
		numlista: 21,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Xavier White",
		edad: 17,
		email: "xavier.white@gmail.com",
		cumple: "27 de enero",
		numlista: 22,
		imagen: "img/usuariouniversal.jpg"
	},
	{
		nombre: "Zoey Young",
		edad: 17,
		email: "zoey.young@gmail.com",
		cumple: "8 de febrero",
		numlista: 23,
		imagen: "img/usuariouniversal.jpg"
	},
	// Agregar más estudiantes aquí
];

// Función para mostrar la información de un docente o estudiante
function mostrarInformacion(persona, caja) {
	var contenido = `
            <table>
                <tr>
                    <td colspan="2">
                        <img src="${persona.imagen}" alt="Foto de la persona">
                    </td>
                </tr>
                <tr>
                    <th>Nombre:</th>
                    <td>${persona.nombre}</td>
                </tr>
                <tr>
                    <th>Edad:</th>
                    <td>${persona.edad}</td>
                </tr>
                <tr>
                    <th>Cumpleaños:</th>
                    <td>${persona.cumple}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>${persona.email}</td>
                </tr>
        `;

	if (persona.hasOwnProperty('asignatura')) {
		contenido += `
                <tr>
                    <th>Asignatura:</th>
                    <td>${persona.asignatura}</td>
                </tr>
            `;
	} else if (persona.hasOwnProperty('numlista')) {
		contenido += `
                <tr>
                    <th>N. de Lista:</th>
                    <td>${persona.numlista}</td>
                </tr>
            `;
	}

	contenido += `
            </table>
        `;

	caja.style.display = "block";
	caja.innerHTML = contenido;
}

// Función para cambiar la información al hacer clic en las flechas
function cambiarInformacion(tipo, direccion) {
	var caja;
	var indiceActual;

	if (tipo === "docente") {
		caja = cajaDocente;
		indiceActual = indiceActualDocente;
	} else if (tipo === "estudiante") {
		caja = cajaEstudiante;
		indiceActual = indiceActualEstudiante;
	}

	indiceActual += direccion;

	if (tipo === "docente") {
		if (indiceActual < 0) {
			indiceActual = profesores.length - 1;
		} else if (indiceActual >= profesores.length) {
			indiceActual = 0;
		}
		mostrarInformacion(profesores[indiceActual], caja);
		indiceActualDocente = indiceActual;
	} else if (tipo === "estudiante") {
		if (indiceActual < 0) {
			indiceActual = estudiantes.length - 1;
		} else if (indiceActual >= estudiantes.length) {
			indiceActual = 0;
		}
		mostrarInformacion(estudiantes[indiceActual], caja);
		indiceActualEstudiante = indiceActual;
	}
}

// Agregar eventos de clic para las flechas
document.getElementById("flechaIzquierdaDocentes").addEventListener("click", function() {
	cambiarInformacion("docente", -1);
});

document.getElementById("flechaDerechaDocentes").addEventListener("click", function() {
	cambiarInformacion("docente", 1);
});

document.getElementById("flechaIzquierdaEstudiantes").addEventListener("click", function() {
	cambiarInformacion("estudiante", -1);
});

document.getElementById("flechaDerechaEstudiantes").addEventListener("click", function() {
	cambiarInformacion("estudiante", 1);
});

// Mostrar la información del primer docente y estudiante al cargar la página
var indiceActualDocente = 0;
var indiceActualEstudiante = 0;

mostrarInformacion(profesores[indiceActualDocente], cajaDocente);
mostrarInformacion(estudiantes[indiceActualEstudiante], cajaEstudiante);