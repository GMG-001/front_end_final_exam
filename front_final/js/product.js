fetch('https://fakestoreapi.com/products/1',{
    method: "get"
})
.then(function(response){

if (response.status !== 200){
    throw response.status
}

    return response.json()
})
.then(function(responseData){
        

        let div=document.createElement('div')
        div.classList.add('product')
        document.querySelectorAll('.product_container')[0].appendChild(div)

        let img=document.createElement('img')
        img.setAttribute('class','produc_image')
        img.setAttribute('src',responseData.image)
        img.setAttribute('alt','image')
        document.getElementsByClassName('image')[0].appendChild(img)

        let p1 =document.createElement('p')
        p1.textContent='პროდუქტის დასახელება' +" "+ responseData.title
        div.appendChild(p1)

        let p2 =document.createElement('p')
        p2.textContent='პროდუქტის ღირებულება' +" "+ responseData.price
        div.appendChild(p2)

        let p3 =document.createElement('p')
        p3.textContent='აღწერა' +" "+ responseData.description
        div.appendChild(p3)

        let p4 =document.createElement('p')
        p4.textContent='კატეგორია' +" "+ responseData.category
        div.appendChild(p4)


        let add_cart=document.createElement('button')
        add_cart.setAttribute('class','add_cart')
        add_cart.setAttribute('id','add_cart')
        add_cart.setAttribute('type','submit')
        add_cart.textContent='კალათაში დამატება'
        div.appendChild(add_cart)

        add_cart.addEventListener('click',function(){
            alert('სამწუხაროდ კალთაში დამატება დროებით შეზღუდულია')
        })

        
})
.catch(function(error){
    if(Error==404)
    console.log(error)
})


fetch('https://fakestoreapi.com/products/categories',{
    method: "get"
})
.then(function(response1){

if (response1.status !== 200){
    throw response1.status
}

    return response1.json()
})
.then(function(responseData1){
    responseData1.forEach(item1 => {
        let li=document.createElement('li')
        let a=document.createElement('a')
        li.classList.add('nav-li')
        a.setAttribute('href','#')
        a.textContent=(item1)
        li.appendChild(a)
        document.querySelectorAll('.navbar-ul')[0].appendChild(li)
    })

        
})
.catch(function(error){
    if(Error==404)
    console.log(error)
})


let navbarlinks = document.getElementById('links')
let togglebutton = document.getElementById('togglebutton')



togglebutton.addEventListener('click',function(){
    navbarlinks.classList.toggle('active')
})