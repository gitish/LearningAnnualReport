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

const GeneralData = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-80 bg-red-50">
            <div className='text-center bg-grey p-4 rounded-lg shadow hover:shadow-lg transition'>
                <h2 className="text-2xl font-bold text-gray-800">100</h2>
                <p className="text-gray-600">Learning Session</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800">50+</h2>
                <p className="text-gray-600">People</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800">500K+</h2>
                <p className="text-gray-600">New Accounts</p>
            </div>
            
            </section>
    )
}

const Cources = () => {
    return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-80 bg-blue-50">
          <div className='text-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition' >
            <h2 className="text-2xl font-bold text-gray-800">Training Session</h2>
            <p className="text-gray-600">Product 101</p>
            <p className="text-gray-600">GCP Certification</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Gen AI</h2>
            <p className="text-gray-600">Generative AI</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Polyglot</h2>
            <p className="text-gray-600">Programming languages</p>
          </div>
        </section>
    );
}

const NumberData = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-80 bg-gray">
          <div className='text-center bg-white p-4 rounded-lg shadow hover:shadow-lg'>
            <h2 className="text-2xl font-bold text-gray-800">100</h2>
            <p className="text-gray-600">Learning Session</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">50+</h2>
            <p className="text-gray-600">People</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">20</h2>
            <p className="text-gray-600">New Trainers</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">15</h2>
            <p className="text-gray-600">New Certification</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">£500</h2>
            <p className="text-gray-600">Benefits</p>
          </div>
        </section>
      );
}
export default Statistics;
