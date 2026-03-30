import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'idle' | 'success' | 'error' }>({ text: '', type: 'idle' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'renato.motikawa@pucpr.edu.br' && password === '123456') {
      setMessage({ text: 'Acessado com sucesso!', type: 'success' });
    } else {
      setMessage({ text: 'Usuário ou senha incorretos!', type: 'error' });
    }
  };

  return (
    <div className="min-h-svh bg-background flex items-center justify-center p-6 antialiased">
      <div className="w-full max-w-[350px] space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Insira suas credenciais para acessar a plataforma
          </p>
        </header>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground ml-1">
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nome@exemplo.com"
              className="w-full h-10 px-3 rounded-md border border-border bg-card text-sm
                         placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2
                         focus:ring-primary/5 focus:border-primary transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground ml-1">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-10 px-3 rounded-md border border-border bg-card text-sm
                         placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2
                         focus:ring-primary/5 focus:border-primary transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 mt-2 bg-primary text-primary-foreground text-sm font-medium rounded-md
                       hover:opacity-90 active:scale-[0.98] transition-all duration-150
                       shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
          >
            Acessar
          </button>
        </form>

        <div className="min-h-[20px] flex justify-center">
          <AnimatePresence mode="wait">
            {message.text && (
              <motion.span
                key={message.text}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={`text-sm font-medium ${
                  message.type === 'success' ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {message.text}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Index;
