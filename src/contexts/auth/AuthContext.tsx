import React, {createContext, useState,useEffect} from 'react'

type AuthContext = {
    twitchAccessToken: string | null;
    youtubeAccessToken: string | null;
}

export const AuthContext = createContext<AuthContext>({
    twitchAccessToken: null,
    youtubeAccessToken:null,
})

type AuthContextProviderProps = {
    children: React.ReactNode;
}


export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    const [twitchAccessToken, setTwitchAccessToken] = useState<string | null>(null);
    const [youtubeAccessToken, setYoutubeAccessToken] = useState<string | null>(null);

    useEffect(() => {
        chrome.storage.local.get(['Twitch-Access-Token', 'Youtube-Access-Token'], function (result) {
            setTwitchAccessToken(result['Twitch-Access-Token']);
            setYoutubeAccessToken(result['Youtube-Access-Token']);
        })
    }, []);

    return (
        <AuthContext.Provider
            value = {{
                twitchAccessToken,
                youtubeAccessToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}