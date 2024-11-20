import React from 'react'

const AddTravel = () => {
  return (
    <div className="relative flex flex-col rounded-xl bg-transparent">
        <h4 className="block text-xl font-medium text-slate-800">
            Add Travel
        </h4>
        <p className="text-slate-500 font-light">
            Please enter information about your next trip!
        </p>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                Destination
                </label>
                <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Destination" />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                    Date
                </label>
                <input type="date" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="00/00/0000" />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                    Group
                </label>
                <input type="type" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Friends" />
            </div>
            </div>
            <button className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Add Travel
            </button>
        </form>
        </div>
  )
}

export default AddTravel;