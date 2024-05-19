require("dotenv").config();
const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
const fetch = require("node-fetch");

const id = "1241785452688703598"; // feel free to change this to your own application id

RPC.register(id);

if (
  !process.env.KASM_DOMAIN ||
  !process.env.KASM_USER_TOKEN ||
  !process.env.KASM_USERNAME
)
  return console.log(
    "Please fill in the .env file. See .env.example for help."
  );

client.on("ready", () => {
  console.log("Connected to Discord");

  let initialDate = new Date().getTime();
  let currentKasm = "";

  setInterval(async () => {
    const kasm = await fetch(
      `https://${process.env.KASM_DOMAIN}/api/get_user_kasms`,
      {
        headers: {
          accept: "application/json",
          "accept-language": "en-US,en;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/json",
          pragma: "no-cache",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          cookie: `session_token=${process.env.KASM_USER_TOKEN}; username=${process.env.KASM_USERNAME}`,
          Referer: `https://${process.env.KASM_DOMAIN}/`,
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: `{"token":"${process.env.KASM_USER_TOKEN}","username":"${process.env.KASM_USERNAME}"}`,
        method: "POST",
      }
    );

    try {
      const kasmInfo = await kasm.json();

      if (!kasmInfo?.kasms?.length === 0 || !kasmInfo?.kasms[0])
        return client.clearActivity();

      currentKasm = kasmInfo?.kasms[0]?.image.created_date;

      if (currentKasm !== kasmInfo?.kasms[0]?.image.created_date) {
        initialDate = new Date().getTime();
      } else {
      }

      client.setActivity({
        details: !kasmInfo?.kasms[0]
          ? "No current Kasms running."
          : kasmInfo?.kasms[0].image.friendly_name,
        state: !kasmInfo?.kasms[0]
          ? "No current Kasms running."
          : `${kasmInfo?.kasms[0]?.image?.default_category} - ${kasmInfo?.kasms[0]?.image?.image_type}`,
        startTimestamp: initialDate,
        largeImageKey: `https://${process.env.KASM_DOMAIN}/${
          kasmInfo?.kasms[0]?.image.image_src || "img/favicon.png"
        }`,
        largeImageText: !kasmInfo?.kasms[0]
          ? "Unknown"
          : kasmInfo?.kasms[0].image.friendly_name,
        smallImageKey: `https://${process.env.KASM_DOMAIN}/img/favicon.png`,
        smallImageText: !kasmInfo?.kasms[0]
          ? "Unknown"
          : `Kasm expires: ${kasmInfo?.kasms[0]?.expiration_date}`,
        instance: true,
      });
    } catch (error) {}
  }, 10000);
  // 60000
});

client.login({ clientId: id });
