import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, User } from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  const handleAddFriend = () => {
    toast.success("Friend request feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Friends</h1>
          <Button 
            onClick={handleAddFriend}
            className="gap-2 animate-glow"
          >
            <UserPlus className="w-4 h-4" />
            Add Friend
          </Button>
        </div>

        {/* Friends List */}
        <div className="grid gap-4 md:grid-cols-2">
          {friends.map((friend) => (
            <Card key={friend.id} className="p-4 bg-secondary/50 border-primary/10 hover:border-primary/20 transition-all">
              <div className="flex items-center gap-4">
                <Avatar className="border-2 border-primary/20">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium text-primary/90">{friend.name}</h3>
                  <p className="text-sm text-muted-foreground">{friend.status}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:text-primary"
                  onClick={() => toast.info(`Chat with ${friend.name} coming soon!`)}
                >
                  Message
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;