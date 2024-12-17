import { Mic, Headphones, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const UserSidebar = () => {
  return (
    <div className="w-60 bg-secondary/50 flex flex-col">
      <div className="flex-1 p-4">
        <h3 className="text-xs font-semibold text-muted-foreground mb-4">ONLINE — 1</h3>
        <div className="flex items-center gap-2 p-2 rounded hover:bg-primary/10 cursor-pointer">
          <img src="/starpaw-logo.png" alt="User" className="w-8 h-8 rounded-full" />
          <span className="text-primary">StarPaw</span>
        </div>
      </div>
      
      <div className="p-2 bg-muted/50">
        <div className="flex items-center gap-2 p-2">
          <img src="/starpaw-logo.png" alt="User" className="w-8 h-8 rounded-full" />
          <div className="flex-1">
            <div className="text-sm font-medium text-primary">You</div>
            <div className="text-xs text-muted-foreground">#1337</div>
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary"
            onClick={() => toast.info("Microphone settings coming soon!")}
          >
            <Mic className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary"
            onClick={() => toast.info("Audio settings coming soon!")}
          >
            <Headphones className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary"
            onClick={() => toast.info("User settings coming soon!")}
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};