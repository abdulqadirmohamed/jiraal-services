
const Services = () => {
    return (
        <div className="w-[70%] mx-auto text-white mt-24">
            <h1>Grid Services</h1>
            <div className="grid grid-cols-4 gap-3">
                <div className="border-[1px] border-white p-24 col-span-2">1</div>
                <div className="border-[1px] border-white p-24">2</div>
                <div className="border-[1px] border-white p-24">3</div>
                <div className="border-[1px] border-white p-24">4</div>
                <div className="border-[1px] border-white p-24">5</div>
                <div className="border-[1px] border-white p-24 col-span-2">6</div>
            </div>
        </div>
    )
}

export default Services