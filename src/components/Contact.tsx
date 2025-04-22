import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white px-4 pt-20 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get in Touch</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl">
        Have a question, idea, or opportunity? Just fill out the form below. I’ll get back to you as soon as I can!
      </p>

      <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScdC4me0hwZqqv5xFjT1-odj5VdzVuziE43Wm86RrV9ZnGjcw/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-[1000px]"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
