import { Mic, Headphones, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const UserSidebar = () => {
  return (
    <div className="w-60 bg-black/95 flex flex-col border-l border-primary/5">
      <div className="flex-1 p-4">
        <h3 className="text-xs font-medium text-muted-foreground/70 mb-4 tracking-wider">ONLINE — 1</h3>
        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 cursor-pointer transition-all group">
          <img src="/starpaw-logo.png" alt="User" className="w-8 h-8 rounded-full border border-primary/10 group-hover:border-primary/20 transition-all" />
          <span className="text-primary/90 group-hover:text-primary transition-colors text-sm">StarPaw</span>
        </div>
      </div>
      
      <div className="p-3 bg-black/98 border-t border-primary/5">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40">
          <img src="/starpaw-logo.png" alt="User" className="w-8 h-8 rounded-full border border-primary/10" />
          <div className="flex-1">
            <div className="text-sm font-medium text-primary/90">You</div>
            <div className="text-xs text-muted-foreground/70">#1337</div>
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            onClick={() => toast.info("Microphone settings coming soon!")}
          >
            <Mic className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            onClick={() => toast.info("Audio settings coming soon!")}
          >
            <Headphones className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            onClick={() => toast.info("User settings coming soon!")}
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};