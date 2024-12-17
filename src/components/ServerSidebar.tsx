import { Home, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServerSidebar = () => {
  return (
    <div className="w-20 bg-secondary border-r border-primary/20 flex flex-col items-center py-4 gap-4">
      <Button variant="ghost" className="rounded-full w-12 h-12 bg-primary/10 hover:bg-primary/20">
        <Home className="w-6 h-6 text-primary" />
      </Button>
      <div className="w-full h-px bg-primary/20" />
      <Button variant="ghost" className="rounded-full w-12 h-12 bg-muted hover:bg-primary/20">
        <img src="/starpaw-logo.png" alt="Server" className="w-full h-full rounded-full" />
      </Button>
      <Button variant="ghost" className="rounded-full w-12 h-12 bg-muted hover:bg-primary/20">
        <Plus className="w-6 h-6 text-primary" />
      </Button>
    </div>
  );
};