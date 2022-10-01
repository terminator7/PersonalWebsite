import * as Icon from "react-bootstrap-icons"


export let ContactPage = (props) => {
    return (
        <div className="mx-auto pt-24 h-screen from-blue-800 to-purple-700 bg-gradient-to-r">
            <div className="bg-white xs:w-full md:w-3/4 py-10 mx-auto rounded-lg">
                <h1 className="text-7xl font-bold text-purple-700 text-center">Contact Information</h1>
                <div className="border-4 border-blue-500 mt-4 mx-5 p-2 rounded-md text-xl">
                    <p className="text-center">Email: <a href="mailto:douglasjacob1999@gmail.com" target={'_blank'} rel={'noreferrer'} className="text-blue-700 font-medium hover:underline hover:underline-offset-4">douglasjacob1999@gmail.com</a></p>
                    <div className="flex justify-center">
                        <a href="https://www.linkedin.com/in/jacob-douglas-414241205/" className='text-blue-900 mx-4 hover:text-blue-400'><Icon.Linkedin size={50}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}