export function Button({text, onClick}){
    return(
        <button
        onClick={onClick} 
        className="bg-[#1F2226] w-full lg:w- p-2 
        text-[#FF014F] cursor-pointer rounded-sm shadow-[6px_9px_13px_0px_rgba(0,_0,_0,_0.1)]
        hover:bg-gray-600 ">
        {text}
        </button>
    );
}   
