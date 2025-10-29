import React, { useState } from 'react';

const ContactContent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://amiteshaggarwalportfolio.vercel.app/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert(`✅ Thank you, ${formData.name}! Your message has been saved successfully.`);
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert(`❌ Failed to send message: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("⚠️ Something went wrong. Please try again later.");
        }
    };

    const socialLinks = [
        { name: 'LinkedIn', icon: <iconify-icon className="bg-blue-500 p-2 text-white rounded" icon="entypo-social:linkedin" width="20" height="20"></iconify-icon>, link: 'https://www.linkedin.com/in/amitesh-aggarwal-834969258/', color: 'text-blue-400 hover:text-blue-300' },
        { name: 'Email', icon: <iconify-icon icon="skill-icons:gmail-light" width="30" height="30"></iconify-icon>, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=amiteshaggarwal9948@gmail.com&su=Subject&body=BodyText', color: 'text-red-400 hover:text-red-300' },
        { name: 'Instagram', icon: <iconify-icon icon="skill-icons:instagram" width="34" height="34"></iconify-icon>, link: 'https://www.instagram.com/amiteshaggarwal', color: 'text-cyan-400 hover:text-cyan-300' },
        { name: 'WhatsApp- 9888639756', icon: <iconify-icon icon="logos:whatsapp-icon" width="34" height="35"></iconify-icon>, link: '#', color: 'text-gray-400 hover:text-white' },
    ];

    return (
        <div className="flex flex-col gap-8 md:gap-16 p-4 sm:p-6 md:p-8 relative min-h-[80vh]">
            <section className="relative pt-16 sm:pt-20 md:pt-12 max-w-4xl mx-auto w-full px-2 sm:px-4">
                <h2 className="absolute -top-6 sm:-top-8 md:-top-10 left-1/2 transform -translate-x-1/2 z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_8px_rgba(165,180,252,0.6)] hover:drop-shadow-[0_0_15px_rgba(165,180,252,1)] transition-all duration-300">
                    CONTACT ME
                </h2>

                <div className="contact-card-bg rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 pt-8 sm:pt-10 md:pt-12 shadow-2xl relative">
                    <p className="text-gray-300 text-center mb-6 md:mb-8 text-sm sm:text-base md:text-lg font-medium px-2">
                        For further more details contact me as follows 
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                                placeholder="E.g., Alex Johnson"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                                placeholder="E.g., alex@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors duration-300 resize-none"
                                placeholder="Let me know how I can help..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 sm:py-3 mt-2 sm:mt-4 bg-purple-600 text-white font-bold text-base sm:text-lg rounded-lg shadow-lg shadow-purple-600/50 hover:bg-purple-700 transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-purple-500/70"
                        >
                            Send Message 
                        </button>
                    </form>

                    <div className="flex items-center my-6 md:my-8">
                        <hr className="flex-grow border-gray-700/50" />
                        <span className="px-3 md:px-4 text-gray-500 text-xs sm:text-sm font-medium">OR CONNECT</span>
                        <hr className="flex-grow border-gray-700/50" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:space-x-6 md:flex-nowrap">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 p-2 rounded-lg hover:bg-purple-800/30 ${link.color}`}
                            >
                                {link.icon}
                                <span className="text-center sm:text-left">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes pulse-shadow {
                    0% {
                        box-shadow: 0 0 10px rgba(167, 139, 250, 0.4), 0 0 0 rgba(167, 139, 250, 0);
                        border: 1px solid rgba(167, 139, 250, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 20px rgba(167, 139, 250, 0.8), 0 0 50px rgba(192, 132, 252, 0.3);
                        border: 1px solid rgba(192, 132, 252, 0.8);
                    }
                    100% {
                        box-shadow: 0 0 10px rgba(167, 139, 250, 0.4), 0 0 0 rgba(167, 139, 250, 0);
                        border: 1px solid rgba(167, 139, 250, 0.5);
                    }
                }
                .contact-card-bg {
                    background-color: rgba(45, 10, 80, 0.2); 
                    animation: pulse-shadow 4s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default ContactContent;