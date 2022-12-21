import '../styles/App.css'
import profilePicture from '../images/pictureofme.jpg'

const AboutMe = (props) => {
    return (
        <section id='about'>
            <h2 className="text-gray-200 text-center font-medium text-[3rem]">About Me</h2>
            <div className="py-6"></div>
            <div className="greetingSection text-gray-200 flex mx-5 border rounded-md">
                <div className="imageContainer w-1/2 p-10 flex justify-center items-center">
                    <div className="imgHolder border-2 rounded-[50%] h-96 w-96">
                        <img className="w-full h-full object-cover rounded-[50%]" src={profilePicture} alt="Picture of Jacob Douglas" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center p-6 text-xl">
                    <p>One day as I was playing my favorite video game, Minecraft, I ran into a mod that changed my life forever. That mod was known as ComputerCraft. The idea of the mod was that there were robots that you controlled in the game using the programming language, Lua. I wanted to control these robots so bad that I had decided to challenge myself as a 7th grader to learn the basics of programming. After many trails and tribulations later, I was able to fully understand the basics of programming. From then on I had decided I was going to continue to grow my knowlege of coding.</p>
                    <div className="py-2"></div>
                    <p>Once I had heard in highschool that there was a beginning coding class, I did everything I could to register for that class. It would be in Highschool where I then learned to expand my coding journey by taking other classes that had languages such as Java and Python.</p>
                    <div className="py-2"></div>
                    <p>Highschool was the real steping stone for me to understand that this was what I wanted to do for the rest of my life...</p>
                    <div className="py-2"></div>
                    <p>Since then, Ive been attending school at Missouri University of Science and Technology and have been learning a buch more about Computer Science in and out of classes.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe