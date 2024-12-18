import { ServerSidebar } from "@/components/ServerSidebar";
import { ChannelSidebar } from "@/components/ChannelSidebar";
import { ChatArea } from "@/components/ChatArea";
import { UserSidebar } from "@/components/UserSidebar";

const defaultFriend = {
  id: 1,
  name: "StarPaw",
  status: "Online",
  avatar: "/starpaw-logo.png"
};

const Chat = () => {
  return (
    <div className="h-screen flex bg-black/95">
      <ServerSidebar />
      <ChannelSidebar />
      <ChatArea friend={defaultFriend} />
      <UserSidebar />
    </div>
  );
};

export default Chat;