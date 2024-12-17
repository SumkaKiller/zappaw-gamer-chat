import { Hash, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChannelSidebar = () => {
  return (
    <div className="w-60 bg-secondary/50 flex flex-col">
      <div className="p-4 border-b border-primary/20">
        <h2 className="text-lg font-bold text-primary">ZapPaw Official</h2>
      </div>
      <div className="flex-1 p-2 space-y-2 overflow-y-auto">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-muted-foreground px-2">TEXT CHANNELS</h3>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-primary">
            <Hash className="w-4 h-4" />
            general
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-primary">
            <Hash className="w-4 h-4" />
            gaming
          </Button>
        </div>
        <div className="space-y-2 mt-4">
          <h3 className="text-xs font-semibold text-muted-foreground px-2">VOICE CHANNELS</h3>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-primary">
            <Volume2 className="w-4 h-4" />
            General Voice
          </Button>
        </div>
      </div>
    </div>
  );
};