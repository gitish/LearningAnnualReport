import React from 'react';

const Statistics = () => {
    return (
        <div>
            <Cources />
            <NumberData />
            <GeneralData />
        </div>
        
    )
}

const Cources = () => {
    return (
      <div>
        <section className="bg-gray-50 text-center py-80 bg-blue-200">
        <div class="gap-6 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Training, Certification and Learnings </h1>
            <p className="text-lg text-gray-600">
              TODO: Give some description here.
            </p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10">
          <div className='text-center bg-white p-4 rounded-lg card transition' >
            <h2 className="text-2xl font-bold text-gray-800">Certification</h2>
            <p className="text-gray-600">GCP Certification</p>
          </div>
          <div className='text-center bg-white p-4 rounded-lg card transition'>
            <h2 className="text-2xl font-bold text-gray-800">Platform Training</h2>
            <p className="text-gray-600">Platform 2.0</p>
          </div>
          <div className='text-center bg-white p-4 rounded-lg card transition'>
            <h2 className="text-2xl font-bold text-gray-800">Gen AI</h2>
            <p className="text-gray-600">Generative AI</p>
          </div>
          <div className='text-center bg-white p-4 rounded-lg card transition'>
            <h2 className="text-2xl font-bold text-gray-800">Polyglot</h2>
            <p className="text-gray-600">Programming languages</p>
          </div>
        </section>
        </section>
      </div>
    
    );
}

const NumberData = () => {
    return (
      <section className="bg-gray-50 text-center py-80 bg-red-200">
        <div class="gap-6 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Scale, Growth and Profits</h1>
            <p className="text-lg text-gray-600">
              TODO: Give some description here.
            </p>
          </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10 ">
          <div className='text-center bg-white p-4 rounded-lg card'>
            <h2 className="text-2xl font-bold text-gray-800">100+</h2>
            <p className="text-gray-600">Learning Sessions</p>
          </div>
          <div className='text-center bg-white p-4 rounded-lg card'>
            <h2 className="text-2xl font-bold text-gray-800">50+</h2>
            <p className="text-gray-600">People inlighten</p>
          </div>
          <div className='text-center bg-white p-4 rounded-lg card'>
            <h2 className="text-2xl font-bold text-gray-800">30</h2>
            <p className="text-gray-600">New Trainers</p>
          </div>
          <div className='text-center bg-white p-4 rounded-lg card'>
            <h2 className="text-2xl font-bold text-gray-800">20+</h2>
            <p className="text-gray-600">New Certifications</p>
          </div>
          <div className='text-center bg-white p-4 rounded-lg card'>
            <h2 className="text-2xl font-bold text-gray-800">£0 Millions</h2>
            <p className="text-gray-600">Calulated Benefits</p>
          </div>
        </section>
        </section>
      );
}

const GeneralData = () => {
  return (
    <section className="bg-gray-50 text-center py-80 bg-green-200">
        <div class="gap-6 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">What Next...</h1>
            <p className="text-lg text-gray-600">
              TODO: Give some description here.
            </p>
          </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10">
          <div className='text-center bg-grey p-4 rounded-lg card'>
              <h2 className="text-2xl font-bold text-gray-800">&gt;75%</h2>
              <p className="text-gray-600">GCP Certification</p>
          </div>
          <div className='text-center bg-grey p-4 rounded-lg card'>
              <h2 className="text-2xl font-bold text-gray-800">150+</h2>
              <p className="text-gray-600">Polyglots</p>
          </div>
          <div className='text-center bg-grey p-4 rounded-lg card'>
              <h2 className="text-2xl font-bold text-gray-800">55% coding Growth</h2>
              <p className="text-gray-600">Code faster with Slingsot</p>
          </div>
          </section>
          </section>
  )
}

export default Statistics;
