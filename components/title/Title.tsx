export const Title = () => (
  // TEXT COLOR I LIKE: text-[1A1F2C] <- dark red - text-red-400
  //drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
  <div className="container flex flex-col items-center ">
    {/* <Text className={classes.title} ta="center" mt={100}>
      Welcome to Open
      <Text inherit variant="gradient" component="span" gradient={{ from: 'orange', to: 'blue' }}>
        MYC
      </Text>
    </Text>
    <Text className={classes.subtitle} ta="center">
      The easiest way to find comedy open mics in the 5 Boroughs
    </Text> */}
    <h1 className="font-black text-3xl lg:text-5xl md:text-4xl text-center">
      <span className=" pr-1">
        NYC Open{' '}
        <span className="inherit bg-gradient-to-r from-blue-400 to-orange-600 inline-block text-transparent bg-clip-text">
          Mic Search
        </span>{' '}
      </span>
    </h1>
    <h2 className="font-light text-2xl lg:text-4xl md:text-3xl px-2 text-center text-[#1A1F2C]">
      The easiest way to find comedy open mics in the 5 Boroughs
    </h2>
  </div>
);
