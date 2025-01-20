import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

const api_key = process.env.NEXT_PUBLIC_API_KEY;
const api_secret = process.env.API_SECRET;
// const user_id = "user_2rnXzBuDgksrxqN5LC7xTIZ4nb3";


export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()
// Create User Token
const token = serverClient.createToken(user.data.id);
// console.log(token)
    // console.log(body)
    console.log("a new user created", token)
    const client = await clerkClient()
    await serverClient.upsertUser({id: user.data.id})
    await client.users.updateUserMetadata(user.data.id, {
      publicMetadata: {
        token:token
      },
    })
    //give access to thisuser
    const slugs = [
        "python-discuss-new",
        "php-conversations-new",
        "swift-development-new",
        "typescript-talk-new",
        "csharp-discuss-new",
        "html-css-talk-new"
    ]
    slugs.forEach(async(item)=>{
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: item.toUpperCase(),
            created_by_id: user.data.id
          });
          await channel.create()
          channel.addMembers([user.data.id]) 
    })
    return Response.json({ message: 'Hello World' })
  }