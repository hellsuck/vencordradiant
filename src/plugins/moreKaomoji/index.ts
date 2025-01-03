/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Radiant Tweaks",
    description: "Stuff For radiant server",
    authors: [Devs.Vince],
    commands: [

        { name: "install", description: "Sends the instruction manual message", msg: "You can have a brief look at all the step-by-step installation guides at https://radiant.cc/forum/9-user-manuals for the menu that you have purchased." },

        { name: "key", description: "Tells the customer where they can find their key", msg: "You can view the license key for the menu you purchased by visting the \"Your Keys\" page at https://radiant.cc/module/serialnumbers/showTable" },
        { name: "midnight", description: "Sends them to the midnight cs2 guide", msg: "You can access the installation guide for Midnight CS2 by visiting the following link: https://radiant.cc/forum/topic/14-midnight-cs2.html" },
        { name: "neverlose", description: "Sends them to the neverlose cs2 guide", msg: "You can access the installation guide for Neverlose CS2 by visiting the following link: https://radiant.cc/forum/topic/37-neverlose-cs2.html" },
        { name: "Cherax", description: "Sends them to the Cherax gta guide", msg: "You can access the installation guide for Cherax by visiting the following link: https://radiant.cc/forum/topic/15-cherax-gta.html" },
        { name: "OvixGta", description: "Sends them to the Ovix Gta guide", msg: "You can access the installation guide for Ovix GTA by visiting the following link: https://radiant.cc/forum/topic/41-ovix-gta.html" },
        { name: "Stand", description: "Sends them to the Stand guide", msg: "You can access the installation guide for Stand by visiting the following link: https://radiant.cc/forum/topic/27-stand-gta.html" },
        { name: "Ethereal", description: "Sends them to the Ethereal Gta guide", msg: "You can access the installation guide for Ethereal by visiting the following link: https://radiant.cc/forum/topic/19-ethereal-gta.html" },
        { name: "MemeSense", description: "Sends them to the Memesense cs2 guide", msg: "You can access the installation guide for MemeSense by visiting the following link: https://radiant.cc/forum/topic/36-memesense-cs2.html" },
        { name: "Anyx", description: "Sends them to the Anyx cs2 guide", msg: "You can access the installation guide for AnyX by visiting the following link: https://radiant.cc/forum/topic/56-anyx-cs2.html" },
        { name: "Predator", description: "Sends them to the Predator cs2 guide", msg: "You can access the installation guide for Predator by visiting the following link: https://radiant.cc/forum/topic/38-predator-cs2.html" },
        { name: "Plague", description: "Sends them to the Plague cs2 guide", msg: "You can access the installation guide for Plague by visiting the following link: https://radiant.cc/forum/topic/39-plague-cs2.html" },
        { name: "OvixCS2", description: "Sends them to the Ovix cs2 guide", msg: "You can access the installation guide for Ovix CS2 by visiting the following link: https://radiant.cc/forum/topic/72-ovix-cs2.html" },
        { name: "RedEngine", description: "Sends them to the Redengine FiveM guide", msg: "You can access the installation guide for RedEngine by visiting the following link: https://radiant.cc/forum/topic/63-redengine.html" },
        { name: "Eulen", description: "Sends them to the Eulen FiveM guide", msg: "You can access the installation guide for Eulen by visiting the following link: https://radiant.cc/forum/topic/60-eulen-fivem.html" },
        { name: "0xCheatsFiveM", description: "Sends them to the 0xCheats FiveM guide", msg: "You can access the installation guide for 0xCheats Fivem by visiting the following link: https://radiant.cc/forum/topic/59-oxcheats-fivem.html" },
        { name: "Dream", description: "Sends them to the Dream Client Minecraft guide", msg: "You can access the installation guide for Dream by visiting the following link: https://radiant.cc/forum/topic/80-minecraft-dream-client.html" },
        { name: "EtherealSP", description: "Sends them to the Ethereal Spoofer guide", msg: "You can access the installation guide for Ethereal Spoofer by visiting the following link: https://radiant.cc/forum/topic/129-ethereal-hwid-spoofer.html" },
        { name: "FecurityCOD", description: "Sends them to the Fecurity COD guide", msg: "You can access the installation guide for Fecurity For Call of duty by visiting the following link: https://radiant.cc/forum/topic/69-call-of-duty-warzone-fecurity.html" },
        { name: "Wel", description: "Welcomes the customer", msg: "Welcome to radiant!" },
        { name: "OvixRDR2", description: "Sends them to the Ovix RDR2 guide", msg: "You can access the installation guide for Ovix RDR2 by visiting the following link: https://radiant.cc/forum/topic/51-ovix-rdr2.html" },
        { name: "FiKitRDR2", description: "Sends them to the Fikit RDR2 guide", msg: "You can access the installation guide for Fikit RDR2 by visiting the following link: https://radiant.cc/forum/topic/44-fikit-rdr2.html" },
        { name: "NewWayRDR2", description: "Sends them to the NewWay RDR2 guide", msg: "You can access the installation guide for NewWay RDR2 by visiting the following link: https://radiant.cc/forum/topic/46-newway-rdr2.html" },
        { name: "0xCheatsRDR2", description: "Sends them to the 0xCheats RDR2 guide", msg: "You can access the installation guide for 0xCheats RDR2 by visiting the following link: https://radiant.cc/forum/topic/42-oxcheats-rdr2.html" },
        { name: "FortitudeRDR2", description: "Sends them to the Fortitude RDR2 guide", msg: "You can access the installation guide for Fortitude RDR2 by visiting the following link: https://radiant.cc/forum/topic/45-fortitude-rdr2.html" },
        { name: "ExodusRDR2", description: "Sends them to the Exodus RDR2 guide", msg: "You can access the installation guide for Exodus RDR2 by visiting the following link: https://radiant.cc/forum/topic/43-exodus-r2d2.html" },
        { name: "Raiden", description: "Sends them the Raiden GTA V guide", msg: "Make an account on https://raiden.gg and after you have made an account login to the dashboard, \nIn the dashboard press control panel and in the licence activation box paste in the key you recieved from us and press redeem \nPress the download button in the sidebar and download the loader" },
        { name: "Ring-1", description: "Sends them the Ring-1 guide for every game.", msg: "You can access the installation guide for Ring-1 by visiting the following link: https://radiant.cc/forum/topic/140-ring-1.html" },
        { name: "nl-topup", description: "Tells them the bot has been topped up", msg: "The Bot has been topped up now, sorry for the delay." }
    ].map(data => ({
        ...data,

        execute: () => ({
            content: data.msg
        })
    }))
});
