const Stats = ({ ipAdress, location, timezone, isp }) => {
  return (
    <div className="w-4/5 rounded-2xl absolute top-52 sm:top-72 xm-screen bg-white fix-center z-10 flex flex-col md:flex-row container p-4 md:p-8 items-center justify-center">
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">IP Address</p>
        <p className="md:text-xl text-black font-bold">{ipAdress}</p>
      </div>
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">Location</p>
        <p className="md:text-xl text-black font-bold">{location}</p>
      </div>
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">Timezone</p>
        <p className="md:text-xl text-black font-bold">{timezone}</p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">ISP</p>
        <p className="md:text-xl text-black font-bold">{isp}</p>
      </div>
    </div>
  );
};

export default Stats;
