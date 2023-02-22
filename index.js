var listDetails = document.querySelectorAll("details");

listDetails.forEach((item)=>{
    
    item.addEventListener('click', (e) => {
        var valueOpen = item.id;
        switch(valueOpen){
            case "one":
                var no = 1;
            break;
            case "two":
                var no = 2;
            break;
            case "three":
                var no = 3;
            break;
            case "four":
                var no = 4;
            break;
            case "five":
                var no = 5;
            break;
        }

        for(var i = 1; i <= listDetails.length; i++){
            if(no!==i){
                document.querySelector(".q"+i).removeAttribute("open");
            }
        }
    })
})

