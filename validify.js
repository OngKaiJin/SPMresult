angka = 1;
valid = [];
while (angka < 61) {
		document.querySelector("#floatingInput").value = "MA303A" + ("000" + angka).slice(-3);
		ic = 1;
		while (ic < 600) {
				document.querySelector("#floatingKP").value = "000000" + "04" +  ("0000" + ic).slice(-4);
				document.querySelector("#hantar").click();
				valid.push(ic, ggf("SPM", "2024"));
				ic += 2;
		}
		angka++;
}
