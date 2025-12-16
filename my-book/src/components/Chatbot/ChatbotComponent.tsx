import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatbotComponent.module.css';

const ChatbotComponent: React.FC = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (message.trim() === '') return;

        addMessage('You', message);
        const userMessage = message;
        setMessage('');

        try {
            const response = await fetch('http://localhost:3002/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });
            const data = await response.json();
            addMessage('Bot', data.reply);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Error', 'Could not connect to the chatbot service.');
        }
    };

    const addMessage = (sender: string, text: string) => {
        setMessages((prevMessages) => [...prevMessages, { sender, text }]);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messages}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles.message}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className={styles.userInput}>
                <input
                    type="text"
                    className={styles.messageInput}
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className={styles.sendButton} onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatbotComponent;
