// Import React and useState (if needed)
import React from 'react';
import { useEffect } from 'react';

// Functional component example
const MyComponent = () => {
    useEffect(() => {
        // Define the embeddedChatbotConfig as a window variable
        window.embeddedChatbotConfig = {
        chatbotId: "9itfAxllevmixIoCaSfpJ",
        domain: "www.chatbase.co"
        };

        // Load the embed script dynamically
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.chatbotId = "9itfAxllevmixIoCaSfpJ";
        script.domain = "www.chatbase.co";
        script.defer = true;

        document.body.appendChild(script);

        // Clean up function
        return () => {
        document.body.removeChild(script);
        };
    }, []);
  return (
    <>
    </>
  );
};

export default MyComponent;