"use client";

import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import { useEffect, useRef } from "react";

export default function ChatBot() {
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        createChat({
            webhookUrl: "https://n8n.cogrowai.com/webhook/8da4cbeb-1217-4271-a12f-35dbf7f5f2c5/chat",
            mode: "window",
        });
    }, []);

    return null;
}
