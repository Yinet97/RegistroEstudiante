
		var Estudiante = function(){
			var self= this;
			self.id;
			self.nombre;
			self.matricula;
			self.identificacion;
			self.telefono;
			self.email;

		};

		function guardar(){
			var Id = document.getElementById("numero").value;
			var nombre = document.getElementById("nombre").value;
			var matricula = document.getElementById("matricula").value;
			var identificacion = document.getElementById("identificacion").value;
			var telefono = document.getElementById("telefono").value;
			var email = document.getElementById("email").value;

			console.log("ID:",Id);
			console.log("Nombre:",nombre);
			console.log("Matricula",matricula);
			console.log("Identificacion:",identificacion);
			console.log("Telefono:",telefono);
			console.log("Email:",email);

			var table = document.getElementById("estudiantes");
			var tr = document.createElement("tr");
			var tdID = document.createElement("td");
			var tdNombre = document.createElement("td");
			var tdMatricula = document.createElement("td");
			var tdIdent = document.createElement("td");
			var tdTelefono = document.createElement("td");
			var tdEmail = document.createElement("td");


			var textId = document.createTextNode(Id);
			var textNombre = document.createTextNode(nombre);
			var textMatricula = document.createTextNode(matricula);
			var textIdent = document.createTextNode(identificacion);
			var textTelefono = document.createTextNode(telefono);
			var textEmail = document.createTextNode(email);

			tdID.appendChild(textId);
			tdNombre.appendChild(textNombre);
			tdMatricula.appendChild(textMatricula);
			tdIdent.appendChild(textIdent);
			tdTelefono.appendChild(textTelefono);
			tdEmail.appendChild(textEmail);

			tr.appendChild(tdID);
			tr.appendChild(tdNombre);
			tr.appendChild(tdMatricula);
			tr.appendChild(tdIdent);			
			tr.appendChild(tdTelefono);
			tr.appendChild(tdEmail);

			table.appendChild(tr);
		};

		function guardarEnEntidad()
		{
			var est = new Estudiante();
			est.id = "4";
			est.nombre = "Yinet Jaquez";
			est.matricula = "2014-0493";
			est.identificacion="402-2600871-8";
			est.telefono="809-693-2545";
			est.email="Yinet.jaquez@hotmail.com";

			console.log(est);
		};