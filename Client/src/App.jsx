import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', course: 'Basic Baking' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just show the success message
    // Later, we will connect this to your MongoDB!
    setSubmitted(true);
    
    // Simple redirect logic you mentioned
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600 italic">India's Flavour</h1>
        <a href="#register" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold transition">
          Join Class
        </a>
      </nav>

      <main className="max-w-4xl mx-auto mt-12 p-6">
        {/* Success Message */}
        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-10 rounded-xl text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-2">Registration Successful! 🎂</h2>
            <p>Thank you, {formData.name}. Mom will contact you on WhatsApp shortly!</p>
            <p className="text-sm mt-4 text-green-600">Redirecting to home in 5 seconds...</p>
          </div>
        ) : (
          <>
            <section className="text-center mb-16">
              <h2 className="text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
                Turn Your Kitchen Into a <span className="text-pink-500">Professional Bakery</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join India's Flavour Academy. Learn the secrets of perfect sponges, artisan breads, and festive cakes.
              </p>
              <div className="w-full h-80 bg-gray-300 rounded-2xl overflow-hidden shadow-2xl mb-12">
                 {/* Once you have a photo of your mom baking, put the URL here */}
                 <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000" alt="Baking Class" className="w-full h-full object-cover" />
              </div>
            </section>

            {/* Registration Form Section */}
            <section id="register" className="bg-white p-8 rounded-3xl shadow-xl max-w-md mx-auto border-t-4 border-pink-500">
              <h3 className="text-2xl font-bold mb-6 text-center">Book Your Spot</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none" 
                    placeholder="Enter your name"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none" 
                    placeholder="e.g. 9876543210"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Select Course</label>
                  <select 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                  >
                    <option>Basic Cake Baking</option>
                    <option>Advanced Pastries</option>
                    <option>Artisan Breads</option>
                    <option>Eggless Specials</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300">
                  Register for Class
                </button>
              </form>
            </section>
          </>
        )}
      </main>

      <footer className="mt-20 p-10 bg-gray-900 text-white text-center">
        <p>© 2026 India's Flavour Baking Academy | Jhansi</p>
      </footer>
    </div>
  )
}

export default App