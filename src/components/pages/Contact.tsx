'use client';

import { useState } from 'react';
import { fireConfetti } from '../confetti'; // Import confetti function
import { playAudio } from '../audioPlayer';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mrbgwggz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Thank you for reaching out! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });

                // Trigger confetti
                fireConfetti();
                playAudio('/sounds/contact_success_note.wav');

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            } else {
                throw new Error('Form submission failed. Please try again or feel free to reach me out directly.');
            }
        } catch (error) {
            setErrorMessage((error as Error).message || 'Something went wrong. Please try again.');
            playAudio('/sounds/contact_failure_note.wav');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex justify-center items-center">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Quick Highlights */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-vintage-accent mb-4">Open to a Conversation? Let&apos;s Connect!</h1>

                    <p className="text-gray-400 mt-10">
                        Great ideas start with a simple chat. Let’s talk about your needs, challenges, or goals, and see how we can create something remarkable together.
                    </p>
                    <p className="text-gray-400 mt-5 mb-10">
                        Technology is not just a tool. It&apos;s how I solve problems, create value, and leave my mark.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
                        <div className="bg-white/5 p-4 rounded shadow hover:shadow-xl transition-transform transform-gpu hover:scale-105 duration-300 ease-out">
                            <h3 className="text-lg font-bold text-vintage-accent">Seeking Relentless Commitment?</h3>
                            <p>What’s holding your team back? I tackle challenges head-on, turn obstacles into opportunities, and deliver results that matter. Let’s connect and make your vision a success.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded shadow hover:shadow-xl transition-transform transform-gpu hover:scale-105 duration-300 ease-out">
                            <h3 className="text-lg font-bold text-vintage-accent">Your Goals, My Mission</h3>
                            <p>Imagine having a partner who not only listens but truly understands your challenges—and transforms them into impactful solutions. Let’s connect and see how I can help you achieve your vision.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded shadow hover:shadow-xl transition-transform transform-gpu hover:scale-105 duration-300 ease-out">
                            <h3 className="text-lg font-bold text-vintage-accent">Let&apos;s Solve Something Big Together!</h3>
                            <p>Whether it’s crafting innovative applications or optimizing processes, I thrive on creating solutions that make an impact. Got a challenge in mind? Let’s have a conversation.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white/5 p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform-gpu hover:scale-105 duration-300 ease-out"
                >
                    <h2 className="text-2xl font-bold text-vintage-accent mb-6">Send a Message</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-400 mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring focus:ring-vintage-accent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring focus:ring-vintage-accent"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring focus:ring-vintage-accent"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 bg-vintage-accent text-black font-bold py-3 px-6 rounded-lg shadow hover:bg-vintage-accent/90 transition-transform transform hover:scale-105"
                    >
                        Send Message
                    </button>
                    {successMessage && <p className="mt-4 text-green-400 font-medium">{successMessage}</p>}
                    {errorMessage && <p className="mt-4 text-red-400 font-medium">{errorMessage}</p>}
                </form>
            </div>
        </section>
    );
}
