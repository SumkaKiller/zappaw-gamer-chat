import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ChatArea = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    
    toast.success("Message sent!");
    setMessage("");
  };

  return (
    <div className="flex-1 flex flex-col bg-black/95">
      <div className="h-14 border-b border-primary/10 flex items-center px-6">
        <span className="text-primary font-semibold tracking-wide"># general</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex items-start gap-4 hover:bg-primary/5 p-2 rounded-lg transition-colors">
          <img src="/starpaw-logo.png" alt="User" className="w-10 h-10 rounded-full border border-primary/20" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">StarPaw</span>
              <span className="text-xs text-muted-foreground">Today at 12:00</span>
            </div>
            <p className="text-foreground mt-1">Welcome to ZapPaw! 🎮✨</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-black/90">
        <div className="flex gap-3">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message #general"
            className="bg-secondary/50 border-primary/10 focus:border-primary/30 transition-colors"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            size="icon" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};