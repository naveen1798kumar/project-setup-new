import React, { useState } from "react";
import axios from "axios";
import { BsChatDots, BsX } from "react-icons/bs";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to state
    setMessages([...messages, { text: input, type: "user" }]);
    setInput("");

    // Send request to OpenAI API
    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      }, {
        headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` },
      });

      // Add bot response
      setMessages((prev) => [...prev, { text: response.data.choices[0].message.content, type: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        {isOpen ? <BsX size={24} /> : <BsChatDots size={24} />}
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg p-4 absolute bottom-14 right-0 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Chat with AI</h3>
          <div className="h-48 overflow-y-auto p-2 bg-gray-100 rounded-md">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 ${msg.type === "user" ? "bg-blue-500 text-white text-right" : "bg-gray-200 text-black text-left"} rounded-md`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-md"
              placeholder="Ask me anything..."
            />
            <button onClick={handleSendMessage} className="bg-green-600 text-white px-3 py-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;


/*
import React, { useState } from "react";
import { BsChatDots, BsX } from "react-icons/bs"; // Chat & Close Icons

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    { question: "What courses do you offer?", answer: "We offer Full-Stack Development, Java, Python, and Diploma Courses." },
    { question: "Do you provide certificates?", answer: "Yes, all our courses come with a valid certification." },
    { question: "What is the course duration?", answer: "Each course varies between 4-16 weeks based on the level." },
    { question: "How do I enroll?", answer: "You can enroll by visiting our Courses page and selecting a course." }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      //  Chat Button 
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        {isOpen ? <BsX size={24} /> : <BsChatDots size={24} />}
      </button>

      //  Chatbox 
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg p-4 absolute bottom-14 right-0">
          <h3 className="text-lg font-semibold mb-2">Ask a Question</h3>
          <ul className="space-y-2">
            {faqs.map((faq, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedQuestion(faq)}
                  className="w-full text-left bg-gray-100 p-2 rounded-md hover:bg-gray-200"
                >
                  {faq.question}
                </button>
              </li>
            ))}
          </ul>

          {selectedQuestion && (
            <div className="mt-4 p-3 bg-gray-100 rounded-md">
              <p className="font-semibold">{selectedQuestion.question}</p>
              <p className="text-gray-600">{selectedQuestion.answer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;


*/ 