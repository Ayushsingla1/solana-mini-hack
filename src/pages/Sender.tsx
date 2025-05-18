import Navbar from "../Components/Navbar";


const Sender = () => {
    return <div className="flex w-screen h-screen bg-black flex-col">
        <Navbar/>
        <div className="flex flex-col gap-y-10">
            <div>
                <label htmlFor="email">Enter the Email</label>
                <input className="" id="email" name="email" type="text" placeholder="Enter the receiver's email"></input>
            </div>

            <div>
                <label htmlFor="mobile">Enter the Email</label>
                <input className="" id="mobile" name="mobile" type="tel" placeholder="Enter the receiver's email"></input>
            </div>

            <div>
                <label htmlFor="amount">Enter the amount</label>
                <input className="" id="amount" name="amount" type="number"></input>
            </div>
        </div>
    </div>
}

export default Sender;