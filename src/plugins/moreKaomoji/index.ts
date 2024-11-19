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

import { findOption, OptionalMessageOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Radiant Autofill",
    description: "Stuff For radiant",
    authors: [Devs.Vince],
    commands: [

        { name: "install", description: "Sends the instruction manual message", msg: "You can have a brief look at all the step-by-step installation guides at https://radiant.cc/forum/9-user-manuals for the menu that you have purchased." },



    ].map(data => ({
        ...data,

        execute: () => ({
            content: data.msg
        })
    }))
});
