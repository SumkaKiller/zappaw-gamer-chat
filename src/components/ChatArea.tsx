import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ChatArea = ({ friend }) => {
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
    <div className="flex-1 flex flex-col h-full bg-black/98">
      <div className="h-14 border-b border-primary/5 flex items-center px-6 backdrop-blur-sm bg-black/40">
        <div className="flex items-center gap-2">
          <img 
            src={friend?.avatar || "/placeholder.svg"} 
            alt={friend?.name} 
            className="w-8 h-8 rounded-full border border-primary/10"
          />
          <span className="text-primary font-medium tracking-wide text-sm">
            {friend?.name || "Chat"}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Messages will appear here */}
      </div>
      
      <div className="fixed bottom-0 left-64 right-64 p-6 bg-black/90 border-t border-primary/5">
        <div className="flex gap-2 max-w-5xl mx-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message ${friend?.name || "..."}`}
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