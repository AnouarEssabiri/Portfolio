const About = () => (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-xl text-white">Web Development</h3>
          <div className="bg-gray-600 h-2 rounded-full">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        {/* Add more skill cards here */}
      </div>
    </div>
  );
export default About;