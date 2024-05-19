# kasmcord

a kasm workspaces api discord rpc thing (need to configure w/ ur own domain and stuff)

#

🎗️ - Bring them home NOW! 🇮🇱✡️

Coding by [pizzabossxd](https://github.com/pizzabossxd) && [Corazon](https://github.com/assafgold1)
brought to you by [p8.lc](https://p8.lc)

#

# how to setup 💜

## 1. ensure that the engine is installed

### make sure you have node.js installed - [https://nodejs.org](https://nodejs.org) or bunjs or deno, whichever works...

## 2. sign in to kasm

- find your kasm token by opening devtools and hitting the network tab, then, going to a request like "get_user_kasms" and going to the "Payload" tab, look for the "token" and "username" parameters, you want to copy the values of these, and paste them in a file you create called ".env"

- keep in mind that sometimes kasm might log you out, so in case it doesn't work, you may want to collect and paste the token again.

exmple image -

step 1 sign in to kasm

![image](https://media.discordapp.net/attachments/1219780930999156898/1241879337314025582/yBBLuWv.png?ex=664bcdc3&is=664a7c43&hm=f2d35edc2b0707ef55b864d5661637de305029e98c0adb8090f8bc46674b3e84&=&format=webp&quality=lossless&width=825&height=462)

step 2 open dev tools

![image](https://media.discordapp.net/attachments/1219780930999156898/1241879898977603584/RQ5ZlSl.png?ex=664bce48&is=664a7cc8&hm=f82750d4cbe26d1de59e2b11e0ca27bb86cb3f34ed1285dcd953e4bb77208853&=&format=webp&quality=lossless&width=2077&height=1170)

step 3 go to the network tab and then find "get_user_kasms" then select payload section

![ima](https://media.discordapp.net/attachments/1219780930999156898/1241838262289432606/cqjyOZZ.png?ex=664ba781&is=664a5601&hm=683430aa9a3ce057a25e2713f406b61ae36cfb126e24600e777f56f11c907c31&=&format=webp&quality=lossless&width=438&height=525)

step 4

![3](https://media.discordapp.net/attachments/1241720973229555712/1241881178722668655/ag3ybJq.png?ex=664bcf7a&is=664a7dfa&hm=373dc3c898f58e5eddf17caa072f1a19dc27dfdbb3147d5b292766cae7241229&=&format=webp&quality=lossless&width=1437&height=1164)

make sure to run "npm i" or "pnpm i", "yarn", or "bun install", whichever you use.

### you just start the thing with "npm start" or "pnpm start", or "yarn start" or... "bun start"?

## 4. well done!

- congrats! now u just gotta ensure that u enabled "Share your detected activities with others" setting in "Activity Privacy" on discord.