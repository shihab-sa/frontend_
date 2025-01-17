export default function ContactSection() {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="grid grid-cols-1 gap-4 max-w-md">
        <input type="text" placeholder="Name" className="p-2 border rounded" />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Message"
          className="p-2 border rounded"
        ></textarea>
        <button type="submit" className="p-2 bg-green-700 text-white rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
