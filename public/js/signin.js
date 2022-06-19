const { logForm } = document.forms

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(logForm))

  const response = await fetch('/signin', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if(response.ok) {
    const result = await response.json()
    window.location = '/'
  }
  window.location = '/signin'

})
