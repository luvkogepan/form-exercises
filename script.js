window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let testNameInput = document.querySelector("input[name=testName]");
        let testDateInput = document.querySelector("input[name=testDate]");
        let boosterCountInput = document.querySelector("input[name=boosterCount]");
        let emptyArray = [testNameInput, boosterCountInput, testDateInput];
        
        if (form.rocketType.selectedIndex=="") {
           alert("Please select a rocket type.");
           event.preventDefault();
        }

        for (let i=0; i<emptyArray.length; i++) {
            if (emptyArray[i].value === "") {
                alert("All fields are required.");
                event.preventDefault();
                break;
           }
        }

        for (let i=0; j<form.windRating.length; j++) {
            if (form.windRating[j].checked===false) {
                alert("Please choose a wind rating.");
                event.preventDefault();
                
        }
    }
    });    
});