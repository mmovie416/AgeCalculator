const dayText = document.querySelector('.content .input .days input');
const dayWarning = document.querySelector('.content .input .days .dayfield');
const wrongDay = document.querySelector('.content .input .days .wrongDay');
const wrongDate = document.querySelector('.content .input .days .wrongDate');

const monthText = document.querySelector('.content .input .months input');
const monthWarning = document.querySelector('.content .input .months .monthfield');
const wrongMonth = document.querySelector('.content .input .months .wrongMonth');

const yearText = document.querySelector('.content .input .years input');
const yearWarning = document.querySelector('.content .input .years .yearfield');
const wrongYear = document.querySelector('.content .input .years .wrongYear');

const dayResult = document.querySelector('.content .result .result3 p');
const monthResult = document.querySelector('.content .result .result2 p');
const yearResult = document.querySelector('.content .result .result1 p');
const button = document.querySelector('.content .btn');
const btnMobile = document.querySelector('.content .btnMobile');

button.addEventListener('click',function(){
	inputDay(dayText.value);
	inputMonth(monthText.value);
	inputYear(yearText.value);

	// var currentDate = date.format('DD/MM/YYYY');
	// console.log(date.getDate()); 

});


function validDate(){
				if(monthText.value==4){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='27%';
					wrongDate.style.left='11%';
		   		}else if(monthText.value==6){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='27%';
					wrongDate.style.left='11%';
		   		}else if(monthText.value==9){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='27%';
					wrongDate.style.left='11%';
		   		}else if(monthText.value==11){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='27%';
					wrongDate.style.left='11%';
		   		}
}

function inputDay(value){
	let date = new Date();
	
	if(dayText.value===''){
		dayWarning.style.display='flex';
		dayWarning.style.position ='absolute';
		dayWarning.style.top='11%';
		dayWarning.style.left='15%';
		dayWarning.style.color='red';
		dayText.style.borderColor='red';
		wrongDay.style.display='none';
	}else if(dayText.value >= 1 && dayText.value <= 31){
		if(dayText.value==31){
		   		validDate();	
		}else if(dayText.value>28 && monthText.value==2){
			wrongDate.style.display='flex';
			dayWarning.style.display='none';
			wrongDate.style.position='absolute';
			wrongDate.style.color='red';
			wrongDate.style.top='27%';
			wrongDate.style.left='11%';
		}else{
			let D_result = date.getDate() - value;
			dayWarning.style.display='none';
			wrongDay.style.display='none';
			wrongDate.style.display='none';	
			dayText.style.borderColor='black';
				if(D_result<0){
					dayResult.innerHTML=`0`;
				}else{
					dayResult.innerHTML=`${D_result}`;
				}
		}	
	}else if(!(dayText.value >= 1 && dayText.value <= 31)){
		wrongDay.style.display='flex';
		dayWarning.style.display='none';
		wrongDay.style.position='absolute';
		wrongDay.style.color='red';
		wrongDay.style.top='29%';
		wrongDay.style.left='7%';
	}
}

function inputMonth(value){
	let date = new Date();
	if(monthText.value===''){
		monthWarning.style.display='flex';
		wrongMonth.style.display='none';
		monthWarning.style.position ='absolute';
		monthWarning.style.top='11%';
		monthWarning.style.left='41%';
		monthWarning.style.color='red';
		monthText.style.borderColor='red';
	}else if(!(monthText.value>=1 && monthText.value<=12)){
		wrongMonth.style.display='flex';
		monthWarning.style.display='none';
		wrongMonth.style.position='absolute';
		wrongMonth.style.color='red';
		wrongMonth.style.top='29%';
		wrongMonth.style.left='33%';	
	}else if(dayText.value >= 1 && dayText.value <= 31){
		if(dayText.value==31){
		   		validDate();
		}else if(dayText.value>28 && monthText.value==2){
			wrongDate.style.display='flex';
			dayWarning.style.display='none';
			wrongDate.style.position='absolute';
			wrongDate.style.color='red';
			wrongDate.style.top='27%';
			wrongDate.style.left='11%';
		}else{
			let M_result = date.getMonth() - value+1;
			monthResult.innerHTML=`${M_result}`;
			monthWarning.style.display='none';
			wrongMonth.style.display='none';	
			monthText.style.borderColor='black';
				if(M_result<0){
					monthResult.innerHTML=`0`;
				}else{
					monthResult.innerHTML=`${M_result}`;
				}
		}	
	}
}

function inputYear(value){
	let date = new Date();

	if(yearText.value===''){
		yearWarning.style.display='flex';
		wrongYear.style.display='none';
		yearWarning.style.position ='absolute';
		yearWarning.style.top='11%';
		yearWarning.style.left='67%';
		yearWarning.style.color='red';
		yearText.style.borderColor='red';
	}else if(yearText.value > date.getFullYear()){
		wrongYear.style.display='flex';
		yearWarning.style.display='none';
		wrongYear.style.position='absolute';
		wrongYear.style.color='red';
		wrongYear.style.top='29%';
		wrongYear.style.left='59%';	
	}else if(dayText.value >= 1 && dayText.value <= 31){
		if(dayText.value==31){
		   		validDate();
		}else if(dayText.value>28 && monthText.value==2){
			wrongDate.style.display='flex';
			dayWarning.style.display='none';
			wrongDate.style.position='absolute';
			wrongDate.style.color='red';
			wrongDate.style.top='27%';
			wrongDate.style.left='11%';
		}else{
			let Y_result = date.getFullYear() - value;
			yearResult.innerHTML=`${Y_result}`;
			yearWarning.style.display='none';
			wrongYear.style.display='none';	
			yearText.style.borderColor='black';
		}	
	}

}

