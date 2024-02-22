const url = "https://script.google.com/macros/s/AKfycbwuFwoh5-CdqwbCY_8wyeywFro_rOR8V-8FebhwML6HQVWgpKpEf8FhyKdkPmmNl1YLrg/exec";

var strtype = "bar";
var chartCon;
var chartLen;
var chartSou;
var arrLength = [0,0,0,0];
var arrSou = [];
var arrConformation = [];
var arrModification = [];
var arrProtein = []; 
var arrOrganismN = [];
var arrOrganismG = [];
Chart.register(ChartDataLabels);

async function findDataForChart() {
    const urlfile = await (await fetch(url)).json();


    for (var x = 0; x < urlfile.length ; x++) {
		/* find Source*/
        var findSou = false;
        for (var y = 0; y < arrSou.length ; y++) {
          	if (arrSou[y][0].includes(urlfile[x].Source)) {
            	arrSou[y][1]++;
            	findSou = true;
            	break;
          	}
        } if (!findSou) {
            arrSou.push([urlfile[x].Source,1]);
        }
		/* find Conformation types*/
		var findConformation = false;
		for (var y = 0; y < arrConformation.length ; y++) {
			if (arrConformation[y][0].includes(urlfile[x].Conformation_types)) {
				arrConformation[y][1]++;
				findConformation = true;
			  	break;
			}
		} if (!findConformation) {
            arrConformation.push([urlfile[x].Conformation_types,1]);
        }
		/* find Modification/Conjugation */
		var findModification = false;
		for (var y = 0; y < arrModification.length ; y++) {
			if (arrModification[y][0].includes(urlfile[x].Modification_Conjugation)) {
				arrModification[y][1]++;
				findModification = true;
			  	break;
			}
		} if (!findModification) {
            arrModification.push([urlfile[x].Modification_Conjugation,1]);
        }
		/* find len */
        if (urlfile[x].Length >= 16) {
            arrLength[3]++;
        } else if (urlfile[x].Length >= 11) {
            arrLength[2]++;
        } else if (urlfile[x].Length >= 6) {
            arrLength[1]++;
        } else {
            arrLength[0]++;
        }
		/* find Protein source */
		var findProtein = false;
		for (var y = 0; y < arrProtein.length ; y++) {
			if (arrProtein[y][0].includes(urlfile[x].Protein_source)) {
				arrProtein[y][1]++;
				findProtein = true;
			  	break;
			}
		} if (!findProtein) {
            arrProtein.push([urlfile[x].Protein_source,1]);
        }
		/* find organism name */
		var findOrganismN = false;
		for (var y = 0; y < arrOrganismN.length ; y++) {
			if (arrOrganismN[y][0].includes(urlfile[x].organism_name)) {
				arrOrganismN[y][1]++;
				findOrganismN = true;
			  	break;
			}
		} if (!findOrganismN) {
            arrOrganismN.push([urlfile[x].organism_name,1]);
        }
		/* find organism group */
		var findOrganismG = false;
		for (var y = 0; y < arrOrganismG.length ; y++) {
			if (arrOrganismG[y][0].includes(urlfile[x].organism_group)) {
				arrOrganismG[y][1]++;
				findOrganismG = true;
			  	break;
			}
		} if (!findOrganismG) {
            arrOrganismG.push([urlfile[x].organism_group,1]);
        }
    }
	createChartSou(arrSou);
	createChartCon(arrConformation);
	createChartMod(arrModification);
	createChartLen(arrLength);
	createChartPro(arrProtein);
	createChartOrgN(arrOrganismN);
	createChartOrgG(arrOrganismG);
}

function createChartSou(arr) {
	let arrText = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrText.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlaceSou = $("#chartPlaceSou")[0].getContext('2d');
	const dataSou = {
		labels: arrText,
		datasets: [{
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#A200FF','#E200FF','#FF00DD','#FF009D','#FF005D','#FF001D','#FF2300','#FF6200','#FFA200','#FFE200','#DCFF00',
			'#9CFF00','#5DFF00','#1DFF00','#00FF23','#00FF63','#00FFA3','#00FFE2','#00DCFF','#009CFF','#005CFF','#001CFF','#2300FF','#6300FF','#A300FF'],
			hoverOffset: 4
		}]
	};
	chartSou = new Chart(chartPlaceSou,{
		type: strtype,
		data: dataSou,
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Source'
				}
				,datalabels: {
					anchor: 'end',
            		align: 'end',
				}
			}
		}
	})
}

function createChartCon(arr) {
	let arrText = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrText.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlaceCon = $("#chartPlaceCon")[0].getContext('2d');
	const dataCon = {
		labels: arrText,
		datasets: [{
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#A200FF','#E200FF','#FF00DD','#FF009D','#FF005D','#FF001D','#FF2300','#FF6200','#FFA200','#FFE200','#DCFF00',
			'#9CFF00','#5DFF00','#1DFF00','#00FF23','#00FF63','#00FFA3','#00FFE2','#00DCFF','#009CFF','#005CFF','#001CFF','#2300FF','#6300FF','#A300FF'],
			hoverOffset: 4
		}]
	};
	chartCon = new Chart(chartPlaceCon,{
		type: strtype,
		data: dataCon,
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Conformation types'
				}
				,datalabels: {
					anchor: 'end',
            		align: 'end',
				}
			}
		}
	})
}

