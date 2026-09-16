import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { retrieveAnswer, type KnowledgeEntry } from '../data/chatKnowledge';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  entry?: KnowledgeEntry;
  timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: "Hi! I'm the Salamander assistant. Ask me about our company, mission, projects, or how to get in touch.",
  timestamp: new Date(),
};

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate slight delay then RAG response
    setTimeout(() => {
      const entry = retrieveAnswer(text);
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: entry.content,
        entry,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 400);
  };

  const [hover, setHover] = useState(false);
  const transition = 'all 0.36s cubic-bezier(0.77, 0, 0.18, 1)';

  return (
    <>
      {/* DiscoveryCall-style toggle: default "Chat", hover reveals "Let's talk" + circle */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-[100] h-14 rounded-full border-0 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark cursor-pointer px-6 min-w-[140px]"
        style={{
          background: '#020617',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(253,224,71,0.15)',
        }}
      >
        <div
          style={{
            background: '#FDE047',
            borderRadius: '9999px',
            width: hover ? '100%' : '56px',
            height: hover ? '100%' : '56px',
            left: '50%',
            top: '50%',
            position: 'absolute',
            transform: hover ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.7)',
            transition,
            opacity: hover ? 1 : 0,
            pointerEvents: 'none',
          }}
        />
        <div
          className="relative flex items-center justify-center h-full w-full gap-0"
          style={{ zIndex: 3 }}
        >
          <span
            aria-hidden={hover}
            className="font-bold text-sm whitespace-nowrap text-primary"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: hover ? 'translate(-150%, -50%)' : 'translate(-50%, -50%)',
              opacity: hover ? 0 : 1,
              transition,
            }}
          >
            Chat
          </span>
          <div
            aria-hidden={!hover}
            className="flex items-center gap-2"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: hover ? 'translate(-50%, -50%)' : 'translate(80%, -50%)',
              opacity: hover ? 1 : 0,
              pointerEvents: hover ? 'auto' : 'none',
              transition,
            }}
          >
            <div
              className="w-10 h-10 rounded-full bg-slate-900 text-primary flex items-center justify-center font-black text-sm border-2 border-primary"
            >
              S
            </div>
            <span className="text-slate-900 font-bold text-sm whitespace-nowrap ml-1">
              Let&apos;s talk
            </span>
          </div>
        </div>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-[99] flex h-[min(calc(100vh-8rem),520px)] w-[min(100vw-3rem,380px)] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-background-dark shadow-2xl"
          role="dialog"
          aria-label="Chat"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-accent-dark/80 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-slate-900 font-bold">S</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Salamander Assistant</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">RAG • On this site</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    msg.role === 'user'
                      ? 'bg-primary text-slate-900'
                      : 'bg-slate-800/90 text-slate-200 border border-slate-700'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  {msg.entry?.link && (
                    msg.entry.link.url.startsWith('http') ? (
                      <a
                        href={msg.entry.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-bold text-primary hover:underline"
                      >
                        {msg.entry.link.label} →
                      </a>
                    ) : (
                      <Link
                        to={msg.entry.link.url}
                        className="mt-2 inline-block text-xs font-bold text-primary hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {msg.entry.link.label} →
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/90 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="border-t border-slate-800 p-3 bg-accent-dark/50">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Salamander..."
                className="flex-1 rounded-xl border border-slate-700 bg-background-dark px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="rounded-xl bg-primary px-4 py-2.5 text-slate-900 font-bold text-sm transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-slate-500 text-center">
              Answers are based on our site content. No data is stored.
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
