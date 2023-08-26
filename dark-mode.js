const icon = document.getElementById('mode')
const words = document.getElementById('dark_light')


function darkmode () {
  const setTheme = document.body
  setTheme.classList.toggle('dark-theme')
  let theme
  if (setTheme.classList.contains('dark-theme')) {
    theme = 'DARK'
    words.textContent = 'light mode'
  } else {
    theme = 'LIGHT'
    words.textContent = 'dark mode'
  }

  localStorage.setItem('PageTheme', JSON.stringify(theme))
}

setInterval(() => {
  const GetTheme = JSON.parse(localStorage.getItem('PageTheme'))
  if (GetTheme === 'DARK') {
    document.body.classList = 'dark-theme'
    words.textContent = 'light mode'
  } else {
    document.body.classList = ''
    words.textContent = 'dark mode'
  }
}, 5)

// // code for login page
// // code for sign up module popup
// document.querySelector('#show-signup').addEventListener('click', function (e) {
//   e.preventDefault()
//   document.querySelector('.popup').classList.add('active')
// })
// document.querySelector('#close-btn').addEventListener('click', function () {
//   document.querySelector('.popup').classList.remove('active')
// })

// // code for local storage

// const storedUser = localStorage.getItem('user')
// const ls = storedUser ? JSON.parse(storedUser) : []
// // const user = {}
// // code for sign up
// document.getElementById('signup').addEventListener('click', function () {
//   // e.preventDefault()
//   // console.log('log')

//   const $email = document.getElementById('email')
//   const $password = document.getElementById('password')
//   if ($email.value && $password.value) {
//     console.log(Array.isArray(ls))
//     const userEmail = ls.map(i => i.email)
//     if (userEmail.includes($email.value)) {
//       console.log(Array.isArray(ls))
//       alert('You already Sign up')
//     } else {
//       let user = { email: $email.value, password: $password.value }
//       ls.push(user)
//       localStorage.setItem('user', JSON.stringify(ls))
//       user = {}
//       alert('Sign up successful')
//     }
//   } else {
//     alert('Please enter the correct email and password')
//   }
//   $email.value = ''
//   $password.value = ''
// })

// // code for login
// document.querySelector('.logincontent').addEventListener('submit', function (e) {
//   e.preventDefault()
//   const $email = document.getElementById('loginusername')
//   const $password = document.getElementById('loginpassword')
//   // const storedUser = localStorage.getItem('user')
//   // const ls = storedUser ? JSON.parse(storedUser) : []
//   console.log(ls)
//   if ($email.value && $password.value) {
//     console.log(Array.isArray(ls))
//     const userEmail = ls.map(i => i.email)
//     if (userEmail.includes($email.value)) {
//       for (const i of ls) {
//         if (i.email === $email.value && i.password === $password.value) {
//           alert('Log in successful')
//         } else {
//           alert('Email or password is wrong, please Sign up first')
//         }
//       }
//     }
//   } else {
//     alert('Please enter your email and password')
//   }
//   $email.value = ''
//   $password.value = ''
// })
