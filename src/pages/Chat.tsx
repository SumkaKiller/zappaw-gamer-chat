import { ServerSidebar } from "@/components/ServerSidebar";
import { ChannelSidebar } from "@/components/ChannelSidebar";
import { ChatArea } from "@/components/ChatArea";
import { UserSidebar } from "@/components/UserSidebar";

const Chat = () => {
  return (
    <div className="h-screen flex bg-black/95">
      <ServerSidebar />
      <ChannelSidebar />
      <ChatArea />
      <UserSidebar />
    </div>
  );
};

export default Chat;