// funcion autoinvocada

(function () {
	let actualizarHora = function () {
		let fecha = new Date();

		let horas = fecha.getHours();
		let ampm;
		let minutos = fecha.getMinutes();
		let segundos = fecha.getSeconds();
		let diaSemama = fecha.getDay();
		let dia = fecha.getDate();
		let mes = fecha.getMonth();
		let year = fecha.getFullYear();

		//  uso el simbolo "$" para entender que estoy seleccionando elementos del DOM
		const $diaSemana = document.querySelector("#diaSemana");
		const $dia = document.querySelector("#dia");
		const $mes = document.querySelector("#mes");
		const $year = document.querySelector("#year");

		const $horas = document.querySelector("#horas");
		const $ampm = document.querySelector("#ampm");
		const $minutos = document.querySelector("#minutos");
		const $segundos = document.querySelector("#segundos");

		const semana = [
			"Domingo",
			"Lunes",
			"Martes",
			"Miercoles",
			"Jueves",
			"Viernes",
			"Sabado",
		];

		const meses = [
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre",
		];

		$diaSemana.innerHTML = semana[diaSemama];
		$dia.innerHTML = dia;
		$mes.innerHTML = meses[mes];
		$year.innerHTML = year;

		if (horas >= 12) {
			horas = horas - 12;
			ampm = "PM";
		} else {
			ampm = "AM";
		}

		if (horas == 0) {
			horas = 12;
		}

		if (horas < 10) {
			horas = "0" + horas;
		}

		$horas.innerHTML = horas;

		if (minutos < 10) {
			minutos = "0" + minutos;
		}

		if (segundos < 10) {
			segundos = "0" + segundos;
		}

		$minutos.innerHTML = minutos;
		$segundos.innerHTML = segundos;
		$ampm.innerHTML = ampm;
	};

	actualizarHora();

	const intervalo = setInterval(actualizarHora, 1000);
})();
