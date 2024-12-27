const Contact = () => (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 w-full rounded-md border border-gray-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 w-full rounded-md border border-gray-300"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 w-full rounded-md border border-gray-300"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
export default Contact;