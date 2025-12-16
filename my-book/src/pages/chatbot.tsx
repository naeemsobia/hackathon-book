import React from 'react';
import Layout from '@theme/Layout';
import ChatbotComponent from '@site/src/components/Chatbot/ChatbotComponent';

function ChatbotPage() {
  return (
    <Layout title="Chatbot" description="Chat with our simple bot">
      <main>
        <ChatbotComponent />
      </main>
    </Layout>
  );
}

export default ChatbotPage;
