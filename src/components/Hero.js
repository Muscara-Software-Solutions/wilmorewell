const incentives = [
  {
    name: 'Energy Teas',
    imageSrc: 'https://www.svgrepo.com/show/529246/tea-cup.svg',
    fill: "h-16 w-16 fill-green-500",
    text: "text-2xl font-bold text-indigo-500",
    description: "Our teas contain B12 Vitamins, Herbal Tea for metabolism boost & aloe for digestive support.",
  },
  {
    name: 'Gluten-Free Donuts',
    imageSrc: 'https://www.svgrepo.com/show/524033/donut.svg',
    fill: "fill-yellow-500",
    text: "text-2xl font-bold text-purple-500",
    description: "Grab your delicious donut with 10g of protein and gluten-free goodness.",
  },
  {
    name: 'Protein Shakes',
    imageSrc: 'https://www.svgrepo.com/show/254511/milkshake.svg',
    fill: "fill-yellow-500",
    text: "text-2xl font-bold text-pink-500",
    description: "Grab a shake to fuel your day and keep you satisfied with 24g of protein & 21 essential vitamins.",
  },
]

export default function Hero() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Wilmore Well Nutrition
              </h2>
              <a href="https://www.google.com/maps/place/324+E+Main+St,+Wilmore,+KY/@37.8581999,-84.6590308,3a,75y,231.46h,90t/data=!3m4!1e1!3m2!1s-lnDxNF0MWKugOddtRtVXg!2e0!4m2!3m1!1s0x884261d80efe557d:0x7a97d0f8607f268a?sa=X&ved=2ahUKEwjAsoGXiqaBAxV_pokEHT11CCMQxB16BAgREAA" className="pt-4 text-2xl text-gray-500">
                324 E Main St, Wilmore, KY
              </a>
            </div>
            {/* aspect-h-2 aspect-w-3 */}
            <div className="h-100 w-auto overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/feature3.jpeg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <center>
                <div key={incentive.name} className="sm:flex lg:block">
                    <div className="sm:flex-shrink-0">
                      <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                    </div>
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className={incentive.text}>{incentive.name}</h3>
                    <p className="mt-2 text-md text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              </center>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
