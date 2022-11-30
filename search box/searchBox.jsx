var NewComponent = React.createClass({
    render: function() {
      return (
        <div className="overflow-hidden relative flex items-center min-h-screen">
          <div className="absolute bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 w-full h-1/2 z-0 top-0" style={{borderBottomLeftRadius: '50% 20%', borderBottomRightRadius: '50% 20%'}} />
          <div className="absolute inset-x-auto w-full z-10">
            <div className="w-2/3 mx-auto shadow-md rounded-md p-4 bg-white">
              <div className="flex justify-end mb-3 text-red-600 gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <a className="text-xs">Acheter une carte ou un abonnement</a>
              </div>
              <div className="flex gap-2 flex-col md:flex-row center">
                <div className="relative flex-1">
                  <input id="departure" defaultValue="Lille" name="departure" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
                  <label htmlFor="departure" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Départ :</label>
                  <div className="absolute right-0 top-0 mt-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div className="relative self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="relative flex-1">
                  <input id="arrival" name="arrival" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
                  <label htmlFor="arrival" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Arrivée :</label>
                </div>
                <div />
                <div className="relative flex-1">
                  <input id="eta" defaultValue="20/07/2021 à 06h" name="eta" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
                  <label htmlFor="eta" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Date aller</label>
                  <div className="absolute right-0 top-0 mt-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="relative flex-1">
                  <input id="etd" name="etd" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3" placeholder="quelquechose" />
                  <label htmlFor="etd" className="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">Date retour</label>
                  <div className="absolute right-0 top-0 mt-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-red-900 text-white font-extrabold text-lg rounded-full px-6 py-3">Rechercher</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });