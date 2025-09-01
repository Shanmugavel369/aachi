<section className="py-20 px-4 md:px-16 bg-white font-serif">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-x-8 items-stretch">
          {/* Left: Headline + Stats */}
          <div className="md:col-span-2 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4 fade-left">
                A Legacy of
                <br />
                Quality & Care
              </h2>
              <p className="text-gray-700 text-lg mb-8 fade-left">
                With decades of expertise, we create products that define trust.
              </p>
              <div className="mt-3">
                <p className="text-amber-700 italic text-[17px] fade-left">
                  Every milestone achieved reflects our customer’s confidence in
                  us.
                </p>
              </div>
              <div className="flex gap-6 relative -mb-8 z-20">
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div
                    ref={premiumRef}
                    className="text-xl font-bold text-teal-700"
                  >
                    0
                  </div>
                  <div className="text-[15px] text-gray-500">
                    Distributors Across
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div className="text-xl font-bold text-teal-700">1M</div>
                  <div className="text-[15px] text-gray-500">
                    Retailers Outlets
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div
                    ref={awardsRef}
                    className="text-xl font-bold text-teal-700"
                  >
                    0
                  </div>
                  <div className="text-[15px] text-gray-500">
                    Global Presence
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div
                    ref={projectsRef}
                    className="text-xl font-bold text-teal-700"
                  >
                    0
                  </div>
                  <div className="text-[15px] text-gray-500">
                    Total Products
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="md:col-span-2 flex items-center justify-center -mb-8 fade-up">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={AbiSir}
                alt="Visual Center"
                className="max-h-[300px] object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right: Video + Approach */}
          <div className="md:col-span-2 flex flex-col justify-between fade-right">
            <div className="mb-6">
              <div className="relative w-full h-[500px] perspective card-hover">
                <div className="card-inner w-full h-full relative">
                  {/* Front Side */}
                  <div className="card-front w-full max-w-md h-64 rounded-md shadow overflow-hidden">
                    <img
                      src={I}
                      alt="image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Back Side */}
                  <div className="card-back bg-gray-200 rounded-md p-6 shadow-lg flex flex-col justify-center gap-4 overflow-auto">
                    <h3 className="text-xl font-bold">
                      Spice Up Every Meal with Aachi
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Aachi’s legacy grows through quality, trust, and flavors
                      uniting homes everywhere. Aachi Masala is a trusted name
                      in Indian households, known for bringing authentic flavors
                      to every kitchen. With a wide range of spice blends and
                      ready-to-cook products, Aachi ensures convenience without
                      compromising on taste. Rooted in tradition and crafted
                      with care, each product is designed to meet the evolving
                      needs of modern families while preserving the rich
                      culinary heritage of India. From everyday meals to festive
                      feasts, Aachi adds a touch of home to every dish. Its
                      commitment to quality, hygiene, and affordability has made
                      it a preferred choice for millions seeking flavorful,
                      wholesome, and easy-to-make food solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <video
                src="assets/h2.mp4"
                autoPlay
                loop
                muted
                className="w-[500px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </section>