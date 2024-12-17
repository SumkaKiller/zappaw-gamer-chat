import { Hash, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ChannelSidebar = () => {
  return (
    <div className="w-60 bg-black/90 flex flex-col border-r border-primary/10">
      <div className="p-4 border-b border-primary/10">
        <h2 className="text-lg font-bold text-primary tracking-wide">ZapPaw Official</h2>
      </div>
      <div className="flex-1 p-3 space-y-6 overflow-y-auto">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-muted-foreground px-2 tracking-wider">TEXT CHANNELS</h3>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => toast.success("Joined #general channel!")}
          >
            <Hash className="w-4 h-4" />
            general
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => toast.success("Joined #gaming channel!")}
          >
            <Hash className="w-4 h-4" />
            gaming
          </Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-muted-foreground px-2 tracking-wider">VOICE CHANNELS</h3>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => toast.info("Voice channels coming soon!")}
          >
            <Volume2 className="w-4 h-4" />
            General Voice
          </Button>
        </div>
      </div>
    </div>
  );
};