function Navbar(props){
    
    return(
        <div className="px-[30px] py-[30px] xl:px-[100px] lg:px-[70px] md:px-[40px] bg-white sticky top-0 z-20">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium">Shopping Cart </h2>
                <div className="relative">
                    <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    <span className="text-[12px] px-[8px] py-[5px] border border-[#6f6fee] bg-[#6f6fee] rounded-full text-white absolute top-[-18px] right-[-18px]">{props.listcount}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;