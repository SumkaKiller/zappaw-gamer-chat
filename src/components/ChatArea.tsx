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
    <div className="flex-1 flex flex-col bg-secondary/30">
      <div className="h-14 border-b border-primary/20 flex items-center px-4">
        <span className="text-primary font-semibold"># general</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start gap-4">
          <img src="/starpaw-logo.png" alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">StarPaw</span>
              <span className="text-xs text-muted-foreground">Today at 12:00</span>
            </div>
            <p className="text-foreground">Welcome to ZapPaw! 🎮✨</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message #general"
            className="bg-muted border-primary/20"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            size="icon" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};