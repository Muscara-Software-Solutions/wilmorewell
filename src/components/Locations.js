const files = [
  {
    title: 'The Well Nutrition',
    size: '123 Orchard Dr Nicholasville, KY 40356',
    source: '/thewell.jpeg',
    link: "https://www.facebook.com/profile.php?id=100042181484474"
  },
  {
    title: "Woodford Nutrition C & J",
    size: "157 Yellow Jacket Dr, Versailles KY 40383",
    source: "https://woodfordnutrition.com/favicon.jpeg",
    link: "https://woodfordnutrition.com"
  },
  {
    title: "Right Track Nutrition",
    size: "105 Quinn Dr Nicholasville, KY 40356",
    source: "https://righttracknutrition.net/images/logo.jpeg",
    link: "https://righttracknutrition.net"
  },
]

export default function Locations() {
  return (
    <>
      <div className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:text-6xl">Our Locations</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Not located in Wilmore? No worry! We have locations all throughout Kentucky.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {files.map((file) => (
            <a href={file.link}>
              <li key={file.source} className="relative">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                  <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View details for {file.title}</span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-2xl font-bold text-gray-900">{file.title}</p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  )
}
