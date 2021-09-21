fetch('https://fakestoreapi.com/products',{
    method: "get"
})
.then(function(response){

if (response.status !== 200){
    throw response.status
}

    return response.json()
})
.then(function(responseData){
        
    responseData.forEach(item => {
        let div=document.createElement('div')
        div.classList.add('product')
        document.querySelectorAll('.container1')[0].appendChild(div)


        let div1=document.createElement('div')
        div1.classList.add('product_image')
        div.appendChild(div1)



        let img=document.createElement('img')
        img.setAttribute('class','produc-image')
        img.setAttribute('src',item.image)
        img.setAttribute('alt','image')
        div1.appendChild(img)

        let p1 =document.createElement('p')
        p1.textContent='დასახელება' +" "+ item.title
        div.appendChild(p1)

        let p2 =document.createElement('p')
        p2.textContent='ღირებულება' +" "+ '$'+item.price
        div.appendChild(p2)

        let p4 =document.createElement('p')
        p4.textContent='კატეგორია' +" "+ item.category
        div.appendChild(p4)


        let view=document.createElement('button')
        view.setAttribute('class','view')
        view.setAttribute('type','submit')
        let view_a=document.createElement('a')
        view_a.setAttribute('href',"http://127.0.0.1:5500/product.html")
        view_a.textContent='სრულად ნახვა'
        view.appendChild(view_a)
        div.appendChild(view)

        let add_cart=document.createElement('button')
        add_cart.setAttribute('class','add_cart')
        add_cart.setAttribute('id','add_cart')
        add_cart.setAttribute('type','submit')
        add_cart.textContent='კალათაში დამატება'
        div.appendChild(add_cart)


        add_cart.addEventListener('click',function(){
            alert('სამწუხაროდ კალატაში დამატება დროებით შეზღუდულია')
        })
       
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

