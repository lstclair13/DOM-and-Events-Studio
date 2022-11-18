// Write your JavaScript code here.
// Remember to pay attention to page loading
window.addEventListener("load", function(){
    const takeoff = document.getElementById('takeoff')
     flightStatus = document.getElementById("flightStatus")
    takeoff.addEventListener('click', function() {
        let takeoffConfirm = window.confirm('confirm that the shuttle is ready for takeoff.')
        if(takeoffConfirm){
            document.flightStatus.innerHTML = "Shuttle in flight"
        }
    })
})