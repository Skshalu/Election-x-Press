import React, { useState } from 'react'

function Contact() {

    const sourceOptions = [
        "Referral",
        "Social Media",
        "Website",
        "Advertisement",
        "Other"
    ];

    const [name, setName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [question, setQuestion] = useState("")
    const [source, setSource] = useState("")


    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            fullName:name,
            contactNumber:contactNumber,
            question:question,
            source:source
        }
        console.log(data)

        setName("")
        setContactNumber("")
        setQuestion("")
        setSource("")
    }


    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
            <div className="max-w-4xl mx-auto px-4 relative">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Get Political Consultation
                        </span>
                    </h2>
                    <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium">Contact Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                    placeholder="+1 (555) 000-0000"
                                    value={contactNumber}
                                    onChange={(e)=>setContactNumber(e.target.value)}
                                    required
                                />
                            </div>
                        </div>


                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">Ask Question</label>
                            {/* <input
                                type='text'
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                placeholder="Ask us anything"
                            /> */}
                            <textarea
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                placeholder="Ask us anything"
                                value={question}
                                onChange={(e)=>setQuestion(e.target.value)}
                            >

                            </textarea>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-medium">How did you hear about us?</label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white/50 backdrop-blur-lg"
                                onChange={(e)=>setSource(e.target.value)}
                                required
                            >
                                <option value="">Select an option</option>
                                {sourceOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                        >
                            Get Started Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact