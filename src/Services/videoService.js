import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://okstarojudwxmjdcuhea.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rc3Rhcm9qdWR3eG1qZGN1aGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4OTU1OTUsImV4cCI6MTk4MDQ3MTU5NX0.shktap50ImF9SqhqcsugSpg38trqKe7aNEP4RvhpQE0";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

/*function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}

export default videoService;*/

export function videoService() {
    const databaseTable = 'podcasts'
  
    function insert(podcastToInsert) {
      return supabase
        .from(databaseTable)
        .insert(podcastToInsert)
    }
  
    function getAll() {
      return supabase
        .from(databaseTable)
        .select('*')
    }
  
    function remove(id) {
      return supabase
        .from(databaseTable)
        .delete()
        .match({ id })
    }
  
    function observer(callback) {
      return supabase
        .from(databaseTable)
        .on('INSERT', callback)
        .on('DELETE', callback)
        .subscribe()
    }
  
    return { insert, getAll, remove, observer }
  }

  export default videoService;