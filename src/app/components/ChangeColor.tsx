"use client"
export default function ChangeColor(){
    return(
        <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer"/>
        <div className="relative w-[73px] h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-7 peer-focus:ring-[#683529] dark:peer-focus:ring-[#9c5342] rounded-full peer dark:bg-[#683529] peer-checked:after:translate-x-full rtl:peer-checked:after:right-0 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[6px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[30px] after:w-[30px] after:transition-all dark:border-[#9c5342] peer-checked:bg-[#683529]"></div>
    </label>
    
    )
}