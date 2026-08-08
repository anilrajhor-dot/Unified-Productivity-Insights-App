// Core App Logic

// Example Dashboard Chart
function loadDashboard(){
  const ctx=document.getElementById("dashboardChart").getContext("2d");
  new Chart(ctx,{
    type:"bar",
    data:{
      labels:["Jan","Feb","Mar"],
      datasets:[{label:"Sales",data:[30,50,70],backgroundColor:"#2196f3"}]
    }
  });
}

// Example Financial Calculator
function calculateEMI(principal, rate, months){
  let monthlyRate=rate/12/100;
  return (principal*monthlyRate*Math.pow(1+monthlyRate,months))/
         (Math.pow(1+monthlyRate,months)-1);
}

// Call dashboard on load
window.onload=()=>{ if(document.getElementById("dashboardChart")) loadDashboard(); };
