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
    <div className="flex-1 flex flex-col h-full bg-[#333333]">
      <div className="h-14 border-b border-[#444444] flex items-center px-6 bg-[#2A2A2A]">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <img 
              src={friend?.avatar || "/placeholder.svg"} 
              alt={friend?.name} 
              className="w-8 h-8 rounded-full border-2 border-[#444444] transition-all duration-300 group-hover:border-[#555555] group-hover:animate-pulse"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#2A2A2A] animate-pulse" />
          </div>
          <span className="text-gray-200 font-medium tracking-wide text-sm transition-colors duration-200 hover:text-gray-100 cursor-pointer">
            {friend?.name || "Чат"}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[#444444] scrollbar-track-transparent hover:scrollbar-thumb-[#555555] transition-colors">
        {/* Messages will appear here */}
      </div>
      
      <div className="relative p-6 bg-[#2A2A2A] border-t border-[#444444]">
        <div className="flex gap-2 w-full max-w-[calc(100%-2rem)] mx-auto">
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={handleTyping}
              placeholder={`Написать ${friend?.name || "..."}`}
              className="bg-[#222222] border-[#444444] focus:border-[#555555] transition-all placeholder:text-gray-500 text-gray-200 hover:bg-[#282828] focus:bg-[#2D2D2D] pr-24"
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
                className="w-8 h-8 hover:bg-[#333333] text-gray-400 hover:text-gray-200 transition-all"
                onClick={() => toast.info("Скоро будет доступно!")}
              >
                <Smile className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-[#333333] text-gray-400 hover:text-gray-200 transition-all"
                onClick={() => toast.info("Скоро будет доступно!")}
              >
                <Image className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-[#333333] text-gray-400 hover:text-gray-200 transition-all"
                onClick={() => toast.info("Скоро будет доступно!")}
              >
                <Paperclip className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Button 
            size="icon"
            className={`bg-[#222222] text-gray-200 hover:bg-[#1A1A1A] transition-all shadow-lg shadow-black/5 hover:shadow-black/10 ${
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