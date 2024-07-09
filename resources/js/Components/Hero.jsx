import React from 'react'

const Hero = ({title, subtitle}) => {
  return (
    <section style={{backgroundImage: `url(https://pub-988cd14df67a4c0d8aa25b7862f1ff48.r2.dev/images/beds-img-2.jpg)`}} className=" w-full bg-center bg-cover bg-no-repeat bg-fixed py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl text-pink-800 font-extrabold mb-4  sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
         
          <div class="hero-body">
			<form className="container max-w-md mx-auto p-4 pt-6 pb-8 bg-white shadow-md rounded-lg">
      <div className="field">
					<label className="label" for="where">Where: </label>
					<input className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="text" id="where" />
				</div>
				<div className="field">
					<label className="label" for="checkin">Check-in: </label>
					<input className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="date" id="checkin" />
				</div>
				<div className="field">
					<label className="label" for="checkout">Check-out: </label>
					<input className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="date" id="checkout" />
				</div>
				<div className="field">
					<label className="label" for="guests">Number of Guests: </label>
					<input className="input bg-violet-400 w-1/6 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="number" id="guests" />
				</div>
				<button className="bg-violet-600 font-bold mt-4 rounded-lg py-2 px-4 md:mx-2">Search Apartments</button>
			</form>
		</div>
        </div>
      </div>
    </section>
  )
}

export default Hero