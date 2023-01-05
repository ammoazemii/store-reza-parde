let ul= document.getElementById("ul")
 let add = ()=>{
    let litags=[
        ul1= "<li class='bg-red'>item3</li>",
        ul2= "<li class='bg-red'>item4</li>",
        ul3= "<li class='bg-red'>item5</li>",
        ul4= "<li class='bg-red'>item6</li>",

    ]
    litags.map((item)=>{
        ul.innerHTML += item
    } )
}

let litag = ()=>{
    lis = document.createElement("li")
    lis.innerHTML = "item3"
    ul.appendChild(lis)

}
