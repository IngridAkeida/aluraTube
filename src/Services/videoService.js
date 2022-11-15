import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://fvlloyphzereqksbztrw.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bGxveXBoemVyZXFrc2J6dHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNDA3MzcsImV4cCI6MTk4MzkxNjczN30.b4i1YlX062UZxiEQMxltF5rAnbbLfHnc2Bi538f5xdQ";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


export function videoService(){
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
                .order("created_at", { ascending: false });
        }
    }
};
