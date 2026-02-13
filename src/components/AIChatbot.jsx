import { useState } from "react"
import "./AIChatbot.css"

const AI_RESPONSES = {
  default: "I'm the JaxCard AI Assistant! I can help you with questions about our credit cards, memberships, features, and applications. How can I assist you today?",
  card: "JaxCard offers several credit card options: Freedom Unlimited, Freedom Flex, Student Card, and Silver/Gold/Platinum Preferred cards. Each has unique benefits like cashback, travel rewards, and different annual fees. Would you like details on a specific card?",
  membership: "We have three membership tiers: Silver (plastic card, local banks), Gold (aluminum card, 50-mile radius), and Platinum (metal card, nationwide access). Higher tiers include all perks from lower tiers!",
  features: "JaxCard features include: instant balance reflection, full transaction history (never deleted), multiple bank locations, secure transactions with fraud prevention, Apple Watch integration, Tap to Pay, and Bitcoin investing. Anything specific you'd like to know?",
  apply: "To apply for a JaxCard, click the 'Apply Now' button in the navigation. You'll need to provide your information. Applications are typically reviewed within 24-48 hours. Need help with the process?",
  contact: "You can reach us via the Contact Us link in the footer, or sign up for our newsletter to get updates. Our support team is available to help!",
  hello: "Hello! Welcome to JaxCard. I'm here to help you learn about our credit cards and services. What would you like to know?",
  thanks: "You're welcome! Is there anything else I can help you with?",
}

function getAIResponse(input) {
  const lower = input.toLowerCase().trim()
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) return AI_RESPONSES.hello
  if (lower.includes("thank") || lower.includes("thanks")) return AI_RESPONSES.thanks
  if (lower.includes("card") || lower.includes("credit")) return AI_RESPONSES.card
  if (lower.includes("membership") || lower.includes("silver") || lower.includes("gold") || lower.includes("platinum")) return AI_RESPONSES.membership
  if (lower.includes("feature") || lower.includes("benefit") || lower.includes("transaction")) return AI_RESPONSES.features
  if (lower.includes("apply") || lower.includes("application")) return AI_RESPONSES.apply
  if (lower.includes("contact") || lower.includes("support") || lower.includes("help")) return AI_RESPONSES.contact
  return "I understand you're asking about: \"" + input + "\". For more specific help, try asking about our cards, memberships, features, or how to apply. I'm here to help!"
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "ai", text: AI_RESPONSES.default }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = { role: "user", text: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    
    setTimeout(() => {
      const aiText = getAIResponse(input)
      setMessages(prev => [...prev, { role: "ai", text: aiText }])
    }, 600)
  }

  return (
    <>
      <button 
        className={`aiChatButton ${isOpen ? "aiChatButtonOpen" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
      >
        <i className="fa-solid fa-robot"></i>
        <span>AI Assistant</span>
      </button>

      {isOpen && (
        <div className="aiChatWindow">
          <div className="aiChatHeader">
            <div className="aiChatHeaderTitle">
              <i className="fa-solid fa-robot"></i>
              <span>JaxCard AI Assistant</span>
            </div>
            <button className="aiChatClose" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="aiChatMessages">
            {messages.map((msg, i) => (
              <div key={i} className={`aiMessage aiMessage${msg.role}`}>
                {msg.role === "ai" && <i className="fa-solid fa-robot aiMessageIcon"></i>}
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="aiChatInput">
            <input
              type="text"
              placeholder="Ask about JaxCard..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
