"use client";

function checkPostcode() {

  const postcode = (
    document.getElementById("postcode") as HTMLInputElement
  ).value.trim().toUpperCase();

  const message = document.getElementById("message");
  const form = document.getElementById("quoteForm");

  const validAreas = ["CV", "B", "LE"];

  const area = postcode.match(/^[A-Z]+/);

  if (!area) {

    if (message) {
      message.innerHTML =
        '<p class="text-red-600 font-bold mt-4">Please enter a valid postcode.</p>';
    }

    if (form) {
      form.classList.add("hidden");
    }

    return;
  }

  const prefix = area[0];

  if (validAreas.includes(prefix)) {

    if (message) {
      message.innerHTML =
        '<p class="text-green-600 font-bold mt-4">✅ Great news! We cover your area.</p>';
    }

    if (form) {
      form.classList.remove("hidden");
    }

    const hiddenPostcode =
      document.getElementById("hiddenPostcode") as HTMLInputElement;

    hiddenPostcode.value = postcode;

  } else {

    if (message) {
      message.innerHTML =
        '<p class="text-red-600 font-bold mt-4">❌ Sorry, we do not cover your area.</p>';
    }

    if (form) {
      form.classList.add("hidden");
    }
  }
}

export default function PostcodeChecker() {

  return (

    <section className="py-16 bg-gray-100">

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold mb-4 text-center">
          Check Service Availability
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Enter your postcode to see if we cover your area.
        </p>

        <input
          type="text"
          id="postcode"
          placeholder="Enter your postcode"
          className="w-full border border-gray-300 p-4 rounded-lg"
        />

        <button
          onClick={checkPostcode}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg mt-4 transition"
        >
          Check Availability
        </button>

        <div id="message"></div>

        <form
          id="quoteForm"
          action="https://formsubmit.co/YOUR-EMAIL@gmail.com"
          method="POST"
          className="hidden mt-6 space-y-4"
        >

          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-4 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border border-gray-300 p-4 rounded-lg"
          />

          <textarea
            name="details"
            placeholder="Describe your job..."
            rows={5}
            required
            className="w-full border border-gray-300 p-4 rounded-lg"
          ></textarea>

          <input
            type="hidden"
            name="postcode"
            id="hiddenPostcode"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition"
          >
            Get My Free Quote
          </button>

        </form>

      </div>

    </section>
  );
}