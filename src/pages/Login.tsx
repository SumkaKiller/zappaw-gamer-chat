import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    navigate("/chat");
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/starpaw-bg.png')] opacity-10 bg-cover bg-center" />
      <Card className="w-full max-w-md p-8 bg-card/80 backdrop-blur-lg border border-primary/20">
        <div className="flex flex-col items-center mb-8">
          <img src="/starpaw-logo.png" alt="StarPaw" className="w-24 h-24 animate-glow" />
          <h1 className="text-3xl font-bold text-primary mt-4">ZapPaw</h1>
          <p className="text-muted-foreground mt-2">Your Gaming Community Awaits</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/50 border-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-secondary/50 border-primary/20"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Enter the Game
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <a href="#" className="text-primary hover:underline">Forgot password?</a>
          <span className="text-muted-foreground mx-2">•</span>
          <a href="#" className="text-primary hover:underline">Create account</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;