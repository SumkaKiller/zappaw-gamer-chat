import { Home, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ServerSidebar = () => {
  const handleAddServer = () => {
    toast.info("Server creation coming soon!");
  };

  return (
    <div className="w-20 bg-black border-r border-primary/10 flex flex-col items-center py-4 gap-4">
      <Button 
        variant="ghost" 
        className="rounded-full w-12 h-12 bg-primary/10 hover:bg-primary/20 transition-all duration-200 group"
        onClick={() => toast.success("Home selected!")}
      >
        <Home className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      </Button>
      <div className="w-10 h-px bg-primary/10" />
      <Button 
        variant="ghost" 
        className="rounded-full w-12 h-12 bg-black hover:bg-primary/10 transition-all duration-200 p-0 overflow-hidden group"
        onClick={() => toast.success("ZapPaw server selected!")}
      >
        <img 
          src="/starpaw-logo.png" 
          alt="Server" 
          className="w-full h-full rounded-full group-hover:scale-110 transition-transform" 
        />
      </Button>
      <Button 
        variant="ghost" 
        className="rounded-full w-12 h-12 bg-black hover:bg-primary/10 transition-all duration-200 group"
        onClick={handleAddServer}
      >
        <Plus className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};