"use client";
import React, { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState(null);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user, 
  });

  useEffect(() => {
    if (!client) return;

    const initializeChannel = async () => {
      try {
        const channel = client.channel('messaging', slug, {
          image: 'https://getstream.io/random_png/?name=react',
          name: slug.toUpperCase(),
          members: [userId],
        });
        await channel.watch();
        setChannel(channel);
      } catch (error) {
        console.error("Error setting up the channel:", error);
      }
    };

    initializeChannel();
  }, [client, slug, userId]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      {channel ? (
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      ) : (
        <div>Loading channel...</div>
      )}
    </Chat>
  );
}

export default ChatForum;
