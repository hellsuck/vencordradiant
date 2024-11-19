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
    name: "Radiant Autofill",
    description: "Stuff For radiant",
    authors: [Devs.Vince],
    commands: [

        { name: "install", description: "Sends the instruction manual message", msg: "You can have a brief look at all the step-by-step installation guides at https://radiant.cc/forum/9-user-manuals for the menu that you have purchased." },

        { name: "key", description: "Tells the customer where they can find their key", msg: "You can view the license key for the menu you purchased by visting the \"Your Keys\" at https://radiant.cc/module/serialnumbers/showTable" },
        { name: "midnight", description: "Sends them to the midnight cs2 guide", msg: "You can access the installation guide for Midnight CS2 by visiting the following link: https://radiant.cc/forum/topic/14-midnight-cs2.html" },
        { name: "neverlose", description: "Sends them to the neverlose cs2 guide", msg: "You can access the installation guide for Neverlose CS2 by visiting the following link: https://radiant.cc/forum/topic/37-neverlose-cs2.html" },
    ].map(data => ({
        ...data,

        execute: () => ({
            content: data.msg
        })
    }))
});
