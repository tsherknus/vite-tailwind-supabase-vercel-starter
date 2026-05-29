import {createContext, type PropsWithChildren, useContext, useEffect, useState} from "react";
import {supabase} from "../supabaseClient.ts";
import type {Session} from "@supabase/supabase-js";

export interface AuthContextType {
    session: Session | null;
    loading: boolean;
    subscription: string | null;
    signIn: (
        email: string,
        password: string
    ) => Promise<{ success: boolean; data?: unknown; error?: unknown }>;
    signOut: () => Promise<void>;
    signUp: (
        email: string,
        password: string
    ) => Promise<{ success: boolean; data?: unknown; error?: unknown }>;
}

const AuthContext = createContext(undefined)

export function AuthContextProvider({children}: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [subscription, setSubscription] = useState<string | null>(null)

    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.toLowerCase(),
            password: password,
        })

        // Handle Supabase error explicitly
        if (error) {
            return { success: false, error: error }
        }

        // If no error, return success
        return { success: true, data }
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.error("Error signing out:", error)
        }
    }

    const signUp = async (email: string, password: string) => {
        const {data, error} = await supabase.auth.signUp({
            email: email.toLowerCase(),
            password: password,
        })

        if (error) {
            return {success: false, error: error}
        }

        return {success: true, data}
    }

    async function fetchSubscription() {
        const { data, error } = await supabase
            .from("user_info")
            .select("subscription_type, paid")

        if (error) throw error

        if (data[0].paid) {
            setSubscription(data[0].subscription_type)
        } else {
            setSubscription('free')
        }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setLoading(false)
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        });

        fetchSubscription()
    }, []);

    return (
        // @ts-ignore
        <AuthContext.Provider value={{ session, loading, subscription, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context
}