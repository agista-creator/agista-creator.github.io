


function login(){
			var sukses = false;
			var user = ['AgistaNovia', 'Admin', 'User'];
			var password = ['123456', '123', 'ser123'];

			var name = document.getElementById("nama").value;
			var pass = document.getElementById("password").value;

			if((name == null || name == '')||(pass == null || pass =='')){
				alert("HARAP ISI USERNAME DAN PASSWORD");
				return;
			}else{
				for (var i = 0; i<user.length; i++){
					if(user[i].toLowerCase () == name && password[i] == pass){
						document.location.href = "youtube agista.html";
						sukses = true;
						break;
					}
				}
				if(!sukses){
					alert("HARAP LOGIN KEMBALI");
					return;
				}
			}
		}



