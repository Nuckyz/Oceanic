"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Interaction_1 = __importDefault(require("./Interaction"));
const Member_1 = __importDefault(require("./Member"));
const Guild_1 = __importDefault(require("./Guild"));
const Permission_1 = __importDefault(require("./Permission"));
const Constants_1 = require("../Constants");
class AutocompleteInteraction extends Interaction_1.default {
    /** The permissions the bot has in the channel this interaction was sent from. */
    appPermissions;
    /** The channel this interaction was sent from. */
    channel;
    /** The data associated with the interaction. */
    data;
    /** The guild this interaction was sent from, if applicable. */
    guild;
    /** The preferred [locale](https://discord.com/developers/docs/reference#locales) of the guild this interaction was sent from, if applicable. */
    guildLocale;
    /** The [locale](https://discord.com/developers/docs/reference#locales) of the invoking user. */
    locale;
    /** The member associated with the invoking user. */
    member;
    /** The user that invoked this interaction. */
    user;
    constructor(data, client) {
        super(data, client);
        this.appPermissions = !data.app_permissions ? undefined : new Permission_1.default(data.app_permissions);
        this.channel = this._client.getChannel(data.channel_id);
        this.data = {
            guildID: data.data.guild_id,
            id: data.data.id,
            name: data.data.name,
            options: data.data.options || [],
            type: data.data.type
        };
        this.guild = !data.guild_id ? undefined : this._client.guilds.get(data.guild_id);
        this.guildLocale = data.guild_locale;
        this.locale = data.locale;
        this.member = data.member ? this.guild instanceof Guild_1.default ? this.guild.members.update({ ...data.member, id: data.member.user.id }, this.guild.id) : new Member_1.default(data.member, this._client, this.guild.id) : undefined;
        this.user = this._client.users.update((data.user || data.member.user));
    }
    /**
     * Acknowledge this interaction with a set of choices. This is an initial response, and more than one initial response cannot be used.
     *
     * @param {Object[]} choices - The choices to send.
     * @param {string} choices[].name - The name of the choice.
     * @param {Object} choices[].nameLocalizations - A dictionary of [locales](https://discord.com/developers/docs/reference#locales) to localized names.
     * @param {string} choices[].value - The value of the choice.
     * @returns {Promise<void>}
     */
    async defer(choices) {
        if (this.acknowledged)
            throw new Error("Interactions cannot have more than one initial response.");
        this.acknowledged = true;
        return this._client.rest.interactions.createInteractionResponse(this.id, this.token, { type: Constants_1.InteractionResponseTypes.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT, data: choices });
    }
    toJSON() {
        return {
            ...super.toJSON(),
            appPermissions: this.appPermissions?.toJSON(),
            channel: this.channel.id,
            data: this.data,
            guild: this.guild?.id,
            guildLocale: this.guildLocale,
            locale: this.locale,
            member: this.member?.toJSON(),
            type: this.type,
            user: this.user.toJSON()
        };
    }
}
exports.default = AutocompleteInteraction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b2NvbXBsZXRlSW50ZXJhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc3RydWN0dXJlcy9BdXRvY29tcGxldGVJbnRlcmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUF3QztBQUN4QyxzREFBOEI7QUFFOUIsb0RBQTRCO0FBQzVCLDhEQUFzQztBQUV0Qyw0Q0FBd0Q7QUFNeEQsTUFBcUIsdUJBQXdCLFNBQVEscUJBQVc7SUFDL0QsaUZBQWlGO0lBQ2pGLGNBQWMsQ0FBYztJQUM1QixrREFBa0Q7SUFDbEQsT0FBTyxDQUFrQjtJQUN6QixnREFBZ0Q7SUFDaEQsSUFBSSxDQUE4QjtJQUNsQywrREFBK0Q7SUFDL0QsS0FBSyxDQUFTO0lBQ2QsZ0pBQWdKO0lBQ2hKLFdBQVcsQ0FBVTtJQUNyQixnR0FBZ0c7SUFDaEcsTUFBTSxDQUFTO0lBQ2Ysb0RBQW9EO0lBQ3BELE1BQU0sQ0FBVTtJQUVoQiw4Q0FBOEM7SUFDOUMsSUFBSSxDQUFPO0lBQ1gsWUFBWSxJQUFnQyxFQUFFLE1BQWM7UUFDM0QsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQWlCLElBQUksQ0FBQyxVQUFXLENBQUUsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUMzQixFQUFFLEVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLElBQUksRUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElB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