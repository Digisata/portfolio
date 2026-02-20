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
            initialMessages: [
                "Halo! 👋",
                "Kenalin aku NopalBot, asisten virtual Mas Naufal. Ada yang pengen ditanyain seputar karir atau project Mas Naufal?"
            ],
            i18n: {
                en: {
                    title: 'NopalBot 👋',
                    subtitle: 'Asisten virtual Naufal siap membantu!',
                    footer: '',
                    getStarted: 'Mulai Chat',
                    inputPlaceholder: 'Ketik pertanyaanmu di sini...',
                    closeButtonTooltip: 'Tutup',
                },
            },
        });
    }, []);

    return null;
}
