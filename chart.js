var years = [2015,2016,2017,2018,2019,2020];
	var gdp = [5.5, 6.9, 3.4, 8, 12, 9];
	var ifr = [4.2,2.6,5.5, 3.6,8.9,5.9]
	var provinces = ["VTE","PHO","SVN","LPB"];
	var pop = [820000,580000,640000,730000];
	var province2 = ["VTE","PSD","LNT","BOK","ODX","XBL","LPB","XHK","HOP","VTP","BDX","KHM","SVK","SVN","XEK","CHS","ATP","XSB"];

	var b_2019 = [4,5,7,4,9,7,9,6,7,10,5,6,15,4,2,11,4,2];

	var b_2020 = [6,7,9,6,11,9,11,8,9,12,7,8,17,6,4,13,6,4];

	console.log(province2,b_2019,b_2020)


	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx,{
	    type: 'line',
	 plugins: [ChartDataLabels],
	    data:{
	        labels: years,
	        datasets:[{
	            label:"GDG Growth rate Lao",
	            data: gdp,
	            borderColor:"#ec1009",
	           fill:false,
				lineTension:0,
			}]
		},

	options:{
		scales:{
			yAxes:[{
				ticks:{
					beginAtZero:true,
					stpSize:2,
					MaxTicksLimit:6,
				}
			}]
		},
		legend:{
			display:false,
		}
	}


	});

	var ctx = document.getElementById("barChart");
	var barChart = new Chart(ctx,{
	    type: 'bar',
	    plugins: [ChartDataLabels],
	    data:{
	        labels: years,
	        datasets:[{
	            label:"GDG Growth rate Lao",
	            data:ifr,
	           backgroundColor:["#1f04eb","#eb044f","#cceb04","#7d8642","#7d8642","#d8ed4a"],
			}]

		},
		options:{
		scales:{
			yAxes:[{
				ticks:{
					beginAtZero:true,
					stpSize:2,
					MaxTicksLimit:6,
				}
			}]
		},
		legend:{
			display:false,
		}
	}
					});

	//end barChart
	var ctx = document.getElementById("pieChart");
	var pieChart = new Chart(ctx,{
	    type: 'pie',
	     plugins: [ChartDataLabels],
	    data:{  
	     labels: years,
	        datasets:[{
	        label:"inflation rate",
	        data:ifr,
			backgroundColor:["#85C1E9","#eb044f","#cceb04","#7d8642","#7d8642","#d8ed4a"],
			}]
		},
		options:{
			legend:{
				position:"left",
		}
	}
		});

	//end barChart
	var ctx = document.getElementById("pChart");
		var pChart = new Chart(ctx,{
			type: "horizontalBar",//chart type horizontalBar
			data:{
				labels: provinces,
				datasets: [{
					label: "population",
					data: pop,
					backgroundColor:["#3498DB","#5DADE2","#85C1E9","#AED6F1"],
				}]
			},
			options:{
		scales:{
			xAxes:[{
				ticks:{
					beginAtZero:true,
					stpSize:2,
					MaxTicksLimit:6,
				}
			}]
		}

		}
		});

	var ctx = document.getElementById("bChart");
	var bChart = new Chart(ctx,{
		type:"bar",
		data:{
			labels:province2,
				datasets: [{
					label: "Birth rate 2019",
					data:b_2019,
					backgroundColor:"#3498DB",
				},
				{
					label:"Birth rate 2020",
					data:b_2020,
					backgroundColor:"#cceb04"
				}
			]
		},
	options:{
		scales:{
			yAxes:[{
				ticks:{
					beginAtZero:true,
					}
	 				}]

					}
	}
	});