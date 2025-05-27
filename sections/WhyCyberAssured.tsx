import React from 'react'

const reasons = [
  {
    number: '1',
    title: 'Integrated Solutions',
    description:
      'Unlike traditional IT resellers, we deliver unified solutions where security technologies work in harmony.',
  },
  {
    number: '2',
    title: 'Expert Guidance',
    description:
      'Battle-tested security professionals who understand real-world threats and regulatory compliance.',
  },
  {
    number: '3',
    title: 'Strategic Partnerships',
    description:
      'Exclusive partnerships with industry leaders ensure you get the best technology at competitive prices.',
  },
  {
    number: '4',
    title: 'Consultative Approach',
    description:
      'We assess your actual risk profile before recommending solutions—sometimes that means less technology, not more.',
  },
]

function WhyCyberAssured() {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
        Why CyberAssured Stands Apart
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        We bring deep cybersecurity expertise built from real-world experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-10">
        {reasons.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-bold text-lg mb-4">
              {item.number}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyCyberAssured
