import { useState } from "react";
import { Send, Smile, Image, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ChatArea = ({ friend }) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error("Пожалуйста, введите сообщение");
      return;
    }
    
    toast.success("Сообщение отправлено!");
    setMessage("");
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-br from-secondary/50 to-secondary">
      <div className="h-14 border-b border-primary/20 flex items-center px-6 backdrop-blur-sm bg-secondary/40 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <img 
              src={friend?.avatar || "/placeholder.svg"} 
              alt={friend?.name} 
              className="w-8 h-8 rounded-full border-2 border-primary/30 transition-all duration-300 group-hover:border-primary group-hover:animate-pulse"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </div>
          <span className="text-foreground font-medium tracking-wide text-sm transition-colors duration-200 hover:text-primary cursor-pointer">
            {friend?.name || "Чат"}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 transition-colors">
        {/* Messages will appear here */}
      </div>
      
      <div className="fixed bottom-0 inset-x-[240px] p-6 bg-gradient-to-r from-secondary/95 to-secondary/90 border-t border-primary/20 backdrop-blur-sm animate-fade-in">
        <div className="flex gap-2 w-full max-w-[calc(100vw-480px)] mx-auto">
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={handleTyping}
              placeholder={`Написать ${friend?.name || "..."}`}
              className="bg-white/50 border-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/50 text-foreground hover:bg-white/70 focus:bg-white/90 pr-24"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-primary/20 text-muted-foreground/70 hover:text-primary transition-all"
                onClick={() => toast.info("Скоро будет доступно!")}
              >
                <Smile className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-primary/20 text-muted-foreground/70 hover:text-primary transition-all"
                onClick={() => toast.info("Скоро будет доступно!")}
              >
                <Image className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-primary/20 text-muted-foreground/70 hover:text-primary transition-all"
                onClick={() => toast.info("Скоро будет доступно!")}
              >
                <Paperclip className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Button 
            size="icon"
            className={`bg-primary/20 text-primary hover:bg-primary/30 transition-all shadow-lg shadow-primary/5 hover:shadow-primary/10 ${
              isTyping ? 'animate-pulse' : ''
            }`}
            onClick={handleSendMessage}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};