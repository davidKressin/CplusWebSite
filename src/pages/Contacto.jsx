import React from 'react'

export const Contacto = () => {
  return (
    <div className="container-fluid px-0 p-0 m-0 min-vh-75">
      <div className="page-header bg-fixed p-0 m-0 text-white vh-25">
        <div className='opacity-1 bg-dark vh-25 m-0'>
        </div>
        <div className="text-center m-0 p-0 vh-25 position-relative d-flex flex-column justify-content-center" style={{"zIndex":"9999", "top": "-25vh"}}>
          <h2 style={{"fontSize": "2.5rem"}}>Centro de investigación Concepción C+</h2>
        </div>
      </div>
      <section className="col-md-6 mx-auto my-5">
        <h3 className='text-customPrimary text-center'>¿Quiénes somos?</h3>
        <p className='text-center px-5'>El Centro de Investigación en Tecnologías para la Sociedad (C+) apunta a fomentar la investigación, desarrollo e innovación que permite comprender y abordar desafíos, problemas y oportunidades que el país enfrenta para su desarrollo, a nivel nacional y regional. Este centro comprende un alto nivel de desarrollo científico, tecnológico y de innovación para resolver desafíos tanto productivos, como sociales y culturales. Además, busca encaminar su accionar en función de entregar respuestas concretas a las problemáticas y necesidades del país, obteniendo así, un impacto en la sociedad.</p>
      </section>


    </div>
  )
}