function createChartMod(arr) {
	let arrText = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrText.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlaceMod = $("#chartPlaceMod")[0].getContext('2d');
	const dataMod = {
		labels: arrText,
		datasets: [{
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#A200FF','#E200FF','#FF00DD','#FF009D','#FF005D','#FF001D','#FF2300','#FF6200','#FFA200','#FFE200','#DCFF00',
			'#9CFF00','#5DFF00','#1DFF00','#00FF23','#00FF63','#00FFA3','#00FFE2','#00DCFF','#009CFF','#005CFF','#001CFF','#2300FF','#6300FF','#A300FF'],
			hoverOffset: 4
		}]
	};
	chartMod = new Chart(chartPlaceMod,{
		type: strtype,
		data: dataMod,
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Modification/Conjugation'
				}
				,datalabels: {
					anchor: 'end',
            		align: 'end',
				}
			}
		}
	})
}

function createChartLen(arr) {
	var createChartLen = $("#createChartLen")[0].getContext('2d');
	const dataLen = {
		labels: ["<= 5","6 - 10","11 - 15","16 - 20"],
		datasets: [{
			label: "peptide",
			data: arr,
			backgroundColor: ['#FFA800','#FFBE40','#FFD380','#FFE9BF'],
			hoverOffset: 4
		}],
	};
	
	chartLen = new Chart(createChartLen,{
		type: strtype,
		data: dataLen,
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Sequence length'
				}
				,datalabels: {
					anchor: 'end',
            		align: 'end',
				}
			}
		}
	})
}

function createChartPro(arr) {
	let arrText = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrText.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlacePro = $("#chartPlacePro")[0].getContext('2d');
	const dataPro = {
		labels: arrText,
		datasets: [{
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#A200FF','#E200FF','#FF00DD','#FF009D','#FF005D','#FF001D','#FF2300','#FF6200','#FFA200','#FFE200','#DCFF00',
			'#9CFF00','#5DFF00','#1DFF00','#00FF23','#00FF63','#00FFA3','#00FFE2','#00DCFF','#009CFF','#005CFF','#001CFF','#2300FF','#6300FF','#A300FF'],
			hoverOffset: 4
		}]
	};
	chartPro = new Chart(chartPlacePro,{
		type: strtype,
		data: dataPro,
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Protein source'
				}
				,datalabels: {
					anchor: 'end',
            		align: 'end',
				}
			}
		}
	})
}

function createChartOrgN(arr) {
	let arrText = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrText.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlaceOrgN = $("#chartPlaceOrgN")[0].getContext('2d');
	const dataOrgN = {
		labels: arrText,
		datasets: [{
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#A200FF','#E200FF','#FF00DD','#FF009D','#FF005D','#FF001D','#FF2300','#FF6200','#FFA200','#FFE200','#DCFF00',
			'#9CFF00','#5DFF00','#1DFF00','#00FF23','#00FF63','#00FFA3','#00FFE2','#00DCFF','#009CFF','#005CFF','#001CFF','#2300FF','#6300FF','#A300FF'],
			hoverOffset: 4
		}]
	};
	chartOrgN = new Chart(chartPlaceOrgN,{
		type: strtype,
		data: dataOrgN,
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Organism Name'
				}
				,datalabels: {
					anchor: 'end',
            		align: 'end',
				}
			}
		}
	})
}

function createChartOrgG(arr) {
	let arrText = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrText.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlaceOrgG = $("#chartPlaceOrgG")[0].getContext('2d');
	const dataOrgG = {
		labels: arrText,
		datasets: [{
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#A200FF','#E200FF','#FF00DD','#FF009D','#FF005D','#FF001D','#FF2300','#FF6200','#FFA200','#FFE200','#DCFF00',
			'#9CFF00','#5DFF00','#1DFF00','#00FF23','#00FF63','#00FFA3','#00FFE2','#00DCFF','#009CFF','#005CFF','#001CFF','#2300FF','#6300FF','#A300FF'],
			hoverOffset: 4
		}]
	};
	chartOrgG = new Chart(chartPlaceOrgG,{
		type: strtype,
		data: dataOrgG,
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Organism Group'
				}
				,datalabels: {
					anchor: 'end',
            		align: 'end',
				}
			}
		}
	})
}

function createChart() {
	createChartSou(arrSou);
	createChartCon(arrConformation);
	createChartMod(arrModification);
	createChartLen(arrLength);
	createChartPro(arrProtein);
	createChartOrgN(arrOrganismN);
	createChartOrgG(arrOrganismG);
}

function destroyCharts() {
	chartSou.destroy();
	chartCon.destroy();
	chartMod.destroy();
	chartLen.destroy();
	chartPro.destroy();
	chartOrgN.destroy();
	chartOrgG.destroy();
}

findDataForChart();

$(document).ready(function(){
    $("#buttonChange").click(function () {
		destroyCharts();
		if (strtype == "bar") {
			strtype = "pie";
			$("#buttonChange").text(mainArrchangeButton[1]);
		}else if (strtype == "pie") {
			strtype = "bar";
			$("#buttonChange").text(mainArrchangeButton[0]);
		}
		createChart();
    })
});