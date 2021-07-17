var btn_add = document.querySelector("#btn-add");
var btn_clear = document.querySelector("#btn-clear");
var input_cname = document.querySelector("#input-cname");
var input_rating = document.querySelector("#input-rating")
var course_list = document.querySelector("#list-courses")


function clear(){
    input_cname.textContent="";
    input_rating.textContent="";
}
btn_add.addEventListener('click', () => {
    cname = input_cname.value;
    rating = input_rating.value.trim();
    regex = /^[0-9]+$/;
    console.log(typeof(rating))
    if (
        cname.trim().length<=0 ||
        rating.length<=0 ||
        (!(rating.match(regex))) ||
        rating <0 || rating > 5 
    ){  alert("invalid input")
        return;
    }
    else{
        var listitem = document.createElement('ion-item');
        listitem.innerHTML = "<b>"+cname+"</b> <p> ("+rating+"/5) </p>";
        course_list.appendChild(listitem);
        clear();
    }
})

btn_clear.addEventListener('click', ()=>{
    clear()
})