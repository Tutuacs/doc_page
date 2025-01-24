export default function Container({children}: {children: React.ReactNode}) {
    return (
        <main>
            <div className="h-full w-full bg-transparent flex justify-center">
                <div className="w-[10%] lg:w-[20%]"></div>
                <div className="w-full">
                { children }
                </div>
                <div className="w-[10%] lg:w-[20%]"></div>
            </div> 
        </main>
    )
}