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
    <div className="flex-1 flex flex-col bg-black/98">
      <div className="h-14 border-b border-primary/5 flex items-center px-6 backdrop-blur-sm bg-black/40">
        <span className="text-primary font-medium tracking-wide text-sm"># general</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex items-start gap-4 hover:bg-primary/5 p-2 rounded-lg transition-all duration-200 group">
          <img src="/starpaw-logo.png" alt="User" className="w-10 h-10 rounded-full border border-primary/10 group-hover:border-primary/20 transition-all" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/90 group-hover:text-primary transition-colors">StarPaw</span>
              <span className="text-xs text-muted-foreground">Today at 12:00</span>
            </div>
            <p className="text-foreground/90 mt-1">Welcome to ZapPaw! 🎮✨</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-black/90 border-t border-primary/5">
        <div className="flex gap-2 max-w-5xl mx-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message #general"
            className="bg-secondary/30 border-primary/5 focus:border-primary/20 transition-all placeholder:text-muted-foreground/50"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            size="icon" 
            className="bg-primary/10 text-primary hover:bg-primary/20 transition-all shadow-lg shadow-primary/5"
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};