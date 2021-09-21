document.getElementById('registration').addEventListener('submit', function(event){
  event.preventDefault()
  let errors={};
  let form=event.target

  let email = form.querySelector('[name="email"]').value

  if(email.length<1){
    errors.email="გთხოვთ მიუთითოთ ელექტრონული ფოსტა"
  }

  let username = form.querySelector('[name="username"]').value

  if(username.length<2){
    errors.username="სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან"
  }


  let surname = form.querySelector('[name="surname"]').value

  if(surname.length<5){
    errors.surname="გვარი უნდა შედგებოდეს მინიმუმ 5 სიმბოლოსგან"
  }


  let password = form.querySelector('[name="password"]').value
  let password2 = form.querySelector('[name="password2"]').value


  if(password.length<6){
    errors.password="პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან"
  }
  if(password!=password2){
    errors.password2="დაადასტურეთ პაროლი"
  }

  let agree = form.querySelector('[name="agree"]').checked

  if(!agree){
    errors.agree='გთხოვთ დაეთანხმოთ წესებს'
  }

  let gender=false

  form.querySelectorAll('[name="gender"]').forEach(item => {
    if (item.checked){
      gender=true
    }    
  });
  if(!gender){
    errors.gender='გთხოვთ აირჩიოთ სქესი'
  }

  form.querySelectorAll('.error-text').forEach(item =>{
    item.textContent= ""
  })

  for(let name in errors){
    let errorplaceholder=document.getElementById('error_'+name)

    if(errorplaceholder){
      errorplaceholder.textContent=errors[name]
    }
  }

  if(Object.keys(errors).length===0){
    form.submit()
  }

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






