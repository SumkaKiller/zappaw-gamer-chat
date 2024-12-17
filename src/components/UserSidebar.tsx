import { Mic, Headphones, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const UserSidebar = () => {
  return (
    <div className="w-60 bg-black/90 flex flex-col border-l border-primary/10">
      <div className="flex-1 p-4">
        <h3 className="text-xs font-semibold text-muted-foreground mb-4 tracking-wider">ONLINE — 1</h3>
        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 cursor-pointer transition-all duration-200">
          <img src="/starpaw-logo.png" alt="User" className="w-8 h-8 rounded-full border border-primary/20" />
          <span className="text-primary">StarPaw</span>
        </div>
      </div>
      
      <div className="p-3 bg-black">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
          <img src="/starpaw-logo.png" alt="User" className="w-8 h-8 rounded-full border border-primary/20" />
          <div className="flex-1">
            <div className="text-sm font-medium text-primary">You</div>
            <div className="text-xs text-muted-foreground">#1337</div>
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => toast.info("Microphone settings coming soon!")}
          >
            <Mic className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => toast.info("Audio settings coming soon!")}
          >
            <Headphones className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => toast.info("User settings coming soon!")}
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};