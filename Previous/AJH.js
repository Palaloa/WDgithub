function showForm() {
    document.getElementById("habitForm").style.display='block';
    document.getElementById("addHabitButton").style.display='none';
 }
 
function confirmDeleteHabit(n) {
    if (confirm("Are you sure?") == true) {
        deleteHabit(n);
    } else alert("deletion cancelled");
}

function deleteHabit(n) {
     document.getElementById(n).style.display = 'none';
 }

 function formAddHabit(){
     document.getElementById("testPar").innerHTML = document.getElementById("habitName").value;
 }