// ============Mobile Display================

btnMobile.addEventListener('click',function(){
	inputDayMobile(dayText.value);
	inputMonthMobile(monthText.value);
	inputYearMobile(yearText.value);
});

function validDateMobile(){
				if(monthText.value==4){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='21%';
					wrongDate.style.left='5%';
					wrongDate.style.fontSize='11px';
		   		}else if(monthText.value==6){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='21%';
					wrongDate.style.left='5%';
					wrongDate.style.fontSize='11px';
		   		}else if(monthText.value==9){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='21%';
					wrongDate.style.left='5%';
					wrongDate.style.fontSize='11px';
		   		}else if(monthText.value==11){
		   			wrongDate.style.display='flex';
					dayWarning.style.display='none';
					wrongDate.style.position='absolute';
					wrongDate.style.color='red';
					wrongDate.style.top='21%';
					wrongDate.style.left='5%';
					wrongDate.style.fontSize='11px';
		   		}
}

function inputDayMobile(value){
	let date = new Date();
	
	if(dayText.value===''){
		dayWarning.style.display='flex';
		dayWarning.style.position ='absolute';
		dayWarning.style.top='21%';
		dayWarning.style.left='5%';
		dayWarning.style.fontSize='11px';
		dayWarning.style.color='red';
		dayText.style.borderColor='red';
		wrongDay.style.display='none';
	}else if(dayText.value >= 1 && dayText.value <= 31){
		if(dayText.value==31){
		   		validDateMobile();	
		}else if(dayText.value>28 && monthText.value==2){
			wrongDate.style.display='flex';
			dayWarning.style.display='none';
			wrongDate.style.position='absolute';
			wrongDate.style.color='red';
			wrongDate.style.top='21%';
			wrongDate.style.left='5%';
			wrongDate.style.fontSize='11px';
		}else{
			let D_result = date.getDate() - value;
			dayWarning.style.display='none';
			wrongDay.style.display='none';
			wrongDate.style.display='none';	
			dayText.style.borderColor='black';
				if(D_result<0){
					dayResult.innerHTML=`0`;
				}else{
					dayResult.innerHTML=`${D_result}`;
				}
		}	
	}else if(!(dayText.value >= 1 && dayText.value <= 31)){
		wrongDay.style.display='flex';
		dayWarning.style.display='none';
		wrongDay.style.position='absolute';
		wrongDay.style.color='red';
		wrongDay.style.top='21%';
		wrongDay.style.left='5%';
		wrongDay.style.fontSize='11px';
	}
}

function inputMonthMobile(value){
	let date = new Date();
	if(monthText.value===''){
		monthWarning.style.display='flex';
		wrongMonth.style.display='none';
		monthWarning.style.fontSize='11px';
		monthWarning.style.top='21%';
		monthWarning.style.left='37%';
		monthWarning.style.position ='absolute';
		monthWarning.style.color='red';
		monthText.style.borderColor='red';
	}else if(!(monthText.value>=1 && monthText.value<=12)){
		wrongMonth.style.display='flex';
		monthWarning.style.display='none';
		wrongMonth.style.position='absolute';
		wrongMonth.style.color='red';
		wrongMonth.style.top='21%';
		wrongMonth.style.left='37%';
		wrongMonth.style.fontSize='11px';	
	}else if(dayText.value >= 1 && dayText.value <= 31){
		if(dayText.value==31){
		   		validDateMobile();
		}else if(dayText.value>28 && monthText.value==2){
			wrongDate.style.display='flex';
			dayWarning.style.display='none';
			wrongDate.style.position='absolute';
			wrongDate.style.color='red';
			wrongDate.style.top='21%';
			wrongDate.style.left='5%';
			wrongDate.style.fontSize='11px';
		}else{
			let M_result = date.getMonth() - value+1;
			monthResult.innerHTML=`${M_result}`;
			monthWarning.style.display='none';
			wrongMonth.style.display='none';	
			monthText.style.borderColor='black';
				if(M_result<0){
					monthResult.innerHTML=`0`;
				}else{
					monthResult.innerHTML=`${M_result}`;
				}
		}	
	}
}

function inputYearMobile(value){
	let date = new Date();

	if(yearText.value===''){
		yearWarning.style.display='flex';
		wrongYear.style.display='none';
		yearWarning.style.position ='absolute';
		yearWarning.style.fontSize='11px';
		yearWarning.style.top='21%';
		yearWarning.style.left='69%';
		yearWarning.style.color='red';
		yearText.style.borderColor='red';
	}else if(yearText.value > date.getFullYear()){
		wrongYear.style.display='flex';
		yearWarning.style.display='none';
		wrongYear.style.position='absolute';
		wrongYear.style.color='red';
		wrongYear.style.top='21%';
		wrongYear.style.left='69%';
		wrongYear.style.fontSize='11px';	
	}else if(dayText.value >= 1 && dayText.value <= 31){
		if(dayText.value==31){
		   		validDateMobile();
		}else if(dayText.value>28 && monthText.value==2){
			wrongDate.style.display='flex';
			dayWarning.style.display='none';
			wrongDate.style.position='absolute';
			wrongDate.style.color='red';
			wrongDate.style.top='21%';
			wrongDate.style.left='5%';
			wrongDate.style.fontSize='11px';
		}else{
			let Y_result = date.getFullYear() - value;
			yearResult.innerHTML=`${Y_result}`;
			yearWarning.style.display='none';
			wrongYear.style.display='none';	
			yearText.style.borderColor='black';
		}	
	}

}