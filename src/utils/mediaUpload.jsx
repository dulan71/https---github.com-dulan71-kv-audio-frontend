import { createClient } from "@supabase/supabase-js"


const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxc2ZnYWVwb2pxYmhwbGJ1a3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MTUyNjIsImV4cCI6MjA1NTk5MTI2Mn0.Afs4TelbCR-oI_Pj7A_tpiz7BtlHsh1A3e_z0d2hZ5U"

const supabase_url = "https://dqsfgaepojqbhplbukpe.supabase.co"

const supabase = createClient(supabase_url, anon_key) //function we use to connect supabase

export default function mediaUpload(file){

    return new Promise((resolve,reject)=>{
        if(file == null){
            reject("No file selected")
        }
        const timestamp = new Date().getTime(); // add timestamp 
        const fileName = timestamp + file.name
    
       supabase.storage.from("images").upload(fileName,file,{ //supabase eke bucket file name 
        cacheControl : '3600',
        updert : false,

    }).then(()=>{
       const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
       console.log(publicUrl);
    }).catch(()=>{
        reject("Error uploading file")
    })

    });

    
 
}