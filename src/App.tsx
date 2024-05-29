import "./App.css";
import TestimonialGrid from "./components/TestimonialGrid";

function App() {
  return (
    <section className="flex flex-col p-12 px-3 md:py-16 md:px-4 xl:p-24">
      <div className="text-center mb-12 md:mb-16 px-8 xl:px-20">
        <p className="text-xl font-semibold text-indigo-700 mb-3">
          Testimonials
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-5">
          Countless users, countless smiles
        </h1>
        <h2 className="text-lg md:text-xl text-neutral-600">
          Explore our community's journey and discover why satisfaction defines
          us.
        </h2>
      </div>
      <TestimonialGrid />
    </section>
  );
}

export default App;
