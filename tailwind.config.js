/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      'fontFamily':{
        'poppins':'poppins',
        'poppins,sans-serif':'poppins,sans-serif',
        'poppins,sans-serif,cursive':'poppins,sans-serif,cursive',
        'Roboto, sans-serif': 'Roboto, sans-serif'
      },
      'width':{
        '50%':'50%',
        '30%':'30%',
        '70%':'70%',
        '40%':'40%',
        '60%':'60%'
      },
      'gap':{
        '-1px':'-1px',
        '-5vw':'-5vw'
      },
      'margin-right':{
        '10vw':'10vw'
      },
      'height':{
        '100vh':'100vh',
        '90vh':'90vh',
        '80vh':'80vh',
        '75vh':'75vh',
        '70vh':'70vh',
        '110vh':'110vh',
        '150vh':"150vh"
      },
      'left':{
        '20%':'20%',
        '80%':'80%',
        '90%':'90%',
        '98%':'98%',
        '100%':'100%',
        '200vw':'200vw',
        '300vw':'300vw'
      }
    },
  },
  plugins: [],
}

