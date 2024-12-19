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
    <div className="flex-1 flex flex-col h-full bg-gradient-to-br from-black/98 to-black/95">
      <div className="h-14 border-b border-primary/10 flex items-center px-6 backdrop-blur-sm bg-black/40 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <img 
              src={friend?.avatar || "/placeholder.svg"} 
              alt={friend?.name} 
              className="w-8 h-8 rounded-full border border-primary/20 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-black animate-pulse" />
          </div>
          <span className="text-primary font-medium tracking-wide text-sm transition-colors duration-200 hover:text-primary/90">
            {friend?.name || "Chat"}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent hover:scrollbar-thumb-primary/20 transition-colors">
        {/* Messages will appear here */}
      </div>
      
      <div className="fixed bottom-0 left-[240px] right-60 p-6 bg-gradient-to-r from-black/95 to-black/90 border-t border-primary/10 backdrop-blur-sm animate-fade-in">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message ${friend?.name || "..."}`}
            className="bg-black/50 border-primary/10 focus:border-primary/20 transition-all placeholder:text-muted-foreground/50 text-primary/90 hover:bg-black/60 focus:bg-black/70"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            size="icon" 
            className="bg-primary/10 text-primary hover:bg-primary/20 transition-all shadow-lg shadow-primary/5 hover:shadow-primary/10 hover:scale-105 active:scale-95"
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};