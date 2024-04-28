let a = document.getElementById('btn1');
let b = document.getElementById('name')
let c = document.getElementById('email')
let d = document.getElementById('number')
let e = document.getElementById('msg')




a.addEventListener("click", function () {
    if (b.value == "" || c.value == "" || d.value == ""||d.value.length<10||d.value.length>10) {
        alert("Please Enter the valid details")
    }
    else
        {

            let f=confirm("Do you want to submit the query")
            if(f){
                
               
               alert('Form submitted successfully..')
                location.reload()
            }
        }
        
    })
