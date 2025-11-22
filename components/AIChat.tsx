import React, { useState, useRef, useEffect } from 'react';
import { BotIcon, MessageSquareIcon, SendIcon, UserIcon, XIcon } from './Icons';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Jagdish's AI assistant. Ask me anything about his skills or experience." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for the API
    const historyForApi = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(userMsg.text, historyForApi);

    const modelMsg: ChatMessage = { role: 'model', text: responseText };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent text-primary p-4 rounded-full shadow-2xl hover:bg-accent/80 transition-all hover:scale-110 animate-bounce-slow ring-2 ring-accent/50"
          aria-label="Chat with AI"
        >
          <MessageSquareIcon className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="glass rounded-2xl shadow-2xl w-[350px] sm:w-[380px] max-h-[600px] flex flex-col overflow-hidden animate-fade-in-down origin-bottom-right border border-slate-700/50">
          {/* Header */}
          <div className="bg-slate-900/80 p-4 flex justify-between items-center border-b border-slate-700/50 backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <div className="bg-accent/10 p-2 rounded-full ring-1 ring-accent/20">
                 <BotIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-slate-100 font-bold text-sm">Portfolio AI</h3>
                <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-white/10">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary/60 h-[400px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end max-w-[85%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                   <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mb-1 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-accent/20'}`}>
                      {msg.role === 'user' ? <UserIcon className="w-3 h-3 text-slate-300"/> : <BotIcon className="w-3 h-3 text-accent"/>}
                   </div>
                   <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                     msg.role === 'user' 
                        ? 'bg-accent text-primary rounded-tr-sm font-medium' 
                        : 'bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700/50'
                   }`}>
                      {msg.text}
                   </div>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                   <div className="flex items-center space-x-1 bg-slate-800/50 rounded-2xl rounded-tl-sm p-3 ml-8 border border-slate-700/30">
                       <div className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce"></div>
                       <div className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce delay-75"></div>
                       <div className="w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce delay-150"></div>
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-slate-900/80 border-t border-slate-700/50 flex gap-2 backdrop-blur-md">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my stack..."
              className="flex-1 bg-slate-800/50 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 border border-slate-700/50 placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-accent text-primary p-2.5 rounded-xl hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIChat;
