import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, User, Settings, Headphones, Mic } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ChatArea } from "@/components/ChatArea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Friend {
  id: number;
  name: string;
  status: string;
  avatar?: string;
}

const Friends = () => {
  const [friends] = useState<Friend[]>([
    {
      id: 1,
      name: "StarPaw",
      status: "Online",
      avatar: "/starpaw-logo.png"
    },
    {
      id: 2,
      name: "LunarPaw",
      status: "Offline",
      avatar: "/placeholder.svg"
    }
  ]);
  const [friendUsername, setFriendUsername] = useState("");
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleAddFriend = () => {
    if (!friendUsername.trim()) {
      toast.error("Please enter a username");
      return;
    }
    
    toast.success(`Friend request sent to ${friendUsername}!`);
    setFriendUsername("");
    setIsAddFriendOpen(false);
  };

  const handleUserClick = (friend: Friend) => {
    setSelectedFriend(friend);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <div className="w-64 bg-black/95 flex flex-col border-r border-primary/5">
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-primary">Friends</h2>
          <Dialog open={isAddFriendOpen} onOpenChange={setIsAddFriendOpen}>
            <DialogTrigger asChild>
              <Button 
                size="sm"
                className="gap-2 animate-glow"
              >
                <UserPlus className="w-4 h-4" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add Friend</DialogTitle>
                <DialogDescription>
                  Enter your friend's username to send them a friend request.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input
                    value={friendUsername}
                    onChange={(e) => setFriendUsername(e.target.value)}
                    placeholder="Enter username..."
                    className="bg-secondary/30 border-primary/5 focus:border-primary/20 transition-all"
                  />
                </div>
                <Button onClick={handleAddFriend} className="px-3">
                  Send Request
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <Separator className="bg-primary/5" />
        
        {/* Friends List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => handleUserClick(friend)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 cursor-pointer transition-all group"
            >
              <Avatar className="w-8 h-8 border border-primary/10 group-hover:border-primary/20 transition-all">
                <AvatarImage src={friend.avatar} />
                <AvatarFallback>
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary/90 truncate">{friend.name}</p>
                <p className="text-xs text-muted-foreground truncate">{friend.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* User Info */}
        <div className="p-3 bg-black/98 border-t border-primary/5">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-black/40">
            <Avatar className="w-8 h-8 border border-primary/10">
              <AvatarImage src="/starpaw-logo.png" />
              <AvatarFallback>
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-primary/90 truncate">You</p>
              <p className="text-xs text-muted-foreground truncate">#1337</p>
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

      {/* Main Content */}
      <div className="flex-1">
        {selectedFriend ? (
          <ChatArea friend={selectedFriend} />
        ) : (
          <div className="flex items-center justify-center h-full p-6 bg-black/98">
            <div className="text-center space-y-4">
              <div className="inline-block p-6 rounded-full bg-primary/5 animate-pulse">
                <User className="w-12 h-12 text-primary/40" />
              </div>
              <h2 className="text-2xl font-medium text-primary/80 tracking-wide">
                Не кто не хочет общяться с ЗвездоЛапам
              </h2>
              <p className="text-muted-foreground">
                Add some friends to start chatting!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;