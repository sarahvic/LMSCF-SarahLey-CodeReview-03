function calculateInsurance() {
			var name = document.getElementById("name").value;
			var austria = document.getElementById("austria").selected;
			var hungary = document.getElementById("hungary").selected;
			var greece = document.getElementById("greece").selected;
			var age = document.getElementById("age").value;
			var horsePwr = document.getElementById("horse").value;

					// equation Austria
			var insuranceA = Math.floor(horsePwr * 100 / age + 50);
					// equation Hungary
			var insuranceH = Math.floor(horsePwr * 120 / age + 100);
					// equation Greece
			var insuranceG = Math.floor(horsePwr * 150 / (age + 3) + 50);


		if (austria == true){

				var insuranceFinal = insuranceA;

			} else if (hungary == true){

				var insuranceFinal = insuranceH;

			}else if (greece == true){

				var insuranceFinal = insuranceG;
			} 	


			document.getElementById("result").innerHTML = name + ", your insurance costs EUR " + insuranceFinal;

		}

		document.getElementById("send").addEventListener('click', calculateInsurance, false);
