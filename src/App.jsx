import React from 'react';

function App() {
  fetch('http://demo2211087.mockable.io/mock', {
    method: 'POST',
    body: JSON.stringify({
       name: 'Kamil',
       email : 'sam@123.com',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle data
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <>

    </>
  );
}

export default App;