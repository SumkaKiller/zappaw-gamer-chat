import { Home, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ServerSidebar = () => {
  const handleAddServer = () => {
    toast.info("Server creation coming soon!");
  };

  return (
    <div className="w-[72px] bg-black border-r border-primary/5 flex flex-col items-center py-4 gap-4">
      <Button 
        variant="ghost" 
        className="rounded-full w-12 h-12 bg-primary/5 hover:bg-primary/10 transition-all group p-0"
        onClick={() => toast.success("Home selected!")}
      >
        <Home className="w-5 h-5 text-primary/90 group-hover:text-primary group-hover:scale-105 transition-all" />
      </Button>
      <div className="w-8 h-px bg-primary/5" />
      <Button 
        variant="ghost" 
        className="rounded-full w-12 h-12 bg-black hover:bg-primary/5 transition-all p-0 overflow-hidden group"
        onClick={() => toast.success("ZapPaw server selected!")}
      >
        <img 
          src="/starpaw-logo.png" 
          alt="Server" 
          className="w-full h-full rounded-full group-hover:scale-105 transition-all duration-300" 
        />
      </Button>
      <Button 
        variant="ghost" 
        className="rounded-full w-12 h-12 bg-black hover:bg-primary/5 transition-all group p-0"
        onClick={handleAddServer}
      >
        <Plus className="w-5 h-5 text-primary/90 group-hover:text-primary group-hover:scale-105 transition-all" />
      </Button>
    </div>
  );
};