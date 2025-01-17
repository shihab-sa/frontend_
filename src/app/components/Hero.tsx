export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
    >
      <div className="flex items-center justify-center h-full text-white bg-black bg-opacity-50">
        <h1 className="text-6xl font-bold">Welcome to Jade ReForestry</h1>
      </div>
    </section>
  );
}
