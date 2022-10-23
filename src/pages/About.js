import '../styles/App.css'
import profilePicture from '../images/pictureofme.jpg'

const AboutMe = (props) => {
    return (
        <section>
            <h2 className="text-gray-200 text-center font-medium text-[3rem]">About Me</h2>
            <div className="py-6"></div>
            <div className="greetingSection text-gray-200 flex mx-5 border rounded-md">
                <div className="imageContainer w-1/2 p-10 flex justify-center items-center">
                    <div className="imgHolder border-2 rounded-[50%] h-3/4 w-3/4">
                        <img className="w-full h-full object-cover rounded-[50%]" src={profilePicture} alt="Picture of Jacob Douglas" />
                    </div>
                </div>
                <div className="w-1/2 flex items-center px-6 text-xl">
                    <p>Started programming when I was in 7th grade. It all started when I wanted to make my own mods for my favorite game at the time, Minecraft. Ever since then, its just been an exponential curve of always wanting to learn more. It was then Java, Python and even Lua by the time I had reached High school. Since then, I have been focusing on more complex things that interest me such as game development, smart home technology, and front end and back end web development. I hope after my current semester, when I got done studying computer security and networking, I hope to move on to even more complex things such as machine learning algorithms!</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe