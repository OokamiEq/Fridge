const { userForm } = document.forms

userForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(userForm))

  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if(response.ok) {
    const result = await response.json()
    window.location = '/signin'
  } 
})
