import React from 'react'

const Hero = ({title, subtitle}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
          <div class="hero-body">
			<form class="container max-w-md mx-auto p-4 pt-6 pb-8 bg-white shadow-md rounded">
				<div class="field">
					<label class="label" for="checkin">Check-in</label>
					<input class="input" type="date" id="checkin" />
				</div>
				<div class="field">
					<label class="label" for="checkout">Check-out</label>
					<input class="input" type="date" id="checkout" />
				</div>
				<div class="field">
					<label class="label" for="guests">Number of Guests</label>
					<input class="input" type="number" id="guests" />
				</div>
				<button class="button is-primary">Search Apartments</button>
			</form>
		</div>
        </div>
      </div>
    </section>
  )
}

export default Hero