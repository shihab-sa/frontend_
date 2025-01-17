export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Contact</h1>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 w-full mb-4"
        ></textarea>
        <button type="submit" className="bg-green-700 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}
