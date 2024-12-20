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
      toast.error("Пожалуйста, введите имя пользователя");
      return;
    }
    
    toast.success(`Запрос в друзья отправлен пользователю ${friendUsername}!`);
    setFriendUsername("");
    setIsAddFriendOpen(false);
  };

  const handleUserClick = (friend: Friend) => {
    setSelectedFriend(friend);
    toast.info(`Открыт чат с ${friend.name}`);
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 bg-secondary flex flex-col border-r border-primary/10">
        <div className="p-4 flex items-center justify-between bg-primary/5">
          <h2 className="text-lg font-semibold text-foreground/90">Друзья</h2>
          <Dialog open={isAddFriendOpen} onOpenChange={setIsAddFriendOpen}>
            <DialogTrigger asChild>
              <Button 
                size="sm"
                className="gap-2 hover-scale hover-glow bg-primary/80 hover:bg-primary"
              >
                <UserPlus className="w-4 h-4" />
                Добавить
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-secondary border-primary/20">
              <DialogHeader>
                <DialogTitle>Добавить друга</DialogTitle>
                <DialogDescription>
                  Введите имя пользователя, чтобы отправить запрос в друзья.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input
                    value={friendUsername}
                    onChange={(e) => setFriendUsername(e.target.value)}
                    placeholder="Введите имя пользователя..."
                    className="bg-primary/20 border-primary/10 focus:border-primary/30 transition-all"
                  />
                </div>
                <Button 
                  onClick={handleAddFriend} 
                  className="px-3 hover-scale bg-primary/80 hover:bg-primary"
                >
                  Отправить
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <Separator className="bg-primary/10" />
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => handleUserClick(friend)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 cursor-pointer transition-all duration-200 hover-slide group animate-fadeIn"
            >
              <Avatar className="w-8 h-8 border border-primary/20 group-hover:border-primary/40 transition-all duration-200">
                <AvatarImage src={friend.avatar} className="hover-glow" />
                <AvatarFallback>
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground/90 truncate group-hover:text-foreground transition-colors">
                  {friend.name}
                </p>
                <p className="text-xs text-muted-foreground truncate group-hover:text-muted-foreground/80">
                  {friend.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-primary/5 border-t border-primary/10">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/80 hover-scale">
            <Avatar className="w-8 h-8 border border-primary/20">
              <AvatarImage src="/starpaw-logo.png" className="hover-glow" />
              <AvatarFallback>
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground/90 truncate">Вы</p>
              <p className="text-xs text-muted-foreground truncate">#1337</p>
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all hover-scale"
              onClick={() => toast.info("Настройки микрофона скоро будут доступны!")}
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all hover-scale"
              onClick={() => toast.info("Настройки звука скоро будут доступны!")}
            >
              <Headphones className="w-4 h-4" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all hover-scale"
              onClick={() => toast.info("Настройки пользователя скоро будут доступны!")}
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {selectedFriend ? (
          <ChatArea friend={selectedFriend} />
        ) : (
          <div className="flex items-center justify-center h-full p-6 bg-secondary">
            <div className="text-center space-y-4">
              <div className="inline-block p-6 rounded-full bg-primary/10 animate-pulse">
                <User className="w-12 h-12 text-primary/40" />
              </div>
              <h2 className="text-2xl font-medium text-foreground/80 tracking-wide animate-fadeIn">
                Не кто не хочет общаться с ЗвездоЛапом
              </h2>
              <p className="text-muted-foreground animate-slideIn">
                Добавьте друзей, чтобы начать общение!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;