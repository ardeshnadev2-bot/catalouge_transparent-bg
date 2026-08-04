'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const quickReplies = [
  { text: 'View Product Range', action: 'products' },
  { text: 'Request a Quote', action: 'contact' },
  { text: 'Export Enquiry', action: 'contact' },
  { text: 'Contact Information', action: 'contact' },
  { text: 'WhatsApp Support', action: 'whatsapp' },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello 👋 Welcome to **SV Closures**. How can we help you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the message container
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleToggle = () => setIsOpen(!isOpen);

  const triggerScroll = (targetId: string) => {
    window.dispatchEvent(new CustomEvent('scroll-to-section', { detail: { targetId } }));
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  const getSimulatedResponse = (text: string): { reply: string; action?: string } => {
    const cleanText = text.toLowerCase().trim();

    if (cleanText.includes('product') || cleanText.includes('range') || cleanText.includes('caps') || cleanText.includes('closures') || cleanText.includes('spout') || cleanText.includes('flip top')) {
      return {
        reply: 'I have scrolled you to our **Product Ranges** section. We manufacture high-quality flip top caps, spout caps, disc top caps, and customizable closures for edible oil, cosmetics, and industrial packaging.',
        action: 'products'
      };
    }
    if (cleanText.includes('quote') || cleanText.includes('price') || cleanText.includes('cost') || cleanText.includes('inquiry') || cleanText.includes('enquiry')) {
      return {
        reply: 'To request a customized quote, I have scrolled you to our **Contact Section**. Please fill out the inquiry form there, or email our sales team at **sales@svclosures.com**.',
        action: 'contact'
      };
    }
    if (cleanText.includes('export') || cleanText.includes('international') || cleanText.includes('ship') || cleanText.includes('world') || cleanText.includes('global')) {
      return {
        reply: 'We export our products to global markets. For export-specific inquiries, please contact our export desk at **export@svclosures.com** or submit an enquiry using the form in our **Contact Section**.',
        action: 'contact'
      };
    }
    if (cleanText.includes('sustainab') || cleanText.includes('eco') || cleanText.includes('green') || cleanText.includes('recycle') || cleanText.includes('environment')) {
      return {
        reply: 'SV Closures is committed to eco-friendly production. We use 100% recyclable materials and optimized workflows. I have scrolled you to our **Sustainability Section** to learn more!',
        action: 'sustainability'
      };
    }
    if (cleanText.includes('infrastructure') || cleanText.includes('factory') || cleanText.includes('machine') || cleanText.includes('facility') || cleanText.includes('mould') || cleanText.includes('plant')) {
      return {
        reply: 'Our state-of-the-art facility in Gujarat, India is equipped with high-speed automated moulding systems. I have scrolled you to our **Infrastructure Section** for a detailed overview.',
        action: 'infrastructure'
      };
    }
    if (cleanText.includes('about') || cleanText.includes('company') || cleanText.includes('history') || cleanText.includes('who')) {
      return {
        reply: 'Founded in 1998, SV Closures Private Limited is a leading manufacturer of premium dispensing caps and closures. Let me scroll you to our **About Us Section**.',
        action: 'about'
      };
    }
    if (cleanText.includes('map') || cleanText.includes('location') || cleanText.includes('address') || cleanText.includes('where') || cleanText.includes('office')) {
      return {
        reply: 'Our corporate office and manufacturing plant are located in Gujarat, India. I have scrolled you to the map in our **Contact Section** for the exact address.',
        action: 'contact'
      };
    }
    if (cleanText.includes('gallery') || cleanText.includes('photo') || cleanText.includes('image') || cleanText.includes('video')) {
      return {
        reply: 'Check out our plant photos, product galleries, and media in our **Gallery Section**.',
        action: 'gallery'
      };
    }
    if (cleanText.includes('contact') || cleanText.includes('phone') || cleanText.includes('call') || cleanText.includes('email') || cleanText.includes('number')) {
      return {
        reply: 'You can contact us via:\n📞 **Phone**: +91 99092 16358\n📧 **Email**: info@svclosures.com\nI have scrolled you to our contact details below.',
        action: 'contact'
      };
    }
    if (cleanText.includes('hi') || cleanText.includes('hello') || cleanText.includes('hey') || cleanText.includes('greetings')) {
      return {
        reply: 'Hello! 👋 How can I help you today? Feel free to ask about our products, request quotes, or enquire about export details.'
      };
    }
    if (cleanText.includes('thanks') || cleanText.includes('thank you') || cleanText.includes('thank')) {
      return {
        reply: "You're very welcome! If you need anything else, feel free to ask or connect with us directly on WhatsApp."
      };
    }

    return {
      reply: "Thank you for your message! Our team typically replies instantly on WhatsApp. Would you like to chat directly on [WhatsApp](https://wa.me/919909216358) or drop us an email at **info@svclosures.com**?"
    };
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsgId = `user-${Date.now()}`;
    setMessages(prev => [...prev, {
      id: userMsgId,
      sender: 'user',
      text: text,
      timestamp: new Date()
    }]);

    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getSimulatedResponse(text);

      // Add bot message
      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse.reply,
        timestamp: new Date()
      }]);

      // Handle side effects (scrolling/navigation)
      if (botResponse.action) {
        triggerScroll(botResponse.action);
      }
    }, 1000);
  };

  const handleQuickReplyClick = (replyText: string, action: string) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: replyText,
      timestamp: new Date()
    }]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      let botReply = '';
      if (action === 'whatsapp') {
        botReply = "Opening WhatsApp support in a new tab... You will be redirected shortly.";
        window.open("https://wa.me/919909216358", "_blank");
      } else {
        const actionNames: Record<string, string> = {
          products: 'Product Ranges',
          contact: 'Contact Section',
        };
        botReply = `I have scrolled you to our **${actionNames[action] || action}**. Please take a look, or ask me any specific questions!`;
        triggerScroll(action);
      }

      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: new Date()
      }]);
    }, 850);
  };

  // Helper to format text with bold formatting (**)
  const formatMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const [, linkText, url] = linkMatch;
        return (
          <a
            key={index}
            href={url}
            target={url.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 underline font-medium"
          >
            {linkText}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            ref={chatWindowRef}
            className="w-[340px] sm:w-[380px] h-[500px] bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-slate-950 p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full border border-emerald-500/50 flex items-center justify-center bg-slate-900">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold tracking-wide">SV Closures Assistant</h4>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[11px] text-slate-400">Online — typically replies instantly</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleToggle}
                className="text-slate-400 hover:text-white transition-colors duration-200 p-1.5 rounded-lg hover:bg-slate-800"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/40 scrollbar-thin">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-emerald-600 text-white rounded-tr-none' 
                        : 'bg-slate-850 text-slate-200 rounded-tl-none border border-slate-800/80'
                    }`}
                  >
                    <p className="whitespace-pre-line">{formatMessageText(msg.text)}</p>
                    <span className="block text-[9px] text-slate-400/80 mt-1.5 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-850 text-slate-400 rounded-2xl rounded-tl-none px-4 py-3 text-sm border border-slate-800/80 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* Quick Reply Options */}
              {!isTyping && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReplyClick(reply.text, reply.action)}
                      className="border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:scale-105 active:scale-95 transition-all text-xs font-medium py-1.5 px-3 rounded-full"
                    >
                      {reply.text}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
                setInputVal('');
              }}
              className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2"
            >
              <div className="flex-1 relative rounded-xl border border-emerald-500/80 bg-slate-900 overflow-hidden focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all duration-200">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type your question..."
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center hover:bg-emerald-650 active:scale-95 disabled:bg-slate-800 disabled:text-slate-600 transition-all duration-200"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Footer */}
            <div className="bg-slate-950/95 py-3 px-4 border-t border-slate-900 flex flex-col items-center justify-center space-y-3">
              <a
                href="https://wa.me/919909216358"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 text-xs bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 font-medium py-2 px-4 rounded-xl border border-emerald-500/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                <span>Chat directly on WhatsApp</span>
              </a>
              <div className="flex items-center space-x-3 w-full justify-center pt-1 border-t border-slate-900/60">
                <span className="text-[10px] text-slate-500 font-medium mr-1">Follow us:</span>
                <a
                  href="https://www.instagram.com/sv_closures_pvt_ltd?igsh=Y21ubzB6ajBoYjFq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-500 hover:bg-slate-850 hover:border-pink-500/30 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/sv-closures-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-500 hover:bg-slate-850 hover:border-blue-500/30 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1cmyxXExss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-600 hover:bg-slate-850 hover:border-blue-600/30 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Row containing Chatbot Toggle Button and Social Buttons */}
      <div className="flex items-center space-x-3 mt-3">
        {/* Floating Toggle Button */}
        <motion.button
          onClick={handleToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-slate-800 text-white border border-slate-700 shadow-slate-900/50' 
              : 'bg-emerald-600 text-white shadow-emerald-600/30'
          }`}
          aria-label={isOpen ? "Close Assistant" : "Open Assistant"}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-emerald-650 animate-pulse" />
            </div>
          )}
        </motion.button>

        {/* Floating Social Media Buttons */}
        {isOpen && (
          <div className="flex items-center space-x-2 animate-fade-in">
            <a
              href="https://www.instagram.com/sv_closures_pvt_ltd?igsh=Y21ubzB6ajBoYjFq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-950 border border-slate-850 hover:border-pink-500/30 text-slate-400 hover:text-pink-500 shadow-lg flex items-center justify-center transition-all duration-350 hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/sv-closures-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-950 border border-slate-850 hover:border-blue-500/30 text-slate-400 hover:text-blue-500 shadow-lg flex items-center justify-center transition-all duration-350 hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1cmyxXExss/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-950 border border-slate-850 hover:border-blue-600/30 text-slate-400 hover:text-blue-600 shadow-lg flex items-center justify-center transition-all duration-350 hover:scale-110 active:scale-95"